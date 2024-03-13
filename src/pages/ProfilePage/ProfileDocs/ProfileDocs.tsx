import { FC } from 'react';
import cl from 'classnames';
import s from './ProfileDocs.module.scss';
import { DocumentsSection } from '../../../components/DocumentsSection/DocumentsSection';
import { docs } from '../../../_mockData/docsMockData';

interface IProfileDocsProps {
  className?: string;
}

export const ProfileDocs: FC<IProfileDocsProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.docs, className)}>
      <DocumentsSection title="Документы" docs={docs} />
    </div>
  );
};
