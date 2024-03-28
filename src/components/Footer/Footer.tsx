import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ROUTE_CHANGE_PASSWORD,
  ROUTE_ERROR_404,
  ROUTE_ERROR_500,
  ROUTE_PROFILE,
} from '../../constants/routesConstants';
import s from './Footer.module.scss';
import { FormFooter } from './FormFooter/FormFooter';
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

const Footer: FC = () => {
  const [showFooter, setShowFooter] = useState(true);
  const { pathname } = useLocation();

  const shouldShowFooter = () => {
    return !(
      pathname === ROUTE_CHANGE_PASSWORD ||
      pathname.startsWith(ROUTE_PROFILE) ||
      pathname === ROUTE_ERROR_500 ||
      pathname === ROUTE_ERROR_404
    );
  };

  useEffect(() => {
    setShowFooter(shouldShowFooter());
  }, [pathname]);

  if (!showFooter) {
    return null;
  }

  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <FormFooter />
      </div>

      <div className={s.basementContainer}>
        {/* <div className={s.firstContainer}> */}
        <p className={s.basementElement}>
          {COMPANY_ADDRESS_FIRST_RAW}
          <br />
          {COMPANY_ADDRESS_SECOND_RAW}
          <br />
          {COMPANY_ADDRESS_THIRD_RAW}
        </p>
        <p className={s.basementElement}>
          {COMPANY_NAME}
          <br />
          {COMPANY_INN}
          <br />
          {COMPANY_KPP}
        </p>
        {/* </div> */}
        {/* <div className={s.secondContainer}> */}
        <p className={s.basementElement}>{COMPANY_EMAIL}</p>
        <p className={s.basementElement}>{COMPANY_PHONE}</p>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
