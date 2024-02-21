import cl from 'classnames';
import { FC } from 'react';
import s from './PageTitle.module.scss';

export interface IPageTitleProps {
  pageTitle: string;
  subTitle: string;
  className?: string;
}

export const PageTitle: FC<IPageTitleProps> = ({ className = '', pageTitle, subTitle }) => {
  return (
    <div className={cl(s.pageTitleWrap, className)}>
      <h1 className={s.pageTitle}>{pageTitle}</h1>
      <p className={s.subTitle}>{subTitle}</p>
    </div>
  );
};
