import { IDescription } from '../model/interfaces/IDescription';
import { IDetailItem } from '../model/interfaces/IDetailItem';
import { ItemDetail } from '../model/interfaces/ItenDetail';
import ItemApiDetail from '../model/ItemDetail';
import getAuthor from './author';
import currencyFormatter from './currencyFormatter';

export default class Mapperdetail {
     item: IDetailItem;

    response: ItemApiDetail;

    description: IDescription;

    constructor (item: IDetailItem, description: IDescription) {
      this.item = item;
      this.description = description;
      this.response = new ItemApiDetail();
    }

    /**
    * method to mapper to response service
    *  @returns new ItemsSearch
    */
    async onMapperDetail (): Promise<ItemApiDetail> {
      try {
        if (Object.keys(this.item).length === 0) return this.response;

        this.response.author = getAuthor();
        this.response.item = await this.getItemDetail();
        return this.response;
      } catch (error) { return null; }
    }

    /**
    * return item
    * @returns ItemDetail
    */
    async getItemDetail (): Promise<ItemDetail> {
      return new Promise((resolve) => {
        const resp:ItemDetail = {
          id: this.item.id,
          title: this.item.title,
          price: {
            amount: currencyFormatter(this.item.price),
            currency: this.item.currency_id,
            decimals: currencyFormatter(this.item.price),
          },
          picture: this.getImg(this.item.pictures),
          condition: this.item.condition,
          free_shipping: this.item.shipping?.free_shipping,
          sold_quantity: this.item.sold_quantity,
          description: this.description?.plain_text,
        };

        resolve(resp);
      });
    }

    // eslint-disable-next-line class-methods-use-this
    getImg (arrayPictores:Array<any>):string {
      return arrayPictores[0].url ? arrayPictores[0].url : '';
    }
}
