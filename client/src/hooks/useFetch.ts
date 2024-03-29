import { useEffect, useState } from "react";
import { IUseFetch } from "../model/IUseFetch";


/**
 *  metodo generico para consumir serivios 
 * @param config  configucion de axios y del servicio IUseFetch
 */
const useFetch = (config: IUseFetch) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { api, method, url, data } = config;
        useEffect(() => {
            setIsLoading(true);
           try {
            api({  method: method, url: url,data: data})
                .then((res) => setResponse(res.data) )
                .catch((err:Error) => setError(err.message) )
                .finally(() => {
                    setIsLoading(false)});
            } 
            catch {
                setError("error en consumo al servicio");
            }
  
    }, [api, method, url, data ]);
    return { response, error, isLoading };

}

export default useFetch;
