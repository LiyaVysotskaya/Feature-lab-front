import cl from 'classnames';
import { FC } from 'react';
import { useAllUserDocsQuery } from '../../../api/queries';
import { DocumentsSection } from '../../../components/DocumentsSection/DocumentsSection';
import s from './ProfileDocs.module.scss';

type IProps = {
  className?: string;
};

export const ProfileDocs: FC<IProps> = ({ className = '' }) => {
  const { data: docs, isLoading } = useAllUserDocsQuery();

  if (isLoading || !docs) {
    return null;
  }

  return (
    <div className={cl(s.docs, className)}>
      <DocumentsSection title="Документы" docs={docs} />
    </div>
  );
};
