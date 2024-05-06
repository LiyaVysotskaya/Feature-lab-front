import cn from 'classnames';
import { FC } from 'react';
import { SpinnerIcon } from '../icons';
import s from './RoundButton.module.scss';

type IProps = {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  theme: 'promo' | 'white' | 'blue';
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export const RoundButton: FC<IProps> = ({
  className = '',
  type = 'button',
  onClick = () => {},
  theme,
  text = '',
  isLoading = false,
  disabled = false,
}) => {
  const spinnerColor = () => {
    if (theme === 'white') {
      return 'blue';
    }
    return 'white';
  };

  return (
    <>
      {theme === 'promo' && (
        <div className={cn(s.promoBtnWrapper, className)}>
          <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={cn(s.btn, s.promoBtn)}>
            {!isLoading ? <span>{text}</span> : <SpinnerIcon theme="white" />}
          </button>
        </div>
      )}

      {(theme === 'white' || theme === 'blue') && (
        <div
          className={cn(s.radiantBtnWrapper, { [s.radiantBtnWrapper_gray]: disabled }, className)}>
          <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={cn(s.btn, s.radiantBtn, {
              [s.radiantBtn_white]: theme === 'white',
              [s.radiantBtn_blue]: theme === 'blue',
            })}>
            {!isLoading ? <span>{text}</span> : <SpinnerIcon theme={spinnerColor()} />}
          </button>
        </div>
      )}
    </>
  );
};
