import React, { FC, useState } from 'react';
import './Button.scss';

interface IProps {
  className?: string;
  onClick?: (...args: any[]) => any;
  type: 'add' | 'delete' | 'order';
}

export const Button: FC<IProps> = ({ children, className, onClick, type }) => {
  const [background, setBackground] = useState(
    type === 'add'
      ? 'rgb(110, 147, 37, 0.7)'
      : type === 'delete'
      ? 'rgb(170, 0, 0, 0.7)'
      : type === 'order'
      ? 'rgb(0, 90, 0, 0.7)'
      : 'transparent',
  );

  const mouseEnterHandler = () => {
    setBackground(prev => prev.replace('0.7', '1.0'));
  };

  const mouseLeaveHandler = () => {
    setBackground(prev => prev.replace('1.0', '0.7'));
  };

  return (
    <button
      className={`button ${className ?? ''}`}
      onClick={onClick}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{ background }}>
      {children}
    </button>
  );
};
