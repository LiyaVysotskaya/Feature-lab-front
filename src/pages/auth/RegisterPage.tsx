import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { RegisterForm } from '../../components/_auth-forms/RegisterForm';
import { RoundButton } from '../../components/_ui/RoundButton/RoundButton';
import { ROUTE_HOME, ROUTE_LOGIN } from '../../constants/routesConstants';
import s from './AuthPages.module.scss';

export const RegisterPage: FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();

  const responseToSuccessfulSumbit = (newEmail: string) => {
    window.scrollTo(0, 0);
    setEmail(newEmail);
  };

  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>
          <span>Регистрация</span>
          <span>/</span>
          <Link to={ROUTE_LOGIN} className={s.unhighlightedTitle}>
            Вход
          </Link>
        </h1>

        {email ? (
          <div className={s.responseContainer}>
            <div className={s.responseTextContainer}>
              <p className={s.responseText}>
                Спасибо за регистрацию!
                <br />
                На почту {email}
                <br />
                отправлено письмо с подтверждением.
              </p>
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
          <RegisterForm responseToSuccessfulSumbit={responseToSuccessfulSumbit} />
        )}
      </section>
    </Main>
  );
};
