import { useIsFetching } from '@tanstack/react-query';
import { FC } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { Preloader } from '../../components/Preloader/Preloader';
import { ROUTE_COMPETENCIES } from '../../constants/routesConstants';
import { GridSection } from './GridSection/GridSection';
import s from './CompetenciesPage.module.scss';

export const CompetenciesPage: FC = () => {
  const isCompetenciesDefaultPage = useMatch(ROUTE_COMPETENCIES);
  const isFetching = useIsFetching();

  if (isCompetenciesDefaultPage) {
    if (isFetching !== 0)
      return (
        <Main className={s.loaderWrap}>
          <Preloader />
        </Main>
      );
    return (
      <Main>
        <h1 className={s.pageTitle}>О нас</h1>
        <div className={s.subTitleWrapper}>
          <p className={s.subTitle}>Наши компетенции</p>
        </div>

        <GridSection />
      </Main>
    );
  }
  return <Outlet />;
};
