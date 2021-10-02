import React from 'react';
import styles from './Spinners.module.scss';
import { BeatLoader  } from 'react-spinners';

const Spinners: React.FC = () => (
  <div className={styles.Spinners} data-testid="Spinners">
    <BeatLoader 
             color={'#FFE600'} css={styles.override} size={80}
          />
          
  </div>
);

export default Spinners;
