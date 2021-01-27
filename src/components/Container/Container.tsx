import React, { FC } from 'react';
import './Container.scss';

export const Container: FC = ({ children }) => {
  return (
    <section className="page__sc sc">
      <div className="sc__container _container">
        <div className="sc__body">{children}</div>
      </div>
    </section>
  );
};
