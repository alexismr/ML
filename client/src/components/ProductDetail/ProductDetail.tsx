import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { RouteParams } from '../../model/IRouteParams';
import './ProductDetail.scss';
import { IresponseDetail } from '../../model/IresponseDetail';
import Spinners from '../../shared/components/Spinners/Spinners';
import { Api } from  '../../../config/endpoint';

const ProductDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [data, setData] = useState<IresponseDetail>();
  const { response, isLoading } = useFetch({api:Api, method: "get", url: `/${id}` });

  useEffect(() => {
    if (response !== null) loadData(response)
  }, [response]);

  const loadData = (response: any) => setData(response.body)

  return (
    <div data-testid="ProductDetail">

      { isLoading && (
        <div className="Spinners">
          <Spinners />
        </div>
      )}

      {data && data.item &&
        <article className="ProductDetail"  >
          <div className="ProductDetail__imgcontainer">
            <img src={data.item.picture} alt='Product' />
          </div>
          <div className="ProductDetail__information">
            <label className='ProductDetail__information__status'>
              {data.item.condition}{data.item.sold_quantity !== 0
                ? ` - ${data.item.sold_quantity} vendidos`
                : ''}
            </label>
            <h1 className='ProductDetail__information__title'>
              {data.item.title}
            </h1>
            <div className='ProductDetail__information__price'>
              {data.item.price.amount}
            </div>

            <button
              title={`Comparar ${data.item.title}`}
              className='ProductDetail__information__btn'>
              {'Comprar'}
            </button>



          </div>
          <div className="ProductDetail__description">
            <h1 className='ProductDetail__description__title'>
              Descripcion del producto
                    </h1>
            <p className='ProductDetail__description__text'>
              {data.item.description}
            </p>
          </div>
        </article>
      }



    </div>
  );
};

export default ProductDetail;
