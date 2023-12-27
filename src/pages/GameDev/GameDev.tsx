import { FC } from 'react';
import { LeadSection } from '../../components/LeadSection/LeadSection';
import { PageTitle } from '../../components/PageTitle/PageTitle';

export const GameDev: FC = () => {
  return (
    <>
      <PageTitle pageTitle="Gamedev" subTitle="Расшифровка аббревиатуры" />

      <LeadSection />
    </>
  );
};
