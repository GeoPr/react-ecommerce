import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { cartStore } from '../../../../store/cart';
import Swal from 'sweetalert2';
import { observer } from 'mobx-react';
import './MakeOrder.scss';

const MakeOrderComponent: FC = () => {
  const history = useHistory();

  const sum = cartStore.products.reduce((acc, { count, price }) => {
    acc += price * count;

    return acc;
  }, 0);

  const makeOrder = async () => {
    await Swal.fire({
      title: 'Thank`s for your order !',
      text: 'We`ll be glad to see you again.',
      icon: 'success',
      timer: 7000,
    });

    cartStore.reset();

    history.push('/');
  };

  return (
    <div className="cart__order">
      <div className="cart__sum">
        Sum: {sum}
        <span className="dollar">$</span>
      </div>
      <Button type="order" onClick={makeOrder}>
        Make the order
      </Button>
    </div>
  );
};

export const MakeOrder = observer(MakeOrderComponent);
