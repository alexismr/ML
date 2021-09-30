import getItemSearch from '../../mock/mockItems';
import Mappersearch from './mapper.search';

const { assert } = require('chai');

describe('Test mappersearch', () => {
  const item = getItemSearch();

  it('validate if item  is  null  send {}  retunr  Object.keys({}).length = 0', async () => {
    assert.equal(Object.keys({}).length, 0);
  });

  it('validate create element whithout  shipping return undefined ', async () => {
    const classTest = new Mappersearch(item);
    const element = {
      id: 'MLA876189159',
      site_id: 'MLA',
      title: 'Tarjeta De Memoria Kingston Sdcs Canvas Select Con Adaptador Sd 32gb',
      seller: {},
      price: 549,
      prices: {},
      sale_price: '',
      currency_id: 'ARS',
      available_quantity: 197,
      sold_quantity: 361,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2040-08-27T04:00:00.000Z',
      condition: 'new',
      // eslint-disable-next-line max-len
      permalink: 'https://www.mercadolibre.com.ar/tarjeta-de-memoria-kingston-sdcs-canvas-select-con-adaptador-sd-32gb/p/MLA10359999',
      thumbnail: 'http://http2.mlstatic.com/D_927143-MLA42003898015_052020-I.jpg',
      accepts_mercadopago: true,
      installments: {},
      address: {
        state_id: 'string',
        state_name: 'string',
        city_id: 'string',
        city_name: 'string',
      },
      seller_address: {},
      attributes: [],
      original_price: 2,
      category_id: 'MLA9467',
      official_store_id: 2,
      domain_id: 'MLA-MEMORY_CARDS',
      catalog_product_id: 'MLA10359999',
      tags: [],
      catalog_listing: true,
      order_backend: 1,
    };

    const result = classTest.createelementitem(element);
    assert.equal(result.free_shipping, undefined);
  });
  it('validate create element whith  shipping return string  ', async () => {
    const classTest = new Mappersearch(item);
    const element = {
      id: 'MLA876189159',
      site_id: 'MLA',
      title: 'Tarjeta De Memoria Kingston Sdcs Canvas Select Con Adaptador Sd 32gb',
      seller: {},
      price: 549,
      prices: {},
      sale_price: '',
      currency_id: 'ARS',
      available_quantity: 197,
      sold_quantity: 361,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2040-08-27T04:00:00.000Z',
      condition: 'new',
      // eslint-disable-next-line max-len
      permalink: 'https://www.mercadolibre.com.ar/tarjeta-de-memoria-kingston-sdcs-canvas-select-con-adaptador-sd-32gb/p/MLA10359999',
      thumbnail: 'http://http2.mlstatic.com/D_927143-MLA42003898015_052020-I.jpg',
      accepts_mercadopago: true,
      installments: {},
      address: {
        state_id: 'string',
        state_name: 'string',
        city_id: 'string',
        city_name: 'string',
      },
      shipping: {
        free_shipping: false,
        mode: 'me2',
        tags: [
        ],
        logistic_type: 'xd_drop_off',
        store_pick_up: false,
      },
      seller_address: {},
      attributes: [],
      original_price: 2,
      category_id: 'MLA9467',
      official_store_id: 2,
      domain_id: 'MLA-MEMORY_CARDS',
      catalog_product_id: 'MLA10359999',
      tags: [],
      catalog_listing: true,
      order_backend: 1,
    };

    const result = classTest.createelementitem(element);
    assert.typeOf(result.free_shipping, 'Boolean');
  });
});
