import { useAtom } from 'jotai';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { useCompetenceQuery } from '../../api/queries';
import { isCompetenceLoadingAtom } from '../../atoms/isLoadingAtom';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { TeamSliderSection } from '../../components/TeamSliderSection/TeamSliderSection';
import s from './CompetencePage.module.scss';

export const CompetencePage: FC = () => {
  const { competenceSlug } = useParams();
  const [isCompetenceLoading, setIsLoading] = useAtom(isCompetenceLoadingAtom);
  const {
    data: competence,
    isLoading: isDataLoading,
    isRefetching,
  } = useCompetenceQuery(competenceSlug);

  useEffect(() => {
    setIsLoading(isDataLoading);
    console.log('isCompetenceLoading : ', isCompetenceLoading);
    console.log('isDataLoading : ', isDataLoading);
  }, [isDataLoading, setIsLoading, isCompetenceLoading]);

  if (isDataLoading || isRefetching || !competence) {
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
