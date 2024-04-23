import { FC } from 'react';
import { Navigate, Outlet, useMatch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ROUTE_COMPETENCIES, ROUTE_HOME } from '../../constants/routesConstants';
import { ListCompetencies } from '../../components/ListCompetencies/ListCompetencies';
import s from './CompetenciesPage.module.scss';

export const CompetenciesPage: FC = () => {
  const isCompetenciesDefaultPage = useMatch(ROUTE_COMPETENCIES);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return <Navigate to={ROUTE_HOME} />;
  }

  if (isCompetenciesDefaultPage) {
    return (
      <Main>
        <PageTitle className={s.pageTitle} pageTitle="О нас" subTitle="Наши компетенции" />

        <ListCompetencies />
      </Main>
    );
  }
  return <Outlet />;
};
