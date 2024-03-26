import cl from 'classnames';
import React, { FC, cloneElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './ProfileNavLink.module.scss';

type IProps = {
  to: string;
  icon: React.ReactElement;
  isIconFilled?: boolean;
  text: string;
};

export const ProfileNavLink: FC<IProps> = ({ to, icon, text, isIconFilled = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink to={to} className={cl(s.link, { [s.linkActive]: isActive })}>
      {cloneElement(icon, { filled: isIconFilled || isActive, className: s.navIcon })}
      <span className={cl(s.linkText)}>{text}</span>
    </NavLink>
  );
};
