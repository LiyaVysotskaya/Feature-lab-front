import { FC } from 'react';
import Overlay from '../Overlay/Overlay';
import { Text } from '../ui/Text/Text';
import { CrossIcon } from '../ui/icons';
import s from './PopupFeedback.module.scss';

type IProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const PopupFeedback: FC<IProps> = ({ isOpen, onClose }) => {
  return (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <div className={s.popupFeedback}>
        <button className={s.popupFeedback__cross} type="button" onClick={onClose}>
          <CrossIcon />
        </button>
        <div className={s.popupFeedback__content}>
          <Text view="germano-4" className={s.popupFeedback__text}>
            Спасибо за ваш вопрос!
          </Text>
          <Text view="germano-4" className={s.popupFeedback__text}>
            Мы свяжемся с вами в течение следующего рабочего дня.
          </Text>
        </div>
      </div>
    </Overlay>
  );
};
