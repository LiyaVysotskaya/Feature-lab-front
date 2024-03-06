import cl from 'classnames';
import { format, parseISO } from 'date-fns';
import { FC } from 'react';
import { Text } from '../../../../components/ui/Text/Text';
import { TProjectShortInfo } from '../../../../types/data';
import { ProgressCircle } from '../ProgressCircle/ProgressCircle';
import s from './ProjectCard.module.scss';

interface ProjectCardProps {
  className?: string;
  project: TProjectShortInfo;
}

export const ProjectCard: FC<ProjectCardProps> = ({ className = '', project }) => {
  const { stages } = project;

  const completedStages = stages.filter((stage) => stage.stage_status === 'completed');
  const сompletedStagesCount = completedStages.length;
  const lastCompletedStage = completedStages[stages.length - 1];

  const stageInProgressCount = stages.filter(
    (stage) => stage.stage_status === 'in_progress',
  ).length;

  const stageInProgress = stages.find((stage) => stage.stage_status === 'in_progress');
  const stageInProgressIndex =
    stages.findIndex((stage) => stage.stage_status === 'in_progress') + 1;

  const convertAndFormatDate = (dateString: string) => {
    // Parse the ISO 8601 formatted date string to a Date object
    const date = parseISO(dateString);
    // Format the date using date-fns
    return format(date, 'dd.MM.yyyy');
  };

  return (
    <div className={cl(s.card, className)}>
      <Text view="germano-5" className={cl(s.title)}>
        {project.name}
      </Text>
      <Text view="gost-4" className={cl(s.label)}>
        Менеджер:
      </Text>
      <Text view="gost-2" className={cl(s.value)}>
        {`${project.manager.last_name} ${project.manager.first_name}`}
      </Text>
      {сompletedStagesCount < stages.length && (
        <>
          {stageInProgress && (
            <Text view="gost-4" className={cl(s.label)}>
              Этап {stageInProgressIndex}:
            </Text>
          )}
          <Text view="gost-2" className={cl(s.value, { [s.valuePlaceholder]: !stageInProgress })}>
            {stageInProgress
              ? stageInProgress.name
              : `ожидание начала этапа ${сompletedStagesCount + 1}`}
          </Text>
        </>
      )}
      {stageInProgress && сompletedStagesCount < stages.length && (
        <Text view="gost-4" className={cl(s.label)}>
          Срок выполнения:
        </Text>
      )}
      {сompletedStagesCount === stages.length && (
        <Text view="gost-4" className={cl(s.label)}>
          Закончен:
        </Text>
      )}
      <Text view="gost-2" className={cl(s.value)}>
        {(stageInProgress && convertAndFormatDate(stageInProgress.end_date)) ||
          (lastCompletedStage && convertAndFormatDate(lastCompletedStage.end_date))}
      </Text>
      <ProgressCircle
        stagesInProgress={stageInProgressCount}
        stagesCompleted={сompletedStagesCount}
        max={stages.length}
        className={s.progressBar}
      />
    </div>
  );
};
