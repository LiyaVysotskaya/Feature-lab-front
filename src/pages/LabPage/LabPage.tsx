import { FC } from 'react';
import { LabSection } from '../../components/LabSection/LabSection';
import { LabBottomGridSection } from './LabBottomGridSection/LabBottomGridSection';
import { LabTopGridSection } from './LabTopGridSection/LabTopGridSection';
import s from './LabPage.module.scss';

export const LabPage: FC = () => {
  return (
    <>
      <h1 className={s.pageTitle}>Ed-Tech</h1>
      <p className={s.subTitle}>Образование</p>

      <LabTopGridSection className={s.pageSection} />

      <LabSection className={s.pageSection} />

      <LabBottomGridSection className={s.pageSection} />
    </>
  );
};
