
import { Link } from 'react-router-dom';
import './CardItem.scss';
import ShippingImg from '../../assets/img/ic_shipping.png';

const CardItem: React.FC<any> = (props) => (
  <div className="CardItem" data-testid="CardItem">

    <div className="CardItem__image">
      <Link to={`/items/${props.item.id}`}>
        <img
          src={props.item.picture}
          alt='Product'
        />
      </Link>


    </div>
    <div className="CardItem__Description">

      <section className="CardItem__Description__price">
        <label >{props.item.price.amount}</label>
        {props.item.free_shipping &&
          <img src={ShippingImg} alt='shipping' />
        }
      </section>
      <span className='CardItem__Description__description'>
        {props.item.title}
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
