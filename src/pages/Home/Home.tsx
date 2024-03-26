import { useAtom } from 'jotai';
import { FC } from 'react';
import { isLoadingAtom } from '../../atoms/isLoadingAtom';
import { CompetenciesSection } from '../../components/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/LabSection/LabSection';
import { Main } from '../../components/Main/Main';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { PromoSection } from '../../components/PromoSection/PromoSection';
import s from './Home.module.scss';

export const Home: FC = () => {
  const [isLoading] = useAtom(isLoadingAtom);
  if (isLoading) return null;

  return (
    <Main>
      <PromoSection className={s.promoSection} />
      <CompetenciesSection className={s.pageSection} />
      <LabSection className={s.pageSection} />
      <ProductsSection title="Продуктовая разработка" className={s.pageSection} />
    </Main>
  );
};
