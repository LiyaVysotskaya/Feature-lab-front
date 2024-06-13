import cn from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import s from './PageTitle.module.scss';

type IProps = {
  pageTitle: string;
  subTitle?: string;
  className?: string;
};

export const PageTitle: FC<IProps> = ({ className = '', pageTitle, subTitle = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const location = useLocation();

  const resizeFont = () => {
    if (containerRef.current && textRef.current) {
      textRef.current.style.marginLeft = '0'; // calculation should be without negative margins

      let initialMaxFontSize = 0;
      const windowWidth = window.innerWidth;

      if (windowWidth > 1280) {
        initialMaxFontSize = 410;
      } else if (windowWidth > 768) {
        initialMaxFontSize = 250;
      } else {
        initialMaxFontSize = windowWidth * 0.33; // 33% of window width
      }

      let fontSize = initialMaxFontSize;
      textRef.current.style.fontSize = `${fontSize}px`;

      while (textRef.current.offsetWidth > containerRef.current.offsetWidth) {
        fontSize -= 1;
        textRef.current.style.fontSize = `${fontSize}px`;
      }

      textRef.current.style.marginLeft = '-0.035em'; // compensate font white space before first char
    }
  };

  useEffect(() => {
    const onFontLoad = () => {
      window.addEventListener('resize', resizeFont);
      resizeFont();
    };

    document.fonts.ready.then(onFontLoad);

    return () => {
      window.removeEventListener('resize', resizeFont);
    };
  }, [containerRef, textRef, location]);

  return (
    <div className={cn(s.pageTitleWrap, className)} ref={containerRef}>
      <h1 className={s.pageTitle} ref={textRef}>
        {pageTitle}
      </h1>
      <p className={s.subTitle}>{subTitle}</p>
    </div>
  );
};
