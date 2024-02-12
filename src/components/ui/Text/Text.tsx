import React, { memo } from 'react';
import cl from 'classnames';
import s from './Text.module.scss';

export type TextProps = {
  children: React.ReactNode;
  className?: string;
  view?:
    | 'germano-1'
    | 'germano-2'
    | 'germano-3'
    | 'germano-4'
    | 'germano-5'
    | 'germano-6'
    | 'germano-7'
    | 'germano-8'
    | 'molot-1'
    | 'molot-2'
    | 'molot-3'
    | 'molot-4'
    | 'molot-5'
    | 'molot-6'
    | 'gost-1'
    | 'gost-2'
    | 'gost-3'
    | 'gost-4'
    | 'gost-5';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' | 'span';
  line?: boolean;
  outlined?: boolean;
};

const TextWithoutMemo: React.FC<TextProps> = ({
  className = '',
  view = 'gost-1',
  tag = 'div',
  children,
  line = false,
  outlined = false,
}) => {
  const fontFamily = view.split('-')[0];
  const Tag = tag;

  return (
    <Tag
      className={cl(
        s.text,
        s[`text__view-${view}`],
        line && s.text__line,
        s[`text__${fontFamily}`],
        outlined && s.text__outlined,
        className,
      )}>
      {children}
    </Tag>
  );
};

export const Text = memo(TextWithoutMemo);
