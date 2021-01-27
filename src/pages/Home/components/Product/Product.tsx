import React, { FC } from 'react';
import { Button } from '../../../../components/Button/Button';
import { cartStore, IProduct } from '../../../../store/cart';
import './Product.scss'

interface IProps {
  product: IProduct;
}

export const Product: FC<IProps> = ({ product }) => {
  const { t, tt, img, price } = product;

  const addProduct = () => {
    cartStore.add(product);
  };

  return (
    <div className="products-home__product product-home">
      <div className="product-home__img">
        <img src={img} alt="Product" />
      </div>
      <div className="product-home__info">
        <div className="product-home__header">
          <h4 className="product-home__title">{t}</h4>
          <p className="product-home__subtitle">{tt}</p>
        </div>
        <div className="product-home__footer">
          <div className="product-home__price">
            {price}
            <span className="dollar">$</span>
          </div>
          <Button onClick={addProduct} type="add">
            Add to the cart
          </Button>
        </div>
      </div>
    </div>
  );
};
