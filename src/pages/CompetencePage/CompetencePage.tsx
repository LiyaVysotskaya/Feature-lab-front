import { FC } from 'react';
import { useParams } from 'react-router';
import { useCompetenceQuery } from '../../api/queries';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { TeamSliderSection } from '../../components/TeamSliderSection/TeamSliderSection';
import s from './CompetencePage.module.scss';

export const CompetencePage: FC = () => {
  const { competenceSlug } = useParams();
  const { data: competence, isLoading, isRefetching } = useCompetenceQuery(competenceSlug);

  if (isLoading || isRefetching || !competence) {
    return null;
  }

  return (
    <Main>
      <PageTitle
        className={s.pageTitle}
        pageTitle={competence.name}
        subTitle="Расшифровка аббревиатуры"
      />

      <LeadSection className={s.pageSection} />

      <TeamSliderSection className={s.pageSection} team={competence.employees} />

      <ProductsSection className={s.pageSection} title="Портфолио" />
    </Main>
  );
};
