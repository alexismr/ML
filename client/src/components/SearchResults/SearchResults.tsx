
import styles from './SearchResults.module.scss';
import queryString from 'query-string';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import CardItem from '../CardItem/CardItem'
import useCategories from '../../hooks/useCategories';
import Spinners from '../../shared/components/Spinners/Spinners';
import NoContent from '../../shared/components/NoContent/NoContent';
import { Api } from  '../../../config/endpoint';


const SearchResults: React.FC = (props: any) => {
  const  setCategories =useCategories()[1];
  const [data, setData] = useState({ items:[]});
  const { location } = props;
  const { search } = queryString.parse(location.search)
  const { response, isLoading, error } = useFetch({ api:Api,  method: "get", url: `?q=${search}` });

  useEffect(() => {
    if (response !== null) loadData(response)
  }, [response]);
  

const loadData=(response:any) =>{
  setCategories(response.body.categories)
  setData(response.body)
} 

  return (
    <div className={styles.SearchResults} data-testid="SearchResults">
     { isLoading && (
       <div className={styles.Spinners}>
           <Spinners/>
       </div>
     )}
   
      {data && data.items.map((item:any, k:any)=>{
          return (
            <article   key={k}>
                  <CardItem     item={item} />
                  <hr className={styles.line}/> 
            </article>

          )
      })}
      { !isLoading && data && data.items.length<=0 &&(
          <NoContent filter="busqueda"/>
      )
      }

    </div>
  )
}

export default SearchResults;
