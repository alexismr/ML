import { Request, Response, Router } from 'express';
import ItemsService from '../services/items.service';

class ItemsRouter {
  public router: Router;

  private _itemService: ItemsService;

  constructor () {
    this._itemService = new ItemsService();
    this.router = Router();
    this.routes();
  }

  search (req: Request, res: Response) {
    const search = req.query.q;
    if (!search) {
      res.status(400).send({
        error: 'Please add a \'?q= \' on the query URL.',
      });
    } else { this._itemService.getsearch(search, res); }
  }

  getProductItem (req: Request, res: Response) {
    const productId = req.params.id;
    if (!productId) {
      res.status(400).send({ error: 'Please add a \'id\' on the query URL.' });
    } else { this._itemService.getProductItem(productId, res); }
  }

  // set up our routes
  public routes () {
    this.router.get('/', (req, res) => this.search(req, res))
      .get('/:id', (req, res) => this.getProductItem(req, res));
  }
}

const itemsRouter = new ItemsRouter();
itemsRouter.routes();

export default itemsRouter.router;
