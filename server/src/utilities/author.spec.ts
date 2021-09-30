import getAuthor from './author';

const { assert } = require('chai');

describe('Test author', () => {
  const Autor = getAuthor();

  it('name is equual alexis ', () => {
    assert.equal('alexis', Autor.name);
  });
  it('lastname is equual montana ', () => {
    assert.equal('momtana', Autor.lastname);
  });

  it('name is of type string ', () => {
    assert.typeOf(Autor.name, 'string');
  });

  it('lastname is of type string ', () => {
    assert.typeOf(Autor.name, 'string');
  });
});
