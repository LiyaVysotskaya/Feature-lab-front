import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './App.module.scss';
import Main from '../Main/Main';
import { PopupContact } from '../PopupContact/PopupContact';

const App: React.FC = () => {
  const [isPopupContactOpen, setPopupContactIsOpen] = React.useState(true);

  const closePopupContactPopups = () => {
    setPopupContactIsOpen(false);
  };

  return (
    <div className={styles.page}>
      <Header />
      <Main>
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </Main>

      <PopupContact isOpen={isPopupContactOpen} onClose={closePopupContactPopups} />
      <Footer />
    </div>
  );
};

export default App;
