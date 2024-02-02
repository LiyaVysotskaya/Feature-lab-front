import { FC } from 'react';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ResultPreviewSection } from '../../components/ResultPreviewSection/ResultPreviewSection';
import { WorkStages } from '../../components/WorkStages/WorkStages';
import s from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  return (
    <Main>
      <PageTitle
        className={s.pageTitle}
        pageTitle="Какой-то ёёёйййй"
        subTitle="Какой-то текст под заголовком"
      />

      <LeadSection className={s.pageSection} />

      <WorkStages className={s.pageSection} />

      <ResultPreviewSection className={s.pageSection} />
    </Main>
  );
};
