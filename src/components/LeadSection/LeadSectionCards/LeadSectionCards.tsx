import cl from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { TProperty } from '../../../types/data';
import s from './LeadSectionCards.module.scss';

interface ILeadSectionCardsProps {
  properties: TProperty[];
  url: string;
  productType?: string;
}

export const LeadSectionCards: FC<ILeadSectionCardsProps> = ({
  properties,
  url = '',
  productType = '',
}) => {
  return (
    <ul className={cl(s.cards)}>
      {productType && url && (
        <li className={cl(s.card)}>
          <div className={cl(s.cardHeader)}>
            <p className={cl(s.cardTitleBig)}>{productType}</p>
          </div>
          <p className={cl(s.cardText)}>
            Запущен и его можно посмотреть{' '}
            <Link to={url} className={s.link} target="_blank" rel="noopener noreferrer">
              по ссылке
            </Link>
          </p>
        </li>
      )}

      {properties.map((card) => {
        const { name, value } = card;
        const regex = /^(\d+)\s+(.*)$/;
        const match = name.match(regex);
        const titleBig = match ? match[1] : '';
        const titleSmall = match ? match[2] : name;

        return (
          <li className={cl(s.card)} key={uuidv4()}>
            <div className={cl(s.cardHeader)}>
              <p className={cl(s.cardTitleBig)}>{titleBig}</p>
              {titleSmall && <p className={cl(s.cardTitleSmall)}>{titleSmall}</p>}
            </div>
            <p className={cl(s.cardText)}>{value}</p>
          </li>
        );
      })}
    </ul>
  );
};
