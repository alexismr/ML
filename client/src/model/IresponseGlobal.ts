import { Item } from "./IItem";


    export interface Author {
        name: string;
        lastname: string;
    }

    export interface Price {
        amount: string;
        currency: string;
        decimals: string;
    }

    export interface Body {
        author: Author;
        categories: string[];
        items: Item[];
    }

    export interface RootItems {
        ok: boolean;
        mensaje: string;
        body: Body;
    }