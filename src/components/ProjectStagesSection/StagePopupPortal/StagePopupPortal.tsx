import cl from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CrossIcon } from '../../ui/icons';
import s from './StagePopupPortal.module.scss';

type StagePopupPortalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  stageEl: HTMLDivElement;
};

type PopupPositionState = {
  top: number | undefined;
  left: number | undefined;
  side: string | undefined;
};

const calculatePopupLeftPosition = (stageRect: DOMRect, popupWidth: number) => {
  const isTooCloseToLeftEdge = stageRect.left - popupWidth < 0;
  const isTooCloseToRightEdge = stageRect.right + popupWidth > window.innerWidth;

  if (isTooCloseToLeftEdge && !isTooCloseToRightEdge) {
    return { left: stageRect.left, side: 'right' }; // show from right side of stage el
  }
  if (isTooCloseToRightEdge && !isTooCloseToLeftEdge) {
    return { left: stageRect.left - popupWidth, side: 'left' }; // show from left side of stage el
  }
  if (isTooCloseToLeftEdge && isTooCloseToRightEdge && window.innerWidth <= 768) {
    return { left: window.innerWidth / 2 - popupWidth / 2, side: undefined }; // show in center of stagesWrapper
  }
  return { left: stageRect.left, side: 'right' }; // show from right side of stage el
};

const StagePopupPortal: React.FC<StagePopupPortalProps> = ({
  stageEl,
  onClose,
  isOpen,
  children,
}) => {
  const popupRoot = document.getElementById('generalWrapper');
  const [popupPosition, setPopupPosition] = useState<PopupPositionState>({
    top: undefined,
    left: undefined,
    side: undefined,
  });

  const popupRef = useRef<HTMLDivElement>(null);

  // handle touch listener on mobile devices
  useEffect(() => {
    const handleOutsideClick = (e: TouchEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        !stageEl.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('touchstart', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleOnMouseLeave = () => {
    if (window.innerWidth > 768) {
      onClose();
    }
  };

  // calculate popup initial position
  useEffect(() => {
    const popup = popupRef.current;
    const stageElRect = stageEl.getBoundingClientRect();
    if (stageElRect && popup) {
      const position = calculatePopupLeftPosition(stageElRect, popup.clientWidth);

      setPopupPosition({ top: stageElRect.top - 10, left: position.left, side: position.side });
    }
  }, []);

  if (!popupRoot || !isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={popupRef}
      className={cl(s.popupWrap, {
        [s.popupWrap_visible]:
          isOpen &&
          popupPosition.top &&
          popupPosition.top > 0 &&
          popupPosition.left &&
          popupPosition.left > 0,
        [s.popupWrap_left]: popupPosition.side === 'right',
        [s.popupWrap_right]: popupPosition.side === 'left',
      })}
      onMouseLeave={handleOnMouseLeave}
      style={{ top: popupPosition.top, left: popupPosition.left }}>
      <div className={cl(s.popup)}>
        <div className={s.popupContent}>
          {children}
          <button type="button" className={s.popupCloseBtn} onClick={() => onClose()}>
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>,
    popupRoot,
  );
};

export default StagePopupPortal;
