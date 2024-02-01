import { FC } from 'react';
import { CompetenciesSection } from '../../components/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/LabSection/LabSection';
import Main from '../../components/Main/Main';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { PromoSection } from '../../components/PromoSection/PromoSection';
import s from './Home.module.scss';

const Home: FC = () => {
  return (
    <Main>
      <PromoSection className={s.promoSection} />
      <CompetenciesSection className={s.pageSection} />
      <LabSection className={s.pageSection} />
      <ProductsSection title="Продуктовая разработка" className={s.pageSection} />
    </Main>
  );
};

export default Home;
