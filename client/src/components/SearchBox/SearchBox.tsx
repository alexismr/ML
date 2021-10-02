
import { useRef, useState } from 'react';
import './SearchBox.scss';

import SearchImg from '../../assets/img/ic_Search.png';
import { useHistory } from 'react-router-dom';

const SearchBox: React.FC = () => {
 
 const [inputvalue, setInputvalue] = useState('')
 const inputEl  = useRef<HTMLInputElement>(null);

   const history = useHistory();
   
  /**
  *  validar si  el usario agrego filtro
  */
  const submitHandler = (event:any) => {
      event.preventDefault()
      if(inputEl.current?.value && validateisChangeInput()){
        setInputvalue(inputEl.current.value)
        history.push(`/items?search=${inputEl.current?.value}`);
      }   
   }

   const validateisChangeInput = ():boolean =>(inputEl.current?.value != inputvalue)
 
  const onKeyDown =(e:any)=>{
    if (e.keyCode === 13) submitHandler(e);
  }
   
  

  return (
    <div className="SearchBox" data-testid="SearchBox">
        <form  className="SearchBox__form"   onSubmit={submitHandler}>
          <input type="text"  className="SearchBox__form__input"  aria-label="Ingresa Filtro de Busqueda"  placeholder="Nunca dejes de buscar"   name="search" onKeyDown={onKeyDown}  ref={inputEl} />
            <button className="SearchBox__form__btn" >
                <div role="img" aria-label="Buscar" className="SearchBox__form__icon">
                   <img src={SearchImg} alt='' />
                </div>
            </button>
        </form>
    </div>
  );

}

export default  SearchBox;
