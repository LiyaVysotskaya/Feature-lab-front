import { FC } from 'react';
import { Main } from '../../components/Main/Main';

export const PasswordRestorePage: FC = () => {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState<string>();

  // const responseToSuccessfulSumbit = (newEmail: string) => {
  //   window.scrollTo(0, 0);
  //   setEmail(newEmail);
  // };

  return (
    <Main>
      {/* <section className={s.contentContainer}>
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
      </section> */}
    </Main>
  );
};
