import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>User Management Table</h1>
    </div>
  );
};

export default Header;