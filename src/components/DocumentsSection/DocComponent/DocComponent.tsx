import cl from 'classnames';
import { FC } from 'react';
import { TDocument } from '../../../types/data';
import { convertDateToShortFormat } from '../../../utils/dateConvertHelpers';
import s from './DocComponent.module.scss';

type IProps = {
  className?: string;
  doc: TDocument;
};

export const DocComponent: FC<IProps> = ({ className = '', doc }) => {
  return (
    <li className={cl(s.doc, className)}>
      <div>
        <a className={s.docName} href={doc.url}>
          {doc.name}
        </a>
      </div>

      <div className={s.docDescription}>{doc.description}</div>
      <div className={s.docDate}>{convertDateToShortFormat(doc.pub_date)}</div>
    </li>
  );
};
