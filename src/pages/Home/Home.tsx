import React, { FC, useEffect, useState } from 'react';
import { IProduct } from '../../store/cart';
import { loaderStore } from '../../store/loader';
import { Product } from './components/Product/Product';
import './Home.scss';

export const Home: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      loaderStore.show();

      try {
        const response = await fetch('products.json');
        const { products: data } = await response.json();

        setProducts(data);
      } catch (e) {
        console.log(e.message);
      }

      loaderStore.hide();
    })();
  }, []);

  return (
    <div className="home">
      <div className="home__products products-home">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
