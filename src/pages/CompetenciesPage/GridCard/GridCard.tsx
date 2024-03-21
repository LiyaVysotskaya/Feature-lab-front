import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './GridCard.module.scss';
import { ROUTE_COMPETENCIES } from '../../../constants/routesConstants';

interface IProps {
  className?: string;
  slug: string;
  title: string;
  text: string;
}

export const GridCard: FC<IProps> = ({ className = '', title, text, slug }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`${ROUTE_COMPETENCIES}/${slug}`);
  };

  return (
    <button
      type="button"
      className={cl(s.card, className)}
      onClick={() => {
        handleOnClick();
      }}>
      <h3 className={cl(s.cardTitle)}>{title}</h3>
      <p className={cl(s.cardText)}>{text}</p>
    </button>
  );
};
