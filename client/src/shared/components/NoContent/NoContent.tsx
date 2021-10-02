
import styles from './NoContent.module.scss';

const NoContent: React.FC  < {filter:string}>= ({filter}) => (
  <div className={styles.NoContent} data-testid="NoContent">
      <p>No se encontraron resultados para la  búsqueda </p>
       <label> {filter}</label>

  </div>
);

export default NoContent;
