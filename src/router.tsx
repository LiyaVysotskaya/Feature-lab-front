import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRouteElement } from './components/ProtectedRouteElement/ProtectedRouteElement';
import {
  ROUTE_CHANGE_PASSWORD,
  ROUTE_COMPETENCIES,
  ROUTE_CONTACT,
  ROUTE_ED_TECH,
  ROUTE_ERROR_404,
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
} from './constants/routesConstants';
import { CompetencePage } from './pages/CompetencePage/CompetencePage';
import { CompetenciesPage } from './pages/CompetenciesPage/CompetenciesPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { Home } from './pages/Home/Home';
import { LabPage } from './pages/LabPage/LabPage';
import { Page404 } from './pages/Page404/Page404';
import { Page500 } from './pages/Page500/Page500';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ProfileDashboard } from './pages/ProfilePage/ProfileDashboard/ProfileDashboard';
import { ProfileDocs } from './pages/ProfilePage/ProfileDocs/ProfileDocs';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { ProfileProject } from './pages/ProfilePage/ProfileProject/ProfileProject';
import { ProfileSettings } from './pages/ProfilePage/ProfileSettings/ProfileSettings';
import { LoginPage } from './pages/auth/LoginPage/LoginPage';
import { PasswordResetPage } from './pages/auth/PasswordResetPage/PasswordResetPage';
import { PasswordRestorePage } from './pages/auth/PasswordRestorePage/PasswordRestorePage';
import { RegisterPage } from './pages/auth/RegisterPage/RegisterPage';
import { PasswordChangePage } from './pages/auth/PasswordChangePage/PasswordChangePage';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<Home />} />
      <Route path={ROUTE_COMPETENCIES} element={<CompetenciesPage />}>
        <Route path={`${ROUTE_COMPETENCIES}/:competenceSlug`} element={<CompetencePage />} />
      </Route>
      <Route path={ROUTE_ED_TECH} element={<LabPage />} />
      <Route path={ROUTE_CONTACT} element={<ContactPage />} />
      <Route path={`${ROUTE_PRODUCTS}/:productSlug`} element={<ProductPage />} />
      <Route
        path={ROUTE_LOGIN}
        element={<ProtectedRouteElement onlyUnAuth element={<LoginPage />} />}
      />
      <Route
        path={ROUTE_REGISTER}
        element={<ProtectedRouteElement onlyUnAuth element={<RegisterPage />} />}
      />

      <Route
        path={ROUTE_FORGOT_PASSWORD}
        element={<ProtectedRouteElement onlyUnAuth element={<PasswordRestorePage />} />}
      />
      <Route
        path={ROUTE_RESET_PASSWORD}
        element={<ProtectedRouteElement onlyUnAuth element={<PasswordResetPage />} />}
      />

      <Route path={ROUTE_PROFILE} element={<ProtectedRouteElement element={<ProfilePage />} />}>
        <Route path={SUBROUTE_DASHBOARD} element={<ProfileDashboard />} />

        <Route path={`${ROUTE_PROFILE_PROJECTS}/:projectId`} element={<ProfileProject />} />

        <Route path={SUBROUTE_DOCS} element={<ProfileDocs />} />
        <Route path={SUBROUTE_SETTINGS} element={<ProfileSettings />} />
      </Route>

      <Route
        path={ROUTE_CHANGE_PASSWORD}
        element={<ProtectedRouteElement element={<PasswordChangePage />} />}
      />

      <Route path={ROUTE_ERROR_500} element={<Page500 />} />
      <Route path={ROUTE_ERROR_404} element={<Page404 />} />
      <Route path="*" element={<Navigate to={ROUTE_ERROR_404} />} />
    </Routes>
  );
};
