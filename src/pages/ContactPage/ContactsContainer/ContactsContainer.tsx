import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TelegramIcon } from '../../../components/ui/icons';
import {
  COMPANY_ADDRESS_FIRST_RAW,
  COMPANY_ADDRESS_SECOND_RAW,
  COMPANY_ADDRESS_THIRD_RAW,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  SOCIAL_TELEGRAM_URL,
} from '../../../constants/companyDetails';
import s from './ContactsContainer.module.scss';

export const ContactsContainer: FC = () => {
  return (
    <section className={s.contentContact}>
      <div className={(s.wrap, s.adress)}>
        <p className={s.text}>
          {' '}
          {COMPANY_ADDRESS_FIRST_RAW}
          <br />
          {COMPANY_ADDRESS_SECOND_RAW}
          <br />
          {COMPANY_ADDRESS_THIRD_RAW}
        </p>
        <p className={s.description}>адрес</p>
      </div>
      <div className={(s.wrap, s.email)}>
        <p className={s.text}>{COMPANY_EMAIL}</p>
        <p className={s.description}>e-mail</p>
      </div>
      <div className={(s.wrap, s.telephones)}>
        <p className={s.text}>{COMPANY_PHONE}</p>
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
        </div>

        <p className={s.description}>социальные сети</p>
      </div>
    </section>
  );
};
