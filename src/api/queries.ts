import { useQuery } from '@tanstack/react-query';
import { QK_PROJECT, QK_PROJECTS, QK_USER_PROFILE } from '../constants/TanStackQueryKeys';
import { getStoredAccessToken } from '../utils/localStorageHelpers';
import { getProjectById, getUserAllProjects, getUserProfileData } from './api';

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: [QK_PROJECTS],
    queryFn: getUserAllProjects,
    staleTime: 10 * 60 * 1000, // data is definetly fresh fo next 10 min
  });
};

export const useUserProfileQuery = () => {
  return useQuery({
    queryKey: [QK_USER_PROFILE],
    queryFn: getUserProfileData,
    enabled: !!getStoredAccessToken(),
  });
};

export const useProjectQuery = (projectId: string | undefined) => {
  return useQuery({
    queryKey: [QK_PROJECT, projectId],
    queryFn: () => getProjectById(projectId),
    enabled: !!projectId,
    staleTime: 10 * 60 * 1000, // data is definetly fresh fo next 10 min
  });
};
