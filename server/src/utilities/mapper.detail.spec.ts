
import { mapperdetail } from "./mapper.detail";
import {getItem} from '../../mock/mockItem'
import {getDescriptionMock} from '../../mock/mockDescription'

var assert = require("chai").assert;

describe('Test mapperdetail', () => {
    let description = getDescriptionMock();
  
  it('validate if item  is  null  send {}  retunr  Object.keys({}).length = 0', () => {
        assert.equal(Object.keys({}).length, 0)
   })
  
    it('validate whem shipping is {}  return free_shipping = undefined ',  async() => {
        let item =  getItem(false)
        var classTest = new mapperdetail(item , description);
        var result =  await classTest.getItemDetail()
        assert.equal(result.free_shipping, undefined)
    })

    it('validate whem shipping  have values  return free_shipping (typeOf Boolean) )',  async() => {
        let item =  getItem(true)
        var classTest = new mapperdetail(item , description);
        var result =  await classTest.getItemDetail()
        assert.typeOf(result.free_shipping ,"Boolean")
    })

    it('validate whem description  have values  return ItemDetail.description (typeOf string) )',  async() => {
        let item =  getItem(true)
        let description =  getDescriptionMock();
        var classTest = new mapperdetail(item , description);
        var result =  await classTest.getItemDetail()
        assert.typeOf(result.description ,"string")
    })


    it('validate whem description is  { }  return ItemDetail.description = undefined) )',  async() => {
        let item =  getItem(true)
        let description =  getDescriptionMock(false);
        var classTest = new mapperdetail(item , description);
        var result =  await classTest.getItemDetail()
        assert.equal(result.description ,undefined)
    })

   

})
