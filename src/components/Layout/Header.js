import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
      <Fragment>
        <header className={styles.header}>
            <h1>ReactFood</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
          <div className={styles['main-image']}>
              <img alt='A table full of delicious food!' src={mealsImage}/>
          </div>
      </Fragment>
    );
}

export default Header;