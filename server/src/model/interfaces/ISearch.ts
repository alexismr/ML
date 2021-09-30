export interface Isearch{
      site_id: string
      results:  Array<IResult>
      filters:  Array<any> 
}

 interface IEshop    {
      nick_name :string 
      eshop_rubro  :any
      eshop_id : number 
      eshop_locations:Array<any> 
      site_id:string
      eshop_logo_url:string 
      eshop_status_id :number 
      seller:number 
      eshop_experience: number  
}

interface IRatings {
      negative:number  
      positive:number  
      neutral:number  
}

 interface ITransactions    {
      total:number
      canceled:number  
      period:string 
      ratings:IRatings
      completed:number
}

 interface IClaims  {
      rate :number 
      value :number 
      period :string 
}

 interface IDelayedHandlingTime    {
      rate :number
      value : number
      period : string
}

 interface ISales    {
      period  :string
      completed : number  
}

 interface ICancellations    {
    rate :number 
    value :number 
    period :string  
}

 interface IMetrics    {
      claims  :IClaims
      delayed_handling_time  :IDelayedHandlingTime
      sales :ISales 
      cancellations  :ICancellations
}

 interface ISellerReputation    {
      transactions :ITransactions 
      power_seller_status  :string
      metrics:IMetrics
      level_id  :string
}






 interface IAddress    {
      state_id :string 
      state_name:string  
      city_id:string  
      city_name:string  
}

 interface IShipping    {
      free_shipping :boolean 
      mode  :string
      tags : Array<string>
      logistic_type  :string
      store_pick_up  :boolean
}

 interface ICountry    {
      id  :string
      name :string 
}

 interface IState    {
    id  :string
    name :string  
}

 interface ICity    { 
     id  :string
     name :string   
}



 interface IStruct    {
      number :number 
      unit  :string
}

 interface IValue    {
      id  :string
      name  :string
      struct:IStruct  
      source :any 
      results :number 
}

 interface IValueStruct    {
    number :number 
    unit  :string
}



 export interface IResult    {
      id:string  
      site_id  :string
      title:string  
      seller:any  
      price :number 
      prices :any 
      sale_price:any  
      currency_id :string 
      available_quantity:number  
      sold_quantity :number 
      buying_mode  :string
      listing_type_id  :string
      stop_time :string 
      condition :string
      permalink  :string
      thumbnail  :string
      accepts_mercadopago  :boolean
      installments :any 
      address :IAddress 
      shipping? :IShipping
      seller_address :any
      attributes:Array<any>  
      original_price:any  
      category_id :string 
      official_store_id :number 
      domain_id  :string
      catalog_product_id  :any
      tags  :Array<string>
      order_backend  :number
}



