import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_COMPETENCIES, ROUTE_HOME, SUBROUTE_GAMEDEV } from '../../constants/constants';
import { CompetenciesPage } from '../../pages/CompetenciesPage/CompetenciesPage';
import { GameDev } from '../../pages/GameDev/GameDev';
import Home from '../../pages/Home/Home';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { PopupContact } from '../PopupContact/PopupContact';
import { PopupFeedback } from '../PopupFeedback/PopupFeedback';
import { PopupPrivacyPolicy } from '../PopupPrivacyPolicy/PopupPrivacyPolicy';
import { CookiesToastContainer } from '../ui/CookiesToastContainer/CookiesToastContainer';
import s from './App.module.scss';

const App: React.FC = () => {
  const [isPopupContactOpen, setPopupContactIsOpen] = React.useState(false);
  const [isPopupFeedbackOpen, setIsPopupFeedbackOpen] = React.useState(false);
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = React.useState(true);

  const closePopupContactPopups = () => {
    setPopupContactIsOpen(false);
  };

  const closePopupFeedbackPopup = () => {
    setIsPopupFeedbackOpen(false);
  };

  const closePopupPrivacyPolicyPopup = () => {
    setIsPopupPrivacyPolicyOpen(false);
  };

  const openPopupPrivacyPolicy = () => {
    setIsPopupPrivacyPolicyOpen(true);
  };

  return (
    <div className={s.page}>
      <Header />
      <Main>
        <Routes>
          <Route path={ROUTE_HOME} element={<Home />} />
          <Route path={ROUTE_COMPETENCIES} element={<CompetenciesPage />}>
            <Route path={SUBROUTE_GAMEDEV} element={<GameDev />} />
            <Route path="some-other-route" element={<GameDev />} />
          </Route>
        </Routes>
      </Main>

      <PopupContact
        isOpen={isPopupContactOpen}
        onClose={closePopupContactPopups}
        openPrivacyPolicyPopup={openPopupPrivacyPolicy}
      />
      <PopupFeedback isOpen={isPopupFeedbackOpen} onClose={closePopupFeedbackPopup} />
      <PopupPrivacyPolicy
        isOpen={isPopupPrivacyPolicyOpen}
        onClose={closePopupPrivacyPolicyPopup}
      />

      <Footer />
      <CookiesToastContainer />
    </div>
  );
};

export default App;
