import { useAtom } from 'jotai';
import { FC } from 'react';
import { isPopupFeedbackOpenAtom } from '../../../atoms/popupAtoms';
import { Text } from '../../_ui/Text/Text';
import { CrossIcon } from '../../_ui/icons';
import { Overlay } from '../Overlay/Overlay';
import s from './PopupFeedback.module.scss';

export const PopupFeedback: FC = () => {
  const [isOpen, setIsOpen] = useAtom(isPopupFeedbackOpenAtom);

  return (
    <Overlay onClose={() => setIsOpen(false)} isOpen={isOpen}>
      <div className={s.popupFeedback}>
        <button className={s.popupFeedback__cross} type="button" onClick={() => setIsOpen(false)}>
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
