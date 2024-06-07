import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TDocument } from '../../../../types/privateDataTypes';
import { convertDateToShortFormat } from '../../../../utils/dateConvertHelpers';
import s from './DocComponent.module.scss';

type IProps = {
  className?: string;
  doc: TDocument;
};

export const DocComponent: FC<IProps> = ({ className = '', doc }) => {
  return (
    <li className={cn(s.doc, className)}>
      <div>
        <Link className={s.docName} to={doc.url} target="_blank">
          {doc.name}
        </Link>
      </div>

      <div className={s.docDescription}>{doc.description}</div>
      <div className={s.docDate}>{convertDateToShortFormat(doc.pub_date)}</div>
    </li>
  );
};
