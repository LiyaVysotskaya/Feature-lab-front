import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './DocumentsCategory.module.scss';
import { DocComponent } from '../DocComponent/DocComponent';
import { TDocument } from '../../../types/data';

interface IDocumentsCategoryProps {
  className?: string;
  title: string;
  docs: TDocument[];
}

export const DocumentsCategory: FC<IDocumentsCategoryProps> = ({ className = '', title, docs }) => {
  return (
    <li className={cl(s.category, className)} key={uuidv4()}>
      <h3 className={s.categoryTitle}>{title}</h3>
      <ul className={s.docsList}>
        {docs.map((doc) => (
          <DocComponent key={uuidv4()} doc={doc} />
        ))}
      </ul>
    </li>
  );
};
