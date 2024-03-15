import cl from 'classnames';
import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselProps, ResponsiveType } from 'react-multi-carousel/lib/types';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';
import { TEmployee } from '../../types/data';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { CarouselBtn } from './CarouselBtn/CarouselBtn';
import s from './TeamSliderSection.module.scss';

interface TeamSliderSectionProps {
  className?: string;
  team: TEmployee[];
}

export const TeamSliderSection: FC<TeamSliderSectionProps> = ({ className = '', team }) => {
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
    tablet_wide: {
      breakpoint: { max: 768, min: 561 },
      items: 2,
    },
    tablet_small: {
      breakpoint: { max: 690, min: 561 },
      items: 1,
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
    draggable: false,
    focusOnSelect: false,
    infinite: true,
    keyBoardControl: true,
    customLeftArrow: <CarouselBtn direction="left" />,
    customRightArrow: <CarouselBtn direction="right" />,
    responsive,
    className: cl(s.slider),
    slidesToSlide: 1,
    swipeable: false,
    children: '',
  };

  const gradientCarouselProps: CarouselProps = {
    additionalTransfrom: 0,
    itemClass: s.item,
    arrows: true,
    centerMode: !isMobile,
    draggable: false,
    focusOnSelect: false,
    infinite: true,
    keyBoardControl: true,
    customLeftArrow: <CarouselBtn customId="TeamSliderBtnLeft" />,
    customRightArrow: <CarouselBtn customId="TeamSliderBtnRight" />,
    responsive,
    className: cl(s.slider, s.sliderWithGradient),
    slidesToSlide: 1,
    swipeable: false,
    children: '',
  };

  return (
    <section className={cl(s.TeamSliderSection, className)}>
      <SectionTitle text="Команда" />
      <div className={s.sectionContent}>
        <Carousel {...carouselProps}>
          {team.map((person) => (
            <div className={s.card} key={uuidv4()}>
              <div className={s.imgContainer}>
                <img src={person.photo_inactive} alt="Фото" className={cl(s.img, s.img_inactive)} />
                <img src={person.photo_active} alt="Фото" className={cl(s.img)} />
              </div>

              <h3 className={s.cardName}>{`${person.first_name} ${person.last_name}`}</h3>
              <div className={s.cardRole}>{person.positions[0].name}</div>
              <div className={s.cardDescription}>{person.description}</div>
            </div>
          ))}
        </Carousel>

        <Carousel {...gradientCarouselProps}>
          {team.map(() => (
            <div className={s.card} key={uuidv4()}>
              <div className={s.imgContainer}>
                <div className={s.radiant} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
