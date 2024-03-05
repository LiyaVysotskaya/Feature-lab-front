import { FC } from 'react';
import { CompetenciesSection } from '../../components/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/LabSection/LabSection';
import { Main } from '../../components/Main/Main';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { PromoSection } from '../../components/PromoSection/PromoSection';
import { Button } from '../../components/ui/Button/Button';
import s from './Home.module.scss';
import useAuth from '../../hooks/useAuth';

export const Home: FC = () => {
  const { signIn } = useAuth();
  const testLoginData = {
    email: 'cherdantsev.p@gmail.com',
    password: 'DU#6ZEB&dXrJ%t',
  };

  return (
    <Main>
      <Button text="AUTH" theme="promo" onClick={() => signIn(testLoginData)} />
      <PromoSection className={s.promoSection} />
      <CompetenciesSection className={s.pageSection} />
      <LabSection className={s.pageSection} />
      <ProductsSection title="Продуктовая разработка" className={s.pageSection} />
    </Main>
  );
};
