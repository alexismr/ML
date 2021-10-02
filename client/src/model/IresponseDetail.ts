import { Item } from "./IItem";

export   interface IresponseDetail {
    author:{ 
         name:string;
         lastname:string; 
        };
    item:Item;
}