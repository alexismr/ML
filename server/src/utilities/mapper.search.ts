
import { IResult, Isearch } from "../model/interfaces/ISearch";
import { Item } from "../model/interfaces/Item";
import { ItemsSearch } from "../model/ItemsSearch";
import { getAuthor } from "./author";
import { currencyFormatter } from "./currencyFormatter";

export class mappersearch {
   protected data: Isearch;
   response: ItemsSearch;

   constructor(data: Isearch) {
      this.data = data;
      this.response = new ItemsSearch();
   }
  
   /**
    * method to mapper to response service
    *  @returns new ItemsSearch
    */
   async onMapperSearch(): Promise<ItemsSearch> {

      try {
         if (Object.keys(this.data).length === 0) return this.response;

         this.response.author = getAuthor();
         const [categories, items] = await Promise.all([this.getCategories() ,this.getItems()])
         this.response.categories = categories;
         this.response.items = items;
         return this.response;
      } catch (error) {
         
      }

   }

  


   /**
    * return categories 
    * @returns Array<string>
    */
   async getCategories(): Promise<Array<string>> {
      return new Promise((resolve) => {
         let array: Array<string> = [];
         let newarray = this.data.filters[0]?.values[0]?.path_from_root.map((item) => item.name);
         if (newarray) array = newarray;
         resolve(array);
      });
   }

   /**
    *  create new array  items 
    * @returns Array<Item>
    */
   async getItems(): Promise<Array<Item>> {
      return new Promise((resolve) => {
         let array: Array<Item> = [];
         let newarray = this.data.results.map((elem) => this.createelementitem(elem));
         if (newarray) array = newarray;
         resolve(array);
      });
   }


  /**
    * method to create  element Item
    * @param elem:IResult
    * @returns Item
    */
      createelementitem(elem:IResult):Item{
            if(!elem) return null;

            let  itemobj: Item = {
                  id: elem.id,
                  title: elem.title,
                  price: {
                     amount: currencyFormatter(elem.price),
                     currency: elem.currency_id,
                     decimals: currencyFormatter(elem.price)
                  },
                  picture: elem.thumbnail,
                  condition: elem.condition,
                  free_shipping: elem.shipping?.free_shipping,
               };
             return itemobj;
      }
 }