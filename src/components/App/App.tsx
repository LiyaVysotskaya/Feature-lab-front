import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { products } from '../../_mockData/productsMockData';
import { projects } from '../../_mockData/projectsMockData';
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
import { LoginPage } from '../../pages/auth/LoginPage/LoginPage';
import { PasswordResetPage } from '../../pages/auth/PasswordResetPage/PasswordResetPage';
import { PasswordRestorePage } from '../../pages/auth/PasswordRestorePage/PasswordRestorePage';
import { RegisterPage } from '../../pages/auth/RegisterPage/RegisterPage';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PopupFeedback } from '../PopupFeedback/PopupFeedback';
import { ProtectedRouteElement } from '../ProtectedRouteElement/ProtectedRouteElement';
import { CookiesToastContainer } from '../ui/CookiesToastContainer/CookiesToastContainer';
import s from './App.module.scss';

const App: React.FC = () => {
  const [isPopupFeedbackOpen, setIsPopupFeedbackOpen] = React.useState(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const closePopupFeedbackPopup = () => {
    setIsPopupFeedbackOpen(false);
  };

  return (
    <div className={s.page}>
      <Header />

      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_COMPETENCIES} element={<CompetenciesPage />}>
          <Route path={SUBROUTE_GAMEDEV} element={<CompetencePage />} />
          <Route path="some-other-route" element={<CompetencePage />} />
        </Route>

        <Route path={ROUTE_ED_TECH} element={<LabPage />} />

        <Route path={ROUTE_CONTACT} element={<ContactPage />} />

        <Route path={ROUTE_PRODUCTS} element={<ProductPage />}>
          {products.map((item) => (
            <Route path={item.url} key={item.url} element={<ProductPage />} />
          ))}
        </Route>

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

          {projects.map((item) => (
            <Route key={item.url} path={item.url} element={<ProfileProject />} />
          ))}

          <Route path={SUBROUTE_DOCS} element={<ProfileDocs />} />
          <Route path={SUBROUTE_SETTINGS} element={<ProfileSettings />} />

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
