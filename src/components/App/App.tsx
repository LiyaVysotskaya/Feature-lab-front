import { useAtom } from 'jotai';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserProfileQuery } from '../../api/queries';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import { AppRouter } from '../../router';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PopupFeedback } from '../PopupFeedback/PopupFeedback';
import { CookiesToastContainer } from '../ui/CookiesToastContainer/CookiesToastContainer';
import s from './App.module.scss';

const App: React.FC = () => {
  const [isPopupFeedbackOpen, setIsPopupFeedbackOpen] = useState(false);
  const [, setIsAuth] = useAtom(isAuthAtom);
  const { pathname } = useLocation();

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
    <div className={s.generalWrapper} id="generalWrapper">
      <Header />

      <AppRouter />

      <PopupFeedback isOpen={isPopupFeedbackOpen} onClose={closePopupFeedbackPopup} />

      <Footer />
      <CookiesToastContainer />
    </div>
  );
};

export default App;
