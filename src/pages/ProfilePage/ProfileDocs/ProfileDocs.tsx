import cl from 'classnames';
import { FC } from 'react';
import { useAllUserDocsQuery } from '../../../api/queries';
import { DocumentsSection } from '../../../components/DocumentsSection/DocumentsSection';
import { Preloader } from '../../../components/Preloader/Preloader';
import s from './ProfileDocs.module.scss';

type IProps = {
  className?: string;
};

export const ProfileDocs: FC<IProps> = ({ className = '' }) => {
  const { data: docs, isLoading: isLoadingDocs } = useAllUserDocsQuery();

  if (!docs || isLoadingDocs) {
    return (
      <div className={s.loaderWrap}>
        <Preloader />
      </div>
    );
  }

  return (
    <div className={cl(s.docs, className)}>
      <DocumentsSection title="Документы" docs={docs} />
    </div>
  );
};
