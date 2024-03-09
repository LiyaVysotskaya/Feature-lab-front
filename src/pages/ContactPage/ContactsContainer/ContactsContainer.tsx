import { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './ContactsContainer.module.scss';
import { LinkIcon, TelegramIcon, WhatsupIcon } from '../../../components/ui/icons';

export const ContactsContainer: FC = () => {
  return (
    <section className={s.contentContact}>
      <div className={(s.wrap, s.adress)}>
        <p className={s.text}>
          Москва,
          <br />
          пр-кт Ленина 2А
        </p>
        <p className={s.description}>адрес</p>
      </div>
      <div className={(s.wrap, s.email)}>
        <p className={s.text}>fitchlab@gmail.com</p>
        <p className={s.description}>e-mail</p>
      </div>
      <div className={(s.wrap, s.telephones)}>
        <p className={s.text}>
          8 800 200 50 50
          <br />8 916 166 75 00
        </p>
        <p className={s.description}>телефоны</p>
      </div>
      <div className={(s.wrap, s.media)}>
        <div className={s.linksContainer}>
          <Link to="https://github.com/LiyaVysotskaya/Feature-lab-front" className={s.iconLink}>
            <TelegramIcon />
          </Link>

          <Link to="https://github.com/LiyaVysotskaya/Feature-lab-front" className={s.iconLink}>
            <LinkIcon />
          </Link>

          <Link to="https://github.com/LiyaVysotskaya/Feature-lab-front" className={s.iconLink}>
            <WhatsupIcon />
          </Link>
        </div>

        <p className={s.description}>социальные сети</p>
      </div>
    </section>
  );
};