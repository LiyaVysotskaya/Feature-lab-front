import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { TProperty } from '../../../../types/publicData';
import s from './LeadSectionCards.module.scss';

type IProps = {
  properties: TProperty[];
  url: string;
  productType?: string;
};

export const LeadSectionCards: FC<IProps> = ({ properties, url = '', productType = '' }) => {
  return (
    <ul className={cn(s.cards)}>
      {productType && url && (
        <li className={cn(s.card)}>
          <div className={cn(s.cardHeader)}>
            <p className={cn(s.cardTitleBig)}>{productType}</p>
          </div>
          <p className={cn(s.cardText)}>
            Запущен и его можно посмотреть{' '}
            <Link to={url} className={s.link} target="_blank" rel="noopener noreferrer">
              по ссылке
            </Link>
          </p>
        </li>
      )}

      {properties.map((card) => {
        const { name, value } = card;
        const words = name.split(' ');
        const titleBig = words[0];
        const titleSmall = words.slice(1).join(' ');

        return (
          <li className={cn(s.card)} key={uuidv4()}>
            <div className={cn(s.cardHeader)}>
              <p className={cn(s.cardTitleBig)}>{titleBig}</p>
              {titleSmall && <p className={cn(s.cardTitleSmall)}>{titleSmall}</p>}
            </div>
            <p className={cn(s.cardText)}>{value}</p>
          </li>
        );
      })}
    </ul>
  );
};
