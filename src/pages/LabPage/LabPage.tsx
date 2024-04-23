import { FC } from 'react';
import { LabSection } from '../../components/LabSection/LabSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { LabBottomGridSection } from './LabBottomGridSection/LabBottomGridSection';
import { LabTopGridSection } from './LabTopGridSection/LabTopGridSection';
import s from './LabPage.module.scss';

export const LabPage: FC = () => {
  return (
    <Main>
      <PageTitle className={s.pageTitle} pageTitle="Ed-Tech" subTitle="Образование" />

      <LabTopGridSection className={s.pageSection} />

      <LabSection className={s.pageSection} />

      <LabBottomGridSection className={s.pageSection} />
    </Main>
  );
};
