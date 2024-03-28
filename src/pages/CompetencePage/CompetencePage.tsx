import { FC } from 'react';
import { useParams } from 'react-router';
import { useCompetenceQuery } from '../../api/queries';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Preloader } from '../../components/Preloader/Preloader';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { TeamSliderSection } from '../../components/TeamSliderSection/TeamSliderSection';
import s from './CompetencePage.module.scss';

export const CompetencePage: FC = () => {
  const { competenceSlug } = useParams();
  const { data: competence, isLoading: isLoadingCompetence } = useCompetenceQuery(competenceSlug);

  if (isLoadingCompetence || !competence) {
    return (
      <Main className={s.loaderWrap}>
        <Preloader />
      </Main>
    );
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
