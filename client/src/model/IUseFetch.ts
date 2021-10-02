import { AxiosInstance } from "axios";

export   interface IUseFetch{
    api:AxiosInstance,
    method:("get"|"post"|"put"),
    url: string, 
    data?:any
}

export   interface  IStateFetch{
    error:Error,
    isLoading:boolean,
    response?:any
}
