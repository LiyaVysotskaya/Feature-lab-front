import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from '../../../components/Main/Main';
import s from '../auth.module.scss';
import FormPasswordChange from './FormPasswordChange';
import { Button } from '../../../components/ui/Button/Button';

export const PasswordChangePage: FC = () => {
  const navigate = useNavigate();

  const [password, sePassword] = useState<string>();

  const responseToSuccessfulSumbit = (newPassword: string) => {
    window.scrollTo(0, 0);
    sePassword(newPassword);
  };
  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>Смена пароля</h1>
        {password ? (
          <div className={s.responseContainer}>
            <div className={s.responseTextContainer}>
              <p className={s.responseText}>Ваш пароль был успещно изменён.</p>
            </div>

            <Button
              type="button"
              theme="white"
              text="На главную"
              onClick={() => navigate('/', { replace: true })}
            />
          </div>
        ) : (
          <FormPasswordChange responseToSuccessfulSumbit={responseToSuccessfulSumbit} />
        )}
        {/* <FormPasswordChange /> */}
      </section>
    </Main>
  );
};
