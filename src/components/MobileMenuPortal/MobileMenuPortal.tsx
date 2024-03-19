import cl from 'classnames';
import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import s from './MobileMenuPortal.module.scss';

type Props = {};

const MobileMenuPortal: FC<Props> = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(true);
  const location = useLocation();
  const popupRoot = document.getElementById('root');

  useEffect(() => {
    // Close the menu when the location changes
    setIsNavMobileOpen(false);
  }, [location]);

  // Add class to body to disable scrollbar when the popup is open
  useEffect(() => {
    if (isNavMobileOpen) {
      document.body.classList.add(s.bodyNoScroll);
    } else {
      document.body.classList.remove(s.bodyNoScroll);
    }
  }, [isNavMobileOpen]);

  const handleBurgerBtnClick = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  if (!popupRoot) return null;

  return ReactDOM.createPortal(
    <div className={s.mobMenuContainer}>
      <div
        className={cl(s.mobileOverlay, {
          [s.mobileOverlayOpen]: isNavMobileOpen,
        })}
      />
      <MobileMenu isOpen={isNavMobileOpen} onBurgerClick={handleBurgerBtnClick} />
    </div>,
    popupRoot,
  );
};

export default MobileMenuPortal;
