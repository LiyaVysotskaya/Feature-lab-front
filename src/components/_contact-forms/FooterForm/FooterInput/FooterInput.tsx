import cn from 'classnames';
import { ChangeEventHandler, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import { resizeInputFont } from '../../../../utils/formHelpers';
import s from './FooterInput.module.scss';

type IProps = {
  name: string;
  type: string;
  ariaLabel: string;
  placeHolder: string;
  isTextArea?: boolean;
};

export const FooterInput: FC<IProps> = ({
  name,
  type,
  placeHolder,
  ariaLabel,
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
    <div className={cn(s.inputContainer, { [s.inputContainerError]: error })}>
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
      <span className={cn(s.textClue, { [s.textClueError]: error })}>{error || placeHolder}</span>
    </div>
  );
};
