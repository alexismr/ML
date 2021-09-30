import Mapperdetail from './mapper.detail';
import getItem from '../../mock/mockItem';
import getDescriptionMock from '../../mock/mockDescription';

const { assert } = require('chai');

describe('Test mapperdetail', () => {
  const description = getDescriptionMock();

  it('validate if item  is  null  send {}  retunr  Object.keys({}).length = 0', () => {
    assert.equal(Object.keys({}).length, 0);
  });

  it('validate whem shipping is {}  return free_shipping = undefined ', async () => {
    const item = getItem(false);
    const classTest = new Mapperdetail(item, description);
    const result = await classTest.getItemDetail();
    assert.equal(result.free_shipping, undefined);
  });

  it('validate whem shipping  have values  return free_shipping (typeOf Boolean) )', async () => {
    const item = getItem(true);
    const classTest = new Mapperdetail(item, description);
    const result = await classTest.getItemDetail();
    assert.typeOf(result.free_shipping, 'Boolean');
  });

  it('validate whem description  have values  return ItemDetail.description (typeOf string) )', async () => {
    const item = getItem(true);
    const classTest = new Mapperdetail(item, description);
    const result = await classTest.getItemDetail();
    assert.typeOf(result.description, 'string');
  });
});
