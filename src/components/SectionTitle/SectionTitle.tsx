import cl from 'classnames';
import { FC } from 'react';
import { Text } from '../ui/Text/Text';
import s from './SectionTitle.module.scss';

type IProps = {
  className?: string;
  text: String;
};

export const SectionTitle: FC<IProps> = ({ className = '', text }) => {
  return (
    <Text view="germano-4" className={cl(s.sectionTitle, className)} tag="h2">
      {text}
    </Text>
  );
};
