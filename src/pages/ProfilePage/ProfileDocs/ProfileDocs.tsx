import { FC } from 'react';
import cl from 'classnames';
import s from './ProfileDocs.module.scss';

interface IProfileDocsProps {
  className?: string;
}

export const ProfileDocs: FC<IProfileDocsProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.docs, className)}>
      <div />
    </div>
  );
};
