


import { Route, Switch } from "react-router-dom";
import Container from "../../components/Container/Container";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import SearchResults from "../../components/SearchResults/SearchResults";
import NotFound from "../components/NotFound/NotFound";


const Router: React.FC = () => (
 <div data-testid="Router"> 
      <Switch>
           <Route path='/'
                    exact
                    component={Container} />
              <Route
                    path='/items' exact
                    component={SearchResults} />

              <Route path="/items/:id"
                    exact 
                    component={ProductDetail}/>

             <Route path='*'  component={NotFound}/>
             <Route path='/items/*'  component={NotFound}/>
         </Switch>
         </div>
);

export default Router;
