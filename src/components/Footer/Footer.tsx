import cn from 'classnames';
import { FC } from 'react';
import {
  COMPANY_ADDRESS_FIRST_RAW,
  COMPANY_ADDRESS_SECOND_RAW,
  COMPANY_ADDRESS_THIRD_RAW,
  COMPANY_EMAIL,
  COMPANY_INN,
  COMPANY_KPP,
  COMPANY_NAME,
  COMPANY_PHONE,
} from '../../constants/companyDetails';
import { FormFooter } from './FormFooter/FormFooter';
import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <FormFooter />
      </div>

      <div className={s.basementContainer}>
        <p className={cn(s.basementElement, s.areaAddress)}>
          {COMPANY_ADDRESS_FIRST_RAW}
          <br />
          {COMPANY_ADDRESS_SECOND_RAW}
          <br />
          {COMPANY_ADDRESS_THIRD_RAW}
        </p>

        <p className={cn(s.basementElement, s.areaCompany)}>
          {COMPANY_NAME}
          <br />
          {COMPANY_INN}
          <br />
          {COMPANY_KPP}
        </p>

        <p className={cn(s.basementElement, s.areaEmail)}>{COMPANY_EMAIL}</p>

        <p className={cn(s.basementElement, s.areaPhone)}>{COMPANY_PHONE}</p>
      </div>
    </footer>
  );
};

export default Footer;
