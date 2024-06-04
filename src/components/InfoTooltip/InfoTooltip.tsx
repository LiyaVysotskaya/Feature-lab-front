import cn from 'classnames';
import React, { useState } from 'react';
import { QuestionIcon } from '../_ui/icons';
import { CrossIcon } from '../_ui/icons/CrossIcon/CrossIcon';
import s from './InfoTooltip.module.scss';

type IProps = {
  className?: string;
  content: React.ReactNode;
  isError?: boolean;
};

export const InfoTooltip: React.FC<IProps> = ({
  className = '',
  content = null,
  isError = false,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <>
      <QuestionIcon
        onClick={() => {
          setIsTooltipOpen((state) => !state);
        }}
        isRed={isError}
      />

      <div className={cn(s.tooltip, className, { [s.tooltipVisible]: isTooltipOpen })}>
        <div className={s.tooltipContent}>
          {content}
          <button
            type="button"
            className={s.tooltipCloseBtn}
            onClick={() => setIsTooltipOpen(false)}>
            <CrossIcon />
          </button>
        </div>
      </div>
    </>
  );
};
