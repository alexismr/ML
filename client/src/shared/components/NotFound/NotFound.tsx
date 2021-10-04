
import { RouteComponentProps } from 'react-router-dom';
import  './NotFound.scss';

const NotFound: React.FC<RouteComponentProps> = ( props:RouteComponentProps) =>(
          <div className="NotFound" data-testid="NotFound">
                  La ruta no ( {props.match.url}) existe 
          </div>
)

 

export default NotFound;
