import cn from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PROFILE_PROJECTS } from '../../constants/routesConstants';
import { TProjectShortInfo } from '../../types/privateData';
import { convertDateToShortFormat } from '../../utils/dateConvertHelpers';
import { Text } from '../ui/Text/Text';
import { ProgressCircle } from './ProgressCircle/ProgressCircle';
import s from './ProjectCard.module.scss';

type IProps = {
  className?: string;
  project: TProjectShortInfo;
};

export const ProjectCard: FC<IProps> = ({ className = '', project }) => {
  const navigate = useNavigate();
  const { stages } = project;

  const sortedStages = stages.sort((a, b) => a.stage_num - b.stage_num);

  const firstNewStageNum = sortedStages.find((stage) => stage.stage_status === 'new')?.stage_num;

  const completedStages = sortedStages.filter((stage) => stage.stage_status === 'completed');
  const сompletedStagesCount = completedStages.length;
  const lastCompletedStage = completedStages[sortedStages.length - 1];

  const stageInProgressCount = sortedStages.filter(
    (stage) => stage.stage_status === 'in_progress',
  ).length;

  const stageInProgress = sortedStages.find((stage) => stage.stage_status === 'in_progress');
  const stageInProgressNum = stageInProgress?.stage_num;

  const handleOnCardClick = () => {
    if (window.innerWidth > 768) {
      navigate(`${ROUTE_PROFILE_PROJECTS}/${project.id}`);
    }
  };

  const handleOnCardTitleTap = () => {
    if (window.innerWidth <= 768) {
      navigate(`${ROUTE_PROFILE_PROJECTS}/${project.id}`);
    }
  };

  return (
    <div
      className={cn(s.card, className)}
      onClick={() => {
        handleOnCardClick();
      }}>
      <p onTouchEnd={() => handleOnCardTitleTap()} className={cn(s.title)}>
        {project.name}
      </p>
      <Text view="gost-4" className={cn(s.label)}>
        Менеджер:
      </Text>
      <Text view="gost-2" className={cn(s.value)}>
        {`${project.manager.last_name} ${project.manager.first_name}`}
      </Text>
      {сompletedStagesCount < sortedStages.length && (
        <>
          {stageInProgress && (
            <Text view="gost-4" className={cn(s.label)}>
              Этап {stageInProgressNum}:
            </Text>
          )}
          <Text view="gost-2" className={cn(s.value, { [s.valuePlaceholder]: !stageInProgress })}>
            {stageInProgress ? stageInProgress.name : `ожидание начала этапа ${firstNewStageNum}`}
          </Text>
        </>
      )}
      {stageInProgress && сompletedStagesCount < sortedStages.length && (
        <Text view="gost-4" className={cn(s.label)}>
          Срок выполнения:
        </Text>
      )}
      {сompletedStagesCount === sortedStages.length && (
        <Text view="gost-4" className={cn(s.label)}>
          Закончен:
        </Text>
      )}
      <Text view="gost-2" className={cn(s.value)}>
        {(stageInProgress && convertDateToShortFormat(stageInProgress.end_date)) ||
          (lastCompletedStage && convertDateToShortFormat(lastCompletedStage.end_date))}
      </Text>
      <ProgressCircle
        stagesInProgress={stageInProgressCount}
        stagesCompleted={сompletedStagesCount}
        max={sortedStages.length}
        className={s.progressBar}
      />
    </div>
  );
};
