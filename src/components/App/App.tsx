import { useIsFetching } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserProfileQuery } from '../../api/queries';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import {
  ROUTE_CHANGE_PASSWORD,
  ROUTE_ERROR_404,
  ROUTE_ERROR_500,
  ROUTE_PROFILE,
} from '../../constants/routesConstants';
import { AppRouter } from '../../router';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PopupFeedback } from '../_popups/PopupFeedback/PopupFeedback';
import { CookiesToastContainer } from '../_ui/CookiesToastContainer/CookiesToastContainer';
import s from './App.module.scss';

const App: React.FC = () => {
  const [isPopupFeedbackOpen, setIsPopupFeedbackOpen] = useState(false);
  const [, setIsAuth] = useAtom(isAuthAtom);
  const { pathname } = useLocation();
  const isFetching = useIsFetching();

  const isFooterHidden = !(
    pathname === ROUTE_CHANGE_PASSWORD ||
    pathname.startsWith(ROUTE_PROFILE) ||
    pathname === ROUTE_ERROR_500 ||
    pathname === ROUTE_ERROR_404 ||
    isFetching
  );

  const { data: userData } = useUserProfileQuery();

  useEffect(() => {
    if (userData) {
      setIsAuth(true);
    }
  }, [userData, setIsAuth]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const closePopupFeedbackPopup = () => {
    setIsPopupFeedbackOpen(false);
  };

  return (
    <div className={s.rootWrapper}>
      <div className={s.generalWrapper} id="generalWrapper">
        <Header />

        <AppRouter />

        <PopupFeedback isOpen={isPopupFeedbackOpen} onClose={closePopupFeedbackPopup} />

        <CookiesToastContainer />
      </div>
      {isFooterHidden && <Footer />}
    </div>
  );
};

export default App;
