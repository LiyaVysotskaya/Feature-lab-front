import cl from 'classnames';
import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import s from './InfoTooltip.module.scss';
import { CrossIcon } from '../../../components/ui/icons/CrossIcon/CrossIcon';

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

  useEffect(() => {
    console.log((children as ReactElement).props);
  }, [children]);

  return (
    <>
      {children &&
        React.cloneElement(children as ReactElement, {
          onClick: (e) => {
            console.log(e);
          },
        })}
      <div className={cl(s.tooltip, className, { [s.tooltipVisible]: isTooltipOpen })}>
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