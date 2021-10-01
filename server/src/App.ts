import express from 'express';
import * as cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import ItemsRouter from './rutes/items.router';
import * as swaggerconfigDocument from '../config/swagger.json';

class App {
  public app:express.Application

  constructor () {
    this.app = express();
    this.config();
    this.loadRoutes();
  }

  private loadRoutes () {
    this.app.use('/api-docs/swagger', swaggerUi.serve, swaggerUi.setup(swaggerconfigDocument));
    this.app.use('/api/items', ItemsRouter);
  }

 optionscors: cors.CorsOptions = {
   allowedHeaders: [
     'Origin',
     'X-Requested-With',
     'Content-Type',
     'Accept',
     'X-Access-Token',
   ],
   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
 };

 private config (): void {
   this.app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     // eslint-disable-next-line max-len
     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,');
     res.header('content-type: application/json; charset=utf-8');
     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
     next();
   });
   this.app.use(express.json());
   this.app.use(express.urlencoded({ extended: false }));
 }
}

export default new App().app;
