import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from '../../../components/Main/Main';
import { RoundButton } from '../../../components/ui/RoundButton/RoundButton';
import FormPasswordChange from './FormPasswordChange';
import s from '../auth.module.scss';

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
              type="button"
              theme="white"
              text="К проектам"
              onClick={() => navigate('/profile/dashboard', { replace: true })}
            />
          </div>
        ) : (
          <FormPasswordChange responseToSuccessfulSumbit={responseToSuccessfulSumbit} />
        )}
      </section>
    </Main>
  );
};
