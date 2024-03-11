import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { QK_PROJECT, QK_PROJECTS, QK_USER_PROFILE } from '../constants/TanStackQueryKeys';
import { ROUTE_ERROR_404 } from '../constants/constants';
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
  const navigate = useNavigate();

  return useQuery({
    queryKey: [QK_PROJECT, projectId],
    queryFn: async () => {
      try {
        return await getProjectById(projectId);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 404) {
          navigate(ROUTE_ERROR_404, { replace: true });
        }
      }
      return undefined;
    },
    enabled: !!projectId,
    staleTime: 10 * 60 * 1000, // data is definetly fresh fo next 10 min
  });
};
