import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordChangeForm from '../../components/_auth-forms/PasswordChangeForm';
import { Main } from '../../components/Main/Main';
import { RoundButton } from '../../components/_ui/RoundButton/RoundButton';
import { ROUTE_PROFILE_SETTINGS } from '../../constants/routesConstants';
import s from './AuthPages.module.scss';

export const PasswordChangePage: FC = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>();

  const responseToSuccessfulSumbit = (newPassword: string) => {
    window.scrollTo(0, 0);
    setPassword(newPassword);
  };
  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>Смена пароля</h1>
        {password ? (
          <div className={s.responseContainer}>
            <div className={s.responseTextContainer}>
              <p className={s.responseText}>Ваш пароль был успешно изменён.</p>
            </div>

            <RoundButton
              className={s.button}
              type="button"
              theme="white"
              text="К профилю"
              onClick={() => navigate(ROUTE_PROFILE_SETTINGS, { replace: true })}
            />
          </div>
        ) : (
          <PasswordChangeForm responseToSuccessfulSumbit={responseToSuccessfulSumbit} />
        )}
      </section>
    </Main>
  );
};
