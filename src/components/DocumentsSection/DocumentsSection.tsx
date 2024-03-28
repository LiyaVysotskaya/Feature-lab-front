import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TDocument } from '../../types/profileData';
import { DocumentsCategory } from './DocumentsCategory/DocumentsCategory';
import s from './DocumentsSection.module.scss';

type IProps = {
  className?: string;
  title: string;
  docs: TDocument[];
};

export const DocumentsSection: FC<IProps> = ({ className = '', title, docs }) => {
  if (docs.length === 0) {
    return null;
  }

  // Group documents by their doctype
  const docCategories = docs.reduce(
    (acc, doc) => {
      const categoryName = doc.doctype.name;
      return {
        ...acc,
        [categoryName]: [...(acc[categoryName] || []), doc],
      };
    },
    {} as { [key: string]: TDocument[] },
  );

  // Sort category names alphabetically
  const sortedCategoryNames = Object.keys(docCategories).toSorted();

  return (
    <section className={cl(s.section, className)}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.categories}>
        {sortedCategoryNames.map((categoryName) => (
          <DocumentsCategory
            key={uuidv4()}
            title={categoryName}
            docs={docCategories[categoryName]}
          />
        ))}
      </ul>
    </section>
  );
};
