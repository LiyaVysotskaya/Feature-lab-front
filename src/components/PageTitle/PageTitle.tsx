import cl from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import s from './PageTitle.module.scss';

export interface IPageTitleProps {
  pageTitle: string;
  subTitle: string;
  className?: string;
}

export const PageTitle: FC<IPageTitleProps> = ({ className = '', pageTitle, subTitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const location = useLocation();

  useEffect(() => {
    const resizeFont = () => {
      if (containerRef.current && textRef.current) {
        let fontSize = 410;
        textRef.current.style.fontSize = `${fontSize}px`;

        while (textRef.current.offsetWidth > containerRef.current.offsetWidth) {
          fontSize -= 1;
          textRef.current.style.fontSize = `${fontSize}px`;
        }
      }
    };

    window.addEventListener('resize', resizeFont);
    resizeFont();

    return () => {
      window.removeEventListener('resize', resizeFont);
    };
  }, [containerRef, textRef, location]);

  return (
    <div className={cl(s.pageTitleWrap, className)} ref={containerRef}>
      <h1 className={s.pageTitle} ref={textRef}>
        {pageTitle}
      </h1>
      <p className={s.subTitle}>{subTitle}</p>
    </div>
  );
};
