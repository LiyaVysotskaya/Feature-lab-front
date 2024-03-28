import { useIsFetching } from '@tanstack/react-query';
import { FC } from 'react';
import { CompetenciesSection } from '../../components/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/LabSection/LabSection';
import { Main } from '../../components/Main/Main';
import { Preloader } from '../../components/Preloader/Preloader';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { PromoSection } from '../../components/PromoSection/PromoSection';
import s from './Home.module.scss';

export const Home: FC = () => {
  const isFetching = useIsFetching();

  if (isFetching !== 0)
    return (
      <Main className={s.loaderWrap}>
        <Preloader />
      </Main>
    );

  return (
    <Main>
      <PromoSection className={s.promoSection} />
      <CompetenciesSection className={s.pageSection} />
      <LabSection className={s.pageSection} />
      <ProductsSection title="Продуктовая разработка" className={s.pageSection} />
    </Main>
  );
};
