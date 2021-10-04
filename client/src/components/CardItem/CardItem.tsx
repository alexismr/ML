import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.scss';
import ShippingImg from '../../assets/img/ic_shipping.png';
import { Item } from '../../model/IItem';

const CardItem: React.FC<{item:Item}> = ({item}) => (
  <div className="CardItem" data-testid="CardItem">

    <div className="CardItem__image">
      <Link to={`/items/${item.id}`}>
        <img
          src={item.picture}
          alt='Product'
        />
      </Link>


    </div>
    <div className="CardItem__Description">
    
         <section className="CardItem__Description__price">
          <label >{item.price.amount}</label>
          {item.free_shipping &&
            <img  src={ShippingImg} alt='shipping' />
          }
         </section>
       <span className='CardItem__Description__description'>
          {item.title}
        </span> 
        <label className='CardItem__Description__unique'>
          Completo Unico!
        </label>

    </div>
    <div className="CardItem__addres">
        <label> colombia </label>
       </div>


  </div>
);

export default CardItem;
