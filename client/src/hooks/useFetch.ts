import { useEffect, useState } from "react";
import { IUseFetch } from "../model/IUseFetch";

import { Api } from '../../config/endpoint';


/**
 *  metodo generico para consumir serivios 
 * @param config  configucion de axios y del servicio IUseFetch
 */
 const useFetch = (config:IUseFetch  )  =>  {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(Error);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
          if(config)
            {
                setIsLoading(true);
                Api({ method: config?.method, url: config?.url, data: config?.data })
                .then((res) => setResponse(res.data))
                .catch((err) => setError(err))
                .finally(() => {
                    setIsLoading(false)
                });
            }
    }
        , [config]
    );
    return  {response,  error,   isLoading};
}


export default useFetch;
