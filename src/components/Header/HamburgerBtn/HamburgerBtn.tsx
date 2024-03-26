/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import cl from 'classnames';
import { FC } from 'react';
import s from './HamburgerBtn.module.scss';

type IProps = {
  onClick?: () => void;
  isChecked: boolean;
  positionY: number;
};

export const HamburgerBtn: FC<IProps> = ({ onClick = () => {}, isChecked, positionY }) => {
  return (
    <div className={cl(s.burger)} style={{ top: 12 + positionY }}>
      <input
        id="burgerToggle"
        type="checkbox"
        className={s.page__toggle}
        checked={isChecked}
        onChange={() => {}}
      />
      <label onClick={onClick} htmlFor="burgerToggle" className={cl(s.button_type_hamburger)}>
        <div className={cl(s['top-bun'], s.button__part)} />
        <div className={cl(s.meat, s.button__part)} />
        <div className={cl(s['bottom-bun'], s.button__part)} />
      </label>
    </div>
  );
};
