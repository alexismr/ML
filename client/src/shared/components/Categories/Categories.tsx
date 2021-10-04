
import { useEffect, useState } from 'react';
import useCategories from  '../../../hooks/useCategories';
import styles from './Categories.module.scss';

const Categories: React.FC = () =>{
  const [data, setData] = useState([])
  const valuecategories =useCategories()[0];

  useEffect(() => {
    setData(valuecategories)
  }, [valuecategories]);

  return (
    <div className={styles.Categories} data-testid="Categories">
      <ul className={styles.categoriesul}>
        { data.map((item:string, k:any)=><li  className={styles.categoriesArrayItem} key={k} >{item}</li>
        )}
      </ul>
     
    </div>
  )


}

export default Categories;
