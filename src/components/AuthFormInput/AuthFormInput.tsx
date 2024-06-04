import cn from 'classnames';
import { ChangeEventHandler, FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { resizeInputFont } from '../../utils/formHelpers';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import { EyeIcon } from '../_ui/icons/EyeIcon/EyeIcon';
import s from './AuthFormInput.module.scss';

type IProps = {
  name: string;
  type: string;
  ariaLabel: string;
  labelNum: string;
  labelText: string;
  hintText: string;
  placeHolder: string;
};

export const AuthFormInput: FC<IProps> = ({
  name,
  type,
  placeHolder,
  ariaLabel,
  labelNum,
  labelText,
  hintText,
}) => {
  const [inputType, setInputType] = useState(type);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;
  const { onChange, ...restRegisterProps } = register(name);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e); // Call the original react-hook-form handler to ensure validation works
    resizeInputFont(e);
  };

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
        onChange={handleChange}
        {...restRegisterProps}
        className={s.input}
        aria-label={ariaLabel}
        type={inputType}
        placeholder={placeHolder}
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
        {type === 'password' && <EyeIcon onClick={handleEyeIconClick} isRed={Boolean(error)} />}
        <InfoTooltip content={hintText} isError={Boolean(error)} />
      </div>
    </div>
  );
};
