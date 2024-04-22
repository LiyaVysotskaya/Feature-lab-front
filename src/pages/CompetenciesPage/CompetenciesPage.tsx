import { FC } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ROUTE_COMPETENCIES } from '../../constants/routesConstants';
import { CompetenceList } from './CompetenceList/CompetenceList';
import s from './CompetenciesPage.module.scss';

export const CompetenciesPage: FC = () => {
  const isCompetenciesDefaultPage = useMatch(ROUTE_COMPETENCIES);

  if (isCompetenciesDefaultPage) {
    return (
      <Main>
        <PageTitle className={s.pageTitle} pageTitle="О нас" subTitle="Наши компетенции" />

        <CompetenceList />
      </Main>
    );
  }
  return <Outlet />;
};
