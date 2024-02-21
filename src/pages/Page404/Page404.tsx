import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { Button } from '../../components/ui/Button/Button';
import { ROUTE_HOME } from '../../constants/constants';
import s from './Page404.module.scss';

type Page404Props = {
  className?: string;
};

export const Page404: FC<Page404Props> = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <Main className={cl(s.main, className)}>
      <div className={cl(s.mainContent)}>
        <h1 className={s.pageTitle}>404 error</h1>
        <p className={s.subTitle}>страница не найдена</p>
        <p className={s.errorText}>Упс! Ошибочка вышла!...</p>
        <Button
          className={s.button}
          type="button"
          theme="white"
          text="Вернуться на&#160;главную"
          onClick={() => {
            navigate(ROUTE_HOME);
          }}
        />{' '}
      </div>
    </Main>
  );
};
