import React from 'react';
import Logo from 'src/assets/img/logo.svg?react';
import styles from './header.module.scss';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <ThemeToggle />
    </div>
  );
};

export default Header;
