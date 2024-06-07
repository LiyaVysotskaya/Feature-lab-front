import cn from 'classnames';
import { ChangeEventHandler, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import { resizeInputFont } from '../../../../utils/formHelpers';
import s from './PopupContactInput.module.scss';

type IProps = {
  name: string;
  type: string;
  ariaLabel: string;
  labelNum: string;
  labelText: string;
  placeHolder: string;
  isTextArea?: boolean;
};

export const PopupContactInput: FC<IProps> = ({
  name,
  type,
  placeHolder,
  ariaLabel,
  labelNum,
  labelText,
  isTextArea = false,
}) => {
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

  return (
    <div className={s.inputContainer}>
      {!isTextArea && (
        <input
          {...restRegisterProps}
          onChange={handleChange}
          aria-label={ariaLabel}
          type={type}
          placeholder={placeHolder}
          className={s.input}
        />
      )}
      {isTextArea && (
        <TextareaAutosize
          {...restRegisterProps}
          onChange={onChange}
          aria-label={ariaLabel}
          placeholder={placeHolder}
          className={cn(s.input, s.textarea)}
        />
      )}
      <div className={s.textContainer}>
        <span className={cn(s.textNumber, { [s.textNumberError]: error })}>{labelNum}</span>
        <span className={cn(s.textClue, { [s.textClueError]: error })}>{labelText}</span>
      </div>
      <div className={cn(s.inputErrorWrap, { [s.inputErrorWrapVisible]: error })}>
        <span className={cn(s.inputError)}>{error}</span>
      </div>
    </div>
  );
};
