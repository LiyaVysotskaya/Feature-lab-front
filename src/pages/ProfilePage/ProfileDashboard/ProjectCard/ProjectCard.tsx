import cl from 'classnames';
import { format, parseISO } from 'date-fns';
import { FC } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { Text } from '../../../../components/ui/Text/Text';
import { TProjectShortInfo } from '../../../../types/data';
import { ProgressCircle } from '../ProgressCircle/ProgressCircle';
import s from './ProjectCard.module.scss';
import { ROUTE_PROFILE_PROJECTS } from '../../../../constants/constants';

interface ProjectCardProps {
  className?: string;
  project: TProjectShortInfo;
}

export const ProjectCard: FC<ProjectCardProps> = ({ className = '', project }) => {
  const navigate = useNavigate();
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

  const handleOnCardClick = () => {
    if (window.innerWidth > 768) {
      navigate(`${ROUTE_PROFILE_PROJECTS}/${project.id}`);
    }
  };

  const handleOnCardTitleTap = () => {
    if (window.innerWidth < 768) {
      navigate(`${ROUTE_PROFILE_PROJECTS}/${project.id}`);
    }
  };

  return (
    <div
      className={cl(s.card, className)}
      onClick={() => {
        handleOnCardClick();
      }}>
      <p onTouchEnd={() => handleOnCardTitleTap()} className={cl(s.title)}>
        {project.name}
      </p>
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
