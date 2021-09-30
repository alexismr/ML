import { IPrice } from "./IPrice";

export    interface Item    {
      id:string;
      title:string;
      price:IPrice;
      picture:string;
      condition:string;
      free_shipping:boolean;
}


   