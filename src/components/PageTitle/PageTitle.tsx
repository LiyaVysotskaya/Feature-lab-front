import cl from 'classnames';
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

      let fontSize = 410;
      textRef.current.style.fontSize = `${fontSize}px`;

      while (textRef.current.offsetWidth > containerRef.current.offsetWidth) {
        fontSize -= 1;
        textRef.current.style.fontSize = `${fontSize}px`;
      }

      textRef.current.style.marginLeft = '-0.035em'; // compensate font white space before first char
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeFont);

    resizeFont();

    return () => {
      window.removeEventListener('resize', resizeFont);
    };
  }, [containerRef, textRef, location]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resizeFont();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={cl(s.pageTitleWrap, className)} ref={containerRef}>
      <h1 className={s.pageTitle} ref={textRef}>
        {pageTitle}
      </h1>
      <p className={s.subTitle}>{subTitle}</p>
    </div>
  );
};
