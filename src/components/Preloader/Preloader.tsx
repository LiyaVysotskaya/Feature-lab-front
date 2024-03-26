import { FC } from 'react';
import s from './Preloader.module.scss';

const Preloader: FC = () => {
  return (
    <div className={s.preloader}>
      <div className={s.preloader__container}>
        <span className={s.preloader__round} />
      </div>
    </div>
  );
};

export default Preloader;
