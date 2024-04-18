import { FC } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { ROUTE_COMPETENCIES } from '../../constants/routesConstants';
import { CompetenceList } from './CompetenceList/CompetenceList';
import s from './CompetenciesPage.module.scss';

export const CompetenciesPage: FC = () => {
  const isCompetenciesDefaultPage = useMatch(ROUTE_COMPETENCIES);

  if (isCompetenciesDefaultPage) {
    return (
      <Main>
        <h1 className={s.pageTitle}>О нас</h1>
        <div className={s.subTitleWrapper}>
          <p className={s.subTitle}>Наши компетенции</p>
        </div>

        <CompetenceList />
      </Main>
    );
  }
  return <Outlet />;
};
