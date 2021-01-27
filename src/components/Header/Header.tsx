import { observer } from 'mobx-react';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartStore } from '../../store/cart';
import './Header.scss';

const items = Array.from({ length: 5 })
  .fill('')
  .map((_, idx) => ({
    title: !idx ? 'Home' : 'Lorem',
    id: idx + 1,
    isLink: !idx,
  }));

const HeaderComponent: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(prev => !prev);
    document.body.classList.toggle('_lock')
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove('_lock')
  }

  return (
    <header className="header">
      <div className="header__body">
        <nav className={`header__nav ${isMenuActive && '_active'}`}>
          <ul className="header__list">
            {items.map(({ id, title, isLink }) => (
              <li className="header__item" key={id} onClick={closeMenu}>
                {isLink ? (
                  <Link to="/" className="header__link">
                    {title}
                  </Link>
                ) : (
                  title
                )}
              </li>
            ))}
          </ul>
          <div className="header__burger" onClick={toggleMenu}>
            <span></span>
          </div>
          <Link to="/cart" className="header__cart-link" onClick={closeMenu}>
            Cart
            <span>{cartStore.products.length}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export const Header = observer(HeaderComponent);
