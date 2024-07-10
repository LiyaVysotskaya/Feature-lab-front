import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordResetForm from '../../components/_auth-forms/PasswordResetForm';
import { RoundButton } from '../../components/_ui/RoundButton/RoundButton';
import { Main } from '../../components/Main/Main';
import { ROUTE_HOME } from '../../constants/routesConstants';
import s from './AuthPages.module.scss';

export const PasswordResetPage: FC = () => {
  const navigate = useNavigate();

  const [isPasswordChanged, setIsPasswordChanged] = useState<boolean>(false);

  const handleSuccessfulSumbit = (isSuccess: boolean) => {
    window.scrollTo(0, 0);
    setIsPasswordChanged(isSuccess);
  };

  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>Смена пароля</h1>
        {isPasswordChanged ? (
          <div className={s.responseContainer}>
            <div className={s.responseTextContainer}>
              <p className={s.responseText}>Ваш пароль был успешно изменён.</p>
            </div>

            <RoundButton
              className={s.button}
              type="button"
              theme="white"
              text="На главную"
              onClick={() => navigate(ROUTE_HOME, { replace: true })}
            />
          </div>
        ) : (
          <PasswordResetForm handleSuccessfulSumbit={handleSuccessfulSumbit} />
        )}
      </section>
    </Main>
  );
};
