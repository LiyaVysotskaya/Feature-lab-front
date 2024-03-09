import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Main } from '../../../components/Main/Main';
import { FormRegister } from './FormRegister';
import s from '../auth.module.scss';
import { ROUTE_LOGIN } from '../../../constants/constants';
import { Button } from '../../../components/ui/Button/Button';

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

            <Button
              type="button"
              theme="white"
              text="На главную"
              onClick={() => navigate('/', { replace: true })}
            />
          </div>
        ) : (
          <FormRegister onSuccess={responseToSuccessfulSumbit} />
        )}
      </section>
    </Main>
  );
};
