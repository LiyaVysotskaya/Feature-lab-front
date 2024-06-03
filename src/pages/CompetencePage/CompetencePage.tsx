import { FC } from 'react';
import { useParams } from 'react-router';
import { useCompetenceQuery } from '../../api/queries';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { LeadSection } from '../../components/_sections/LeadSection/LeadSection';
import { ProductsSection } from '../../components/_sections/ProductsSection/ProductsSection';
import { TeamSliderSection } from '../../components/_sections/TeamSliderSection/TeamSliderSection';
import s from './CompetencePage.module.scss';

export const CompetencePage: FC = () => {
  const { competenceSlug } = useParams();
  const { data: competence, isLoading, isRefetching } = useCompetenceQuery(competenceSlug);

  if (isLoading || isRefetching || !competence) {
    return null;
  }

  const leadSectionData = {
    description: competence.description,
    detailed_description: competence.detailed_description,
    properties: competence.properties,

    product_type: '',
    url: '',
  };

  return (
    <Main>
      <PageTitle
        className={s.pageTitle}
        pageTitle={competence.name}
        subTitle={competence.detailed_name}
      />

      <LeadSection className={s.pageSection} data={leadSectionData} />

      <TeamSliderSection className={s.pageSection} team={competence.employees} />

      <ProductsSection className={s.pageSection} title="Портфолио" competenceId={competence.id} />
    </Main>
  );
};
