import cl from 'classnames';
import { FC } from 'react';
import { Text } from '../ui/Text/Text';
import s from './SectionTitle.module.scss';

export interface SectionTitleProps {
  className?: string;
  text: String;
}

export const SectionTitle: FC<SectionTitleProps> = ({ className = '', text }) => {
  return (
    <Text view="germano-3" className={cl(s.sectionTitle, className)} tag="h2">
      {text}
    </Text>
  );
};
