import { FC } from 'react';
import { Main } from '../../components/Main/Main';
import { CompetenciesSection } from '../../components/_sections/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/_sections/LabSection/LabSection';
import { ProductsSection } from '../../components/_sections/ProductsSection/ProductsSection';
import { PromoSection } from '../../components/_sections/PromoSection/PromoSection';
import s from './Home.module.scss';

export const Home: FC = () => {
  return (
    <Main>
      <PromoSection className={s.promoSection} />

      <CompetenciesSection className={s.pageSection} />

      <LabSection className={s.pageSection} />

      <ProductsSection title="Продуктовая разработка" className={s.pageSection} />
    </Main>
  );
};
