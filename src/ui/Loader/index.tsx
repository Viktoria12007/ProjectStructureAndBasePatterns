import { FC } from 'react';
import './styles.css';

export interface ILoaderProps {
  color?: 'pink' | 'white';
}

export const Loader: FC<ILoaderProps> = ({ color = 'pink' }) => {
  return (
    <div className="loader" data-color={color}>
      <div className="loader__segment" />
      <div className="loader__segment" />
      <div className="loader__segment" />
    </div>
  );
};
