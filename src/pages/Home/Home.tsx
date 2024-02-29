import { FC } from 'react';
import { toast } from 'react-toastify';
import { getAuth, getUserProfileData } from '../../api/api';
import { CompetenciesSection } from '../../components/CompetenciesSection/CompetenciesSection';
import { LabSection } from '../../components/LabSection/LabSection';
import { Main } from '../../components/Main/Main';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { PromoSection } from '../../components/PromoSection/PromoSection';
import { Button } from '../../components/ui/Button/Button';
import { LoginFormData } from '../../types/data';
import { setStoredAccessToken, setStoredRefreshToken } from '../../utils/localStorageHelpers';
import s from './Home.module.scss';

export const Home: FC = () => {
  const testLoginData = {
    email: 'cherdantsev.p@gmail.com',
    password: 'DU#6ZEB&dXrJ%t',
  };

  const handleLogin = async (loginData: LoginFormData) => {
    try {
      const authResponse = await getAuth(loginData);
      if (authResponse.access && authResponse.refresh) {
        setStoredAccessToken(authResponse.access);
        setStoredRefreshToken(authResponse.refresh);
      } else {
        // Handle error or clearStore
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error
    }
  };

  const handleGetUser = async () => {
    const user = await getUserProfileData();

    console.log('user : ', user);

    const toastOption = {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    };

    const notifyAuthError = () => toast('ура дали юзера', toastOption);

    notifyAuthError();
  };

  return (
    <Main>
      <Button text="дай юзера" theme="promo" onClick={() => handleGetUser()} />
      <Button text="AUTH" theme="promo" onClick={() => handleLogin(testLoginData)} />
      <PromoSection className={s.promoSection} />
      <CompetenciesSection className={s.pageSection} />
      <LabSection className={s.pageSection} />
      <ProductsSection title="Продуктовая разработка" className={s.pageSection} />
    </Main>
  );
};
