import { useAtom } from 'jotai';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useUserProfileQuery } from '../../api/queries';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import {
  ROUTE_COMPETENCIES,
  ROUTE_CONTACT,
  ROUTE_ED_TECH,
  ROUTE_ERROR_500,
  ROUTE_FORGOT_PASSWORD,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_PRODUCTS,
  ROUTE_PROFILE,
  ROUTE_PROFILE_PROJECTS,
  ROUTE_REGISTER,
  ROUTE_RESET_PASSWORD,
  SUBROUTE_DASHBOARD,
  SUBROUTE_DOCS,
  SUBROUTE_GAMEDEV,
  SUBROUTE_SETTINGS,
} from '../../constants/constants';
import { CompetencePage } from '../../pages/CompetencePage/CompetencePage';
import { CompetenciesPage } from '../../pages/CompetenciesPage/CompetenciesPage';
import { ContactPage } from '../../pages/ContactPage/ContactPage';
import { Home } from '../../pages/Home/Home';
import { LabPage } from '../../pages/LabPage/LabPage';
import { Page404 } from '../../pages/Page404/Page404';
import { Page500 } from '../../pages/Page500/Page500';
import { ProductPage } from '../../pages/ProductPage/ProductPage';
import { ProfileDashboard } from '../../pages/ProfilePage/ProfileDashboard/ProfileDashboard';
import { ProfileDocs } from '../../pages/ProfilePage/ProfileDocs/ProfileDocs';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { ProfileProject } from '../../pages/ProfilePage/ProfileProject/ProfileProject';
import { ProfileSettings } from '../../pages/ProfilePage/ProfileSettings/ProfileSettings';
import { LoginPage } from '../../pages/auth/LoginPage';
import { PasswordResetPage } from '../../pages/auth/PasswordResetPage';
import { PasswordRestorePage } from '../../pages/auth/PasswordRestorePage';
import { RegisterPage } from '../../pages/auth/RegisterPage';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PopupFeedback } from '../PopupFeedback/PopupFeedback';
import { ProtectedRouteElement } from '../ProtectedRouteElement/ProtectedRouteElement';
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

      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_COMPETENCIES} element={<CompetenciesPage />}>
          <Route path={SUBROUTE_GAMEDEV} element={<CompetencePage />} />
          <Route path={`${ROUTE_COMPETENCIES}/:competenceId`} element={<ProductPage />} />
        </Route>

        <Route path={ROUTE_ED_TECH} element={<LabPage />} />

        <Route path={ROUTE_CONTACT} element={<ContactPage />} />

        <Route path={`${ROUTE_PRODUCTS}/:productId`} element={<ProductPage />} />

        <Route
          path={ROUTE_LOGIN}
          element={<ProtectedRouteElement onlyUnAuth element={<LoginPage />} />}
        />

        <Route
          path={ROUTE_REGISTER}
          element={<ProtectedRouteElement onlyUnAuth element={<RegisterPage />} />}
        />

        <Route path={ROUTE_FORGOT_PASSWORD} element={<PasswordRestorePage />} />
        <Route path={ROUTE_RESET_PASSWORD} element={<PasswordResetPage />} />

        <Route path={ROUTE_PROFILE} element={<ProtectedRouteElement element={<ProfilePage />} />}>
          <Route path={SUBROUTE_DASHBOARD} element={<ProfileDashboard />} />

          <Route path={`${ROUTE_PROFILE_PROJECTS}/:projectId`} element={<ProfileProject />} />

          <Route path={SUBROUTE_DOCS} element={<ProfileDocs />} />
          <Route path={SUBROUTE_SETTINGS} element={<ProfileSettings />} />
        </Route>

        <Route path={ROUTE_ERROR_500} element={<Page500 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <PopupFeedback isOpen={isPopupFeedbackOpen} onClose={closePopupFeedbackPopup} />

      <Footer />
      <CookiesToastContainer />
    </div>
  );
};

export default App;
