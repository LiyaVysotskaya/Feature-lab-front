import cn from 'classnames';
import React, { FC, cloneElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './ProfileTabLink.module.scss';

type IProps = {
  to: string;
  icon: React.ReactElement;
  isIconFilled?: boolean;
  text: string;
};

export const ProfileTabLink: FC<IProps> = ({ to, icon, text, isIconFilled = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to || isIconFilled;

  return (
    <NavLink to={to} className={cn(s.tab, { [s.tabActive]: isActive })}>
      <div className={cn(s.tabContent, { [s.tabContentWithShadow]: isActive })}>
        {cloneElement(icon, { filled: isActive, className: s.navIcon })}
        <span className={cn(s.tabText)}>{text}</span>
      </div>
    </NavLink>
  );
};
