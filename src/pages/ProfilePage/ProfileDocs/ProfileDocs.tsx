import cl from 'classnames';
import { FC } from 'react';
import { docs } from '../../../_mockData/docsMockData';
import { DocumentsSection } from '../../../components/DocumentsSection/DocumentsSection';
import s from './ProfileDocs.module.scss';

type IProps = {
  className?: string;
};

export const ProfileDocs: FC<IProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.docs, className)}>
      <DocumentsSection title="Документы" docs={docs} />
    </div>
  );
};
