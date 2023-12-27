import { FC } from 'react';
import s from './PageTitle.module.scss';

export interface IPageTitleProps {
  pageTitle: string;
  subTitle: string;
}

export const PageTitle: FC<IPageTitleProps> = ({ pageTitle, subTitle }) => {
  return (
    <>
      <h1 className={s.pageTitle}>{pageTitle}</h1>
      <div className={s.subTitleWrapper}>
        <p className={s.subTitle}>{subTitle}</p>
      </div>
    </>
  );
};
