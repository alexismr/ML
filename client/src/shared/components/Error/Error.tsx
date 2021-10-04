
import  './Error.scss';

const Error: React.FC<{mesagge:string}>= ({mesagge}) => (
  <div className="Error" data-testid="Error">
      <h1>  Error En Sistema</h1>
     <span>  {mesagge} </span>
  </div>
);

export default Error;
