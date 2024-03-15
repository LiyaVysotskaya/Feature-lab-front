import { useMutation, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  QK_COMPETENCE,
  QK_PROJECT,
  QK_PROJECTS,
  QK_REG,
  QK_USER_PROFILE,
} from '../constants/TanStackQueryKeys';
import { ROUTE_ERROR_404 } from '../constants/routesConstants';
import { getStoredAccessToken } from '../utils/localStorageHelpers';
import {
  getCompetenceBySlug,
  getProjectById,
  getUserAllProjects,
  getUserProfileData,
  postRegData,
} from './api';
import queryClient from '../query-client';

export const useRegQuery = (onRegSuccess: () => void) => {
  return useMutation({
    mutationKey: [QK_REG],
    mutationFn: postRegData,
    onSuccess: () => {
      onRegSuccess();
      queryClient.removeQueries({ queryKey: [QK_REG] });
    },
    retry: 0,
    gcTime: 0, // cashed data will be deleted immediately
  });
};

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: [QK_PROJECTS],
    queryFn: getUserAllProjects,
    staleTime: 10 * 60 * 1000, // data is definetly fresh fo next 10 min
    enabled: !!getStoredAccessToken(),
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
      if (!projectId) {
        return undefined;
      }

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

export const useCompetenceQuery = (competenceSlug: string | undefined) => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: [QK_COMPETENCE, competenceSlug],
    queryFn: async () => {
      if (!competenceSlug) {
        return undefined;
      }

      try {
        return await getCompetenceBySlug(competenceSlug);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 404) {
          navigate(ROUTE_ERROR_404, { replace: true });
        }
      }
      return undefined;
    },
    enabled: !!competenceSlug,
    staleTime: 10 * 60 * 1000, // data is definetly fresh fo next 10 min
  });
};
