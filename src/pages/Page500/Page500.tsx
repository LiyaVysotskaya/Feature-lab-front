import cl from 'classnames';
import { FC } from 'react';
import { Main } from '../../components/Main/Main';

import s from './Page500.module.scss';

type Page500Props = {
  className?: string;
};

export const Page500: FC<Page500Props> = ({ className }) => {
  return (
    <Main className={cl(s.page, className)}>
      <h1 className={s.pageTitle}>500 error</h1>
      <p className={s.subTitle}>внутренняя ошибка сервера</p>
      <p className={s.errorText}>Ой! Кажется все упало!</p>
      <p className={s.errorDescription}>
        Cайт не работает из-за внутренней ошибки на сервере.
        <br />
        Мы уже начали чинить!
        <br />
        Попробуйте перезагрузить страницу или зайдите к нам позже :)
      </p>
    </Main>
  );
};
