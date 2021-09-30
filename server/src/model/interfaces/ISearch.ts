/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
export interface Isearch{
      site_id: string
      results: Array<IResult>
      filters: Array<any>
}

 interface IAddress {
      state_id :string
      state_name:string
      city_id:string
      city_name:string
}

 interface IShipping {
      free_shipping :boolean
      mode :string
      tags : Array<string>
      logistic_type :string
      store_pick_up :boolean
}

export interface IResult {
      id:string
      site_id :string
      title:string
      seller:any
      price :number
      prices :any
      sale_price:any
      currency_id :string
      available_quantity:number
      sold_quantity :number
      buying_mode :string
      listing_type_id :string
      stop_time :string
      condition :string
      permalink :string
      thumbnail :string
      accepts_mercadopago :boolean
      installments :any
      address :IAddress
      shipping? :IShipping
      seller_address :any
      attributes:Array<any>
      original_price:any
      category_id :string
      official_store_id :number
      domain_id :string
      catalog_product_id :any
      tags :Array<string>
      order_backend :number
}
