
/**
* return new author
* @returns new Author(){string ,string }
*/

import { Author } from "../model/author";

export function  getAuthor():Author{
     return new Author('alexis', 'momtana');
} 