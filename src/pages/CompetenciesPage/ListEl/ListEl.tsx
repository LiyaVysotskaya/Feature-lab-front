import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './ListEl.module.scss';
import { ROUTE_COMPETENCIES } from '../../../constants/routesConstants';

type IProps = {
  className?: string;
  slug: string;
  index: number;
  title: string;
  text: string;
  desription: string;
};

export const ListEl: FC<IProps> = ({ className = '', index, title, desription, text, slug }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`${ROUTE_COMPETENCIES}/${slug}`);
  };
  const placement = (index + 1) % 3 === 0 || (index + 1) % 3 === 1 ? 'right' : 'left';

  return (
    <li className={cl(s.listElement, className)}>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          handleOnClick();
        }}>
        {placement === 'left' && <p className={s.text}>{desription}</p>}

        <div className={cl(s.card)}>
          <h3 className={cl(s.cardTitle)}>
            <span className={cl(s.cardNumber)}>{(index + 1).toString().padStart(2, '0')}</span>
            {title.toUpperCase()}
          </h3>
          <p className={cl(s.cardText)}>{text}</p>
        </div>

        {placement === 'right' && <p className={s.text}>{desription}</p>}
      </button>
    </li>
  );
};
