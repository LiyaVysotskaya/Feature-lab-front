import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselProps, ResponsiveType } from 'react-multi-carousel/lib/types';
import cl from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ArrowInCircleIcon } from '../ui/icons';
import s from './TeamSlider.module.scss';
import { cards } from './mockData';

interface TeamSliderProps {
  className?: string;
}

const leftArrow = <ArrowInCircleIcon reverse className={s.customLeftArrow} />;
const rightArrow = <ArrowInCircleIcon className={s.customRightArrow} />;

export const TeamSlider: FC<TeamSliderProps> = ({ className = '' }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1921 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1281 },
      items: 3,
    },
    smallDesktop: {
      breakpoint: { max: 1280, min: 1070 },
      items: 3,
    },
    1070: {
      breakpoint: { max: 1069, min: 769 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 561 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  };

  const carouselProps: CarouselProps = {
    additionalTransfrom: 0,
    itemClass: s.item,
    arrows: true,
    centerMode: !isMobile,
    containerClass: 'container',
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    keyBoardControl: true,
    minimumTouchDrag: 80,
    customRightArrow: rightArrow,
    customLeftArrow: leftArrow,
    responsive,
    sliderClass: s.slider,
    slidesToSlide: 1,
    swipeable: true,
    children: '',
  };

  return (
    <section className={cl(s.TeamSliderSection, className)}>
      <SectionTitle text="Команда" />
      <Carousel {...carouselProps}>
        {cards.map((card) => (
          <div className={s.card} key={uuidv4()}>
            <div className={s.cardPicture}>
              <div className={s.radiant} />
              <div className={s.cardPhoto} />
            </div>
            <h3 className={s.cardName}>{card.name}</h3>
            <div className={s.cardRole}>{card.role}</div>
            <div className={s.cardDescription}>{card.description}</div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
