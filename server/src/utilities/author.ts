/**
* return new author
* @returns new Author(){string ,string }
*/

import Author from '../model/author';

export default function getAuthor ():Author {
  return new Author('alexis', 'momtana');
}
