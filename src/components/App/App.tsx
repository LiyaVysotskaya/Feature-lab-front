import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ROUTE_COMPETENCIES,
  ROUTE_ED_TECH,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  SUBROUTE_DOCSHABLON,
  SUBROUTE_GAMEDEV,
} from '../../constants/constants';
import { CompetencePage } from '../../pages/CompetencePage/CompetencePage';
import { CompetenciesPage } from '../../pages/CompetenciesPage/CompetenciesPage';
import { Home } from '../../pages/Home/Home';
import { LabPage } from '../../pages/LabPage/LabPage';
import { ProductPage } from '../../pages/ProductPage/ProductPage';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PopupContact } from '../PopupContact/PopupContact';
import { PopupFeedback } from '../PopupFeedback/PopupFeedback';
import { CookiesToastContainer } from '../ui/CookiesToastContainer/CookiesToastContainer';
import s from './App.module.scss';

const App: React.FC = () => {
  const [isPopupContactOpen, setPopupContactIsOpen] = React.useState(false);
  const [isPopupFeedbackOpen, setIsPopupFeedbackOpen] = React.useState(false);

  const closePopupContactPopups = () => {
    setPopupContactIsOpen(false);
  };

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

        <Route path={ROUTE_PRODUCTS} element={<ProductPage />}>
          <Route path={SUBROUTE_DOCSHABLON} element={<ProductPage />} />
          <Route path="some-other-product-subroute" element={<ProductPage />} />
        </Route>
      </Routes>

      <PopupContact isOpen={isPopupContactOpen} onClose={closePopupContactPopups} />
      <PopupFeedback isOpen={isPopupFeedbackOpen} onClose={closePopupFeedbackPopup} />

      <Footer />
      <CookiesToastContainer />
    </div>
  );
};

export default App;
