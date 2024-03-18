import cl from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { HamburgerBtn } from '../Header/HamburgerBtn/HamburgerBtn';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import s from './MobileMenuPortal.module.scss';

type Props = {};

const MobileMenuPortal: FC<Props> = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(true);
  const popupRoot = document.getElementById('root');

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
    <>
      <HamburgerBtn isChecked={isNavMobileOpen} onClick={handleBurgerBtnClick} />
      <div
        className={cl(s.mobileOverlay, {
          [s.mobileOverlayOpen]: isNavMobileOpen,
        })}>
        <MobileMenu isOpen={isNavMobileOpen} />
      </div>
    </>,
    popupRoot,
  );
};

export default MobileMenuPortal;
