import cn from 'classnames';
import { FC, useState } from 'react';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import { EyeIcon } from '../ui/icons/EyeIcon/EyeIcon';
import s from './AuthFormInput.module.scss';

type IProps = {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: string;
  minLength: number;
  maxLength: number;
  error: string;
  labelNum: string;
  labelText: string;
  hintText: string;
  placeHolder: string;
};

export const AuthFormInput: FC<IProps> = ({
  name,
  type,
  placeHolder,
  value,
  onChange,
  ariaLabel,
  minLength,
  maxLength,
  error,
  labelNum,
  labelText,
  hintText,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleEyeIconClick = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <div className={s.inputContainer}>
      <input
        className={s.input}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        name={name}
        type={inputType}
        placeholder={placeHolder}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <div className={s.textContainer}>
        <span className={cn(s.textNumber, { [s.textNumberError]: error })}>{labelNum}</span>
        <span className={cn(s.textClue, { [s.textClueError]: error })}>{labelText}</span>
      </div>

      <div
        className={cn(s.inputErrorWrap, {
          [s.inputErrorWrapVisible]: error,
        })}>
        <span className={cn(s.inputError)}>{error}</span>
      </div>

      <div className={s.icons}>
        {type === 'password' && <EyeIcon onClick={handleEyeIconClick} />}
        <InfoTooltip content={hintText} />
      </div>
    </div>
  );
};
