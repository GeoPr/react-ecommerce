import React, { FC } from 'react';
import { cartStore } from '../../store/cart';
import { Product } from './components/Product/Product';
import { MakeOrder } from './components/MakeOrder/MakeOrder';
import { observer } from 'mobx-react';
import './Cart.scss';

const CartComponent: FC = () => {
  return (
    <>
      {cartStore.products.length ? (
        <div className="cart">
          <div className="cart__body">
            <div className="cart__products products-cart">
              {cartStore.products.map(product => (
                <Product product={product} key={product.id} />
              ))}
            </div>
            <MakeOrder />
          </div>
        </div>
      ) : (
        <div className="cart__empty">The cart is empty</div>
      )}
    </>
  );
};

export const Cart = observer(CartComponent);
