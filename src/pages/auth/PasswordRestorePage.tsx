import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { RoundButton } from '../../components/_ui/RoundButton/RoundButton';
import { PasswordRestoreForm } from '../../components/AuthForms/PasswordRestoreForm';
import s from './AuthPages.module.scss';

export const PasswordRestorePage: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();

  // const responseToSuccessfulSumbit = (newEmail: string) => {
  //   window.scrollTo(0, 0);
  //   setEmail(newEmail);
  // };

  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>Сброс Пароля</h1>

        {email ? (
          <div className={s.responseContainer}>
            <div className={s.responseTextContainer}>
              <p className={s.responseText}>
                На почту {email}
                <br />
                отправлено письмо со ссылкой
                <br />
                для сброса пароля.
              </p>
            </div>

            <RoundButton
              className={s.button}
              type="button"
              theme="white"
              text="На главную"
              onClick={() => navigate('/', { replace: true })}
            />
          </div>
        ) : (
          <PasswordRestoreForm
          //  responseToSuccessfulSumbit={responseToSuccessfulSumbit}
          />
        )}
      </section>
    </Main>
  );
};
