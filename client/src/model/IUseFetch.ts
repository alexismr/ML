
export   interface IUseFetch{
    method:("get"|"post"|"put"),
    url: string, 
    data?:any
}

export   interface  IStateFetch{
    error:Error,
    isLoading:boolean,
    response?:any
}
