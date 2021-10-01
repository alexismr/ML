import axios from 'axios';
import ConfigConst from '../../config/config';
import { IDescription } from '../model/interfaces/IDescription';
import { IDetailItem } from '../model/interfaces/IDetailItem';
import { Isearch } from '../model/interfaces/ISearch';
import Mapperdetail from '../utilities/mapper.detail';
import Mappersearch from '../utilities/mapper.search';

export default class ItemsService {
     res:any;

     /**
     * get services  https://api.mercadolibre.com/sites/MLA/ search?q=
     * @param search,res
     * @returns Response
     */
     getsearch (search, res) {
       this.res = res;
       axios.get(
         `${ConfigConst.apiUrl}sites/MLA/search?q=${search}&limit=${ConfigConst.productsQty}`,
       )
         .then((response) => {
           this.mapper(response.data);
         })
         .catch((err) => {
           this.res.status(500).json({
             ok: false,
             // eslint-disable-next-line max-len
             mensaje: 'Error interno  no fue posible consultal el servicio   https://api.mercadolibre.com/sites/MLA/search',
             body: err,
           });
         });
     }

     /**
    * method to  response with data formatt
    * @param data:Isearch
    * @returns ItemsSearch
     */
     async mapper (data:Isearch) {
       try {
         const body = await new Mappersearch(data).onMapperSearch();
         this.res.status(200).json({
           ok: true,
           mensaje: 'Peticion realizada correctamente',
           body,
         });
       } catch (error) {
         this.res.status(500).json({
           ok: true,
           mensaje: 'error',
           body: {},
         });
       }
     }

     /**
     * get services  https://api.mercadolibre.com/sites/MLA/ search?q=
     * @param search,res
     * @returns Response
     */
     getProductItem (productId, res) {
       this.res = res;
       axios.all([
         axios.get(`${ConfigConst.apiUrl}items/${productId}`),
         axios.get(`${ConfigConst.apiUrl}items/${productId}/description`)])
         .then(axios.spread((product, description) => {
           this.mapperItemDetail(product.data, description.data);
         }))
         .catch((err) => {
           this.res.status(500).json({
             ok: false,
             // eslint-disable-next-line max-len
             mensaje: 'Error  interno  no fue posible consultal el servicio   https://api.mercadolibre.com/sites/MLA/items',
             body: err,
           });
         });
     }

     /**
     * method to  response with data formatt
     * @param data:Isearch
    * @returns ItemsSearch
     */
     async mapperItemDetail (product:IDetailItem, description: IDescription) {
       try {
         const body = await new Mapperdetail(product, description).onMapperDetail();
         this.res.status(200).json({
           ok: true,
           mensaje: 'Peticion realizada correctamente',
           body,
         });
       } catch (error) {
         this.res.status(500).json({
           ok: true,
           mensaje: 'error',
           body: {},
         });
       }
     }
}
