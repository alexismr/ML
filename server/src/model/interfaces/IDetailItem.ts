/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/**
 * interface for mapping the data returned in the detail service
 */
export interface IDetailItem{
      id: string
      site_id: string
      title:string
      subtitle: any
      seller_id: number
      category_id:string
      official_store_id: any
      price:number
      base_price: number
      original_price: any
      currency_id: string
      initial_quantity:number
      available_quantity:number
      sold_quantity:number
      sale_terms: Array<ISaleTerm>
      buying_mode: string
      listing_type_id: string
      start_time:string
      stop_time:string
      condition:string
      permalink:string
      thumbnail_id:string
      thumbnail:string
      secure_thumbnail:string
      pictures: Array<any>
      video_id: any
      descriptions: Array<any>
      accepts_mercadopago: boolean
      non_mercado_pago_payment_methods: Array<any>
      shipping: any
      international_delivery_mode: string
      seller_address: ISellerAddress
      seller_contact: any
      location: ILocation
      coverage_areas: Array<any>
      attributes: Array<IAttribute>
      warnings: Array<any>
      listing_source: string
      variations: Array<IVariation>
      status: string
      sub_status: Array<any>
      tags: Array<string>
      warranty: string
      catalog_product_id: any
      domain_id: string
      parent_item_id: any
      differential_pricing: any
      deal_ids: Array<any>
      automatic_relist: boolean
      date_created:string
      last_updated:string
      health: number
      catalog_listing: Boolean
}

// Root myDeserializedinterface = JsonConvert.DeserializeObject<Root>(myJsonResponse);
 interface ISaleTerm {
      id: string
      name: string
      value_id: string
      value_name: string
      value_struct: any
      values: Array<any>
}

 interface ICity {
}

 interface IState {
}

 interface ICountry {
}

 interface ISearchLocation {
}

 interface ISellerAddress {
      city: ICity
      state: IState
      country: ICountry
      search_location: ISearchLocation
      id: number
}

 interface ILocation {
}

 interface IAttribute {
      id: string
      name: string
      value_id: any
      value_name: string
      value_struct: any
      values: Array<object>
      attribute_group_id: string
      attribute_group_name: string
}

 interface IVariation {
      id:number
      price: number
      attribute_combinations: Array<any>
      available_quantity:number
      sold_quantity:number
      sale_terms: Array<any>
      picture_ids: Array<any>
      catalog_product_id: any
}
