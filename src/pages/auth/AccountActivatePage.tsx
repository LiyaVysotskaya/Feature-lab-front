import { isAxiosError } from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postAccActivationData } from '../../api/api';
import { Main } from '../../components/Main/Main';
import { RoundButton } from '../../components/_ui/RoundButton/RoundButton';
import { ROUTE_ERROR_500, ROUTE_HOME } from '../../constants/routesConstants';
import { TAccActivationData } from '../../types/apiTypes';
import s from './AuthPages.module.scss';

export const AccountActivatePage: FC = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const [isActivated, setIsActivated] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccessfulSumbit = (isSuccess: boolean) => {
    window.scrollTo(0, 0);
    setIsActivated(isSuccess);
  };

  const handleSubmit = async (activationData: TAccActivationData) => {
    setIsLoading(true);

    try {
      await postAccActivationData({ uid: activationData.uid, token: activationData.token });
      handleSuccessfulSumbit(true);
    } catch (error) {
      // 400 Error handling is already managed by Axios interceptors
      handleSuccessfulSumbit(false);

      if (isAxiosError(error) && error.response?.status === 500) {
        navigate(ROUTE_ERROR_500, { replace: true });
      }
      if (isAxiosError(error) && error.message === 'Network Error') {
        navigate(ROUTE_ERROR_500, { replace: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (uid && token) {
      handleSubmit({ uid, token });
    }
  }, [uid, token]);

  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>Активация аккаунта</h1>
        {isLoading && (
          <div className={s.responseContainer}>
            <p className={s.responseText}>Подождите...</p>
          </div>
        )}

        {!isLoading && isActivated === false && (
          <div className={s.responseContainer}>
            <div className={s.responseTextContainer}>
              <p className={s.responseText}>Ошибка активации аккаунта</p>
            </div>

            <RoundButton
              className={s.button}
              type="button"
              theme="white"
              text="На главную"
              onClick={() => navigate(ROUTE_HOME, { replace: true })}
            />
          </div>
        )}

        {!isLoading && isActivated && (
          <div className={s.responseContainer}>
            <div className={s.responseTextContainer}>
              <p className={s.responseText}>Ваш аккаунт активирован!</p>
            </div>

            <RoundButton
              className={s.button}
              type="button"
              theme="white"
              text="На главную"
              onClick={() => navigate(ROUTE_HOME, { replace: true })}
            />
          </div>
        )}
      </section>
    </Main>
  );
};
