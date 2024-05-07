import cn from 'classnames';
import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { CrossIcon } from '../../components/ui/icons/CrossIcon/CrossIcon';
import s from './auth.module.scss';

type IInfoTooltip = {
  className?: string;
  content: React.ReactNode;
};

export const InfoTooltip: React.FC<PropsWithChildren<IInfoTooltip>> = ({
  children = null,
  className = '',
  content = null,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <>
      {children &&
        React.cloneElement(children as ReactElement, {
          onClick: () => {
            setIsTooltipOpen((state) => !state);
          },
        })}
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
