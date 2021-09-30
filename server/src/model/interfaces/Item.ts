import { IPrice } from './IPrice';

export interface Item {
      id:string;
      title:string;
      price:IPrice;
      picture:string;
      condition:string;
      // eslint-disable-next-line camelcase
      free_shipping:boolean;
}
