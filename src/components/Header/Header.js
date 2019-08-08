import React from 'react';
import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.header_wrapper}>
      <h1 className={style.header_title}>Find Your Weather</h1>
    </div>

  );
}

export default Header;