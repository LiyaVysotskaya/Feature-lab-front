import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './ListEl.module.scss';

type IProps = {
  className?: string;
  index: number;
  title: string;
  text: string;
  desription: string;
  link: string;
};

export const ListEl: FC<IProps> = ({ className = '', index, title, desription, text, link }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(link);
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
            <span className={cl(s.cardTitleNumber)}>{(index + 1).toString().padStart(2, '0')}</span>
            <span className={cl(s.cardTitleText)}>{title.toUpperCase()}</span>
          </h3>
          <p className={cl(s.cardText)}>{text}</p>
        </div>

        {placement === 'right' && <p className={s.text}>{desription}</p>}
      </button>
    </li>
  );
};
