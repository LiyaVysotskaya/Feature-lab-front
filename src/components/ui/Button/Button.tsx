import cl from 'classnames';
import { FC } from 'react';
import s from './Button.module.scss';
import Spinner from './svg/Icon-SpinnerGap.svg?svgr';

export interface IButtonProps {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  theme: 'promo' | 'white' | 'blue';
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  className = '',
  type = 'button',
  onClick = () => {},
  theme,
  text = '',
  isLoading = false,
  disabled = false,
}) => {
  return (
    <>
      {theme === 'promo' && (
        <button
          disabled={disabled}
          onClick={onClick}
          type={type}
          className={cl(s.btn, s.promo, className)}>
          <div className={s.disk_out}>
            <div className={s.disk_in}>
              {!isLoading ? (
                <p className={s.promoText}>{text}</p>
              ) : (
                <Spinner className={cl(s.spinner)} />
              )}
            </div>
          </div>
        </button>
      )}
      {(theme === 'white' || theme === 'blue') && (
        <div className={cl(s.btn, s.radiant, className)}>
          <div
            className={cl(s.gradient, {
              [s.gradient_gray]: disabled === true,
            })}>
            <button
              disabled={disabled}
              onClick={onClick}
              type={type}
              className={cl(s.disk, {
                [s.disk_white]: theme === 'white',
                [s.disk_blue]: theme === 'blue',
              })}>
              {!isLoading ? (
                <p
                  className={cl(s.text, {
                    [s.text_blue]: theme === 'white',
                    [s.text_white]: theme === 'blue',
                  })}>
                  {text}
                </p>
              ) : (
                <Spinner
                  className={cl(s.spinner, {
                    [s.spinner_blue]: theme === 'white',
                  })}
                />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
