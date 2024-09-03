import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <a href="https://github.com/PedroPLCode/" target="_blank" rel="noopener noreferrer">
        Piotr Gaszczyński
      </a>
    </div>
  );
};

export default Footer;