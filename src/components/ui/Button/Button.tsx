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
        <div className={cl(s.promoBtnWrapper, className)}>
          <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={cl(s.btn, s.promoBtn)}>
            {!isLoading ? text : <Spinner className={cl(s.spinner)} />}
          </button>
        </div>
      )}

      {(theme === 'white' || theme === 'blue') && (
        <div
          className={cl(s.radiantBtnWrapper, { [s.radiantBtnWrapper_gray]: disabled }, className)}>
          <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={cl(s.btn, s.radiantBtn, {
              [s.radiantBtn_white]: theme === 'white',
              [s.radiantBtn_blue]: theme === 'blue',
            })}>
            {!isLoading ? (
              text
            ) : (
              <Spinner
                className={cl(s.spinner, {
                  [s.spinner_blue]: theme === 'white',
                })}
              />
            )}
          </button>
        </div>
      )}
    </>
  );
};
