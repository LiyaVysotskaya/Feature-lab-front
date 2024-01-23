import cl from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import s from './TeamSlider.module.scss';
import { cards } from './mockData';
import { ArrowInCircleIcon } from '../ui/icons';

export interface TeamSliderProps {
  className?: string;
}

const leftArrow = <ArrowInCircleIcon reverse className={s.customLeftArrow} />;
const rightArrow = <ArrowInCircleIcon className={s.customRightArrow} />;

export const TeamSlider: FC<TeamSliderProps> = ({ className = '' }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '240px',
    slidesToShow: 3,
    speed: 500,
    initialSlide: 1,
    arrows: true,
    useTransform: true,
    prevArrow: leftArrow,
    nextArrow: rightArrow,
  };
  return (
    <section className={cl(s.TeamSliderSection, className)}>
      <h2 className={s.sectionTitle}>Команда</h2>
      <Slider {...settings}>
        {cards.map((card) => (
          <div className={s.cardContainer} key={uuidv4()}>
            <div className={s.card}>
              <div className={s.cardPicture}>
                <div className={s.radiant}>
                  <div className={s.gradient} />
                </div>
              </div>
              <h3 className={s.cardName}>{card.name}</h3>
              <div className={s.cardRole}>{card.role}</div>
              <div className={s.cardDescription}>{card.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
