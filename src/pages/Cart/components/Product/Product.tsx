import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { cartStore, IProduct } from '../../../../store/cart';
import { Button } from '../../../../components/Button/Button';
import './Product.scss';

interface IProps {
  product: IProduct;
}

const ProductComponent: FC<IProps> = ({ product }) => {
  const { id, t, tt, img, count, price } = product;

  const deleteProduct = () => {
    cartStore.delete(id);
  };

  return (
    <div className="products-cart__product product-cart">
      <div className="product-cart__count">{count}</div>
      <div className="product-cart__img">
        <img src={img} alt="Product" />
      </div>
      <div className="product-cart__info">
        <div className="product-cart__header">
          <h4 className="product-cart__title">{t}</h4>
          <p className="product-cart__subtitle">{tt}</p>
        </div>
        <div className="product-cart__footer">
          <div className="product-cart__price">
            {price}
            <span className="dollar">$</span>
          </div>
          <Button onClick={deleteProduct} type="delete">
            Delete the product
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Product = observer(ProductComponent);
