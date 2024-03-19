import { FC } from 'react';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import s from './CompetencePage.module.scss';
import { TeamSlider } from '../../components/TeamSlider/TeamSlider';

export const CompetencePage: FC = () => {
  return (
    <Main>
      <PageTitle className={s.pageTitle} pageTitle="Gamedev" subTitle="Расшифровка аббревиатуры" />

      <LeadSection className={s.pageSection} />

      <TeamSlider className={s.pageSection} />

      <ProductsSection className={s.pageSection} title="Портфолио" />
    </Main>
  );
};
