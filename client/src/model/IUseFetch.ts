import { AxiosInstance } from "axios";

export   interface IUseFetch{
    api:AxiosInstance,
    method:("get"|"post"|"put"),
    url: string, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?:any
}

export   interface  IStateFetch{
    error:Error,
    isLoading:boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response?:any
}
