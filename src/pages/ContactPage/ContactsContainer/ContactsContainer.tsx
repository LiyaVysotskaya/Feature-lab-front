import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkIcon, TelegramIcon, WhatsupIcon } from '../../../components/ui/icons';
import {
  SOCIAL_LINKEDIN_URL,
  SOCIAL_TELEGRAM_URL,
  SOCIAL_WHATSUP_URL,
} from '../../../constants/links';
import s from './ContactsContainer.module.scss';

export const ContactsContainer: FC = () => {
  return (
    <section className={s.contentContact}>
      <div className={(s.wrap, s.adress)}>
        <p className={s.text}>
          127018, город Москва,
          <br />
          ул Советской Армии, д. 17/52, кв. 104
        </p>
        <p className={s.description}>адрес</p>
      </div>
      <div className={(s.wrap, s.email)}>
        <p className={s.text}>featurelab@yandex.ru</p>
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
          <Link
            to={SOCIAL_TELEGRAM_URL}
            className={s.iconLink}
            target="_blank"
            rel="noopener noreferrer">
            <TelegramIcon />
          </Link>

          <Link
            to={SOCIAL_LINKEDIN_URL}
            className={s.iconLink}
            target="_blank"
            rel="noopener noreferrer">
            <LinkIcon />
          </Link>

          <Link
            to={SOCIAL_WHATSUP_URL}
            className={s.iconLink}
            target="_blank"
            rel="noopener noreferrer">
            <WhatsupIcon />
          </Link>
        </div>

        <p className={s.description}>социальные сети</p>
      </div>
    </section>
  );
};
