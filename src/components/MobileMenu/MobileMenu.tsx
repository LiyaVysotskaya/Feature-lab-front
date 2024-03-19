/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cl from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { MobileNav } from './MobileNav/MobileNav';
import s from './MobileMenu.module.scss';

type Props = {};

const MobileMenu: FC<Props> = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(true);
  const location = useLocation();

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

  const onOverlayTap = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setIsNavMobileOpen(false);
    }
  };

  return (
    <div className={cl(s.mobMenuContainer, { [s.fullScreen]: isNavMobileOpen })}>
      <div
        className={cl(s.mobileOverlay, {
          [s.mobileOverlayOpen]: isNavMobileOpen,
        })}
        onClick={onOverlayTap}
      />
      <MobileNav isOpen={isNavMobileOpen} onBurgerClick={handleBurgerBtnClick} />
    </div>
  );
};

export default MobileMenu;
