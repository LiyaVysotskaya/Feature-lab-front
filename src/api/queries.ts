import { useMutation, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  QK_COMPETENCIES,
  QK_PRODUCTS,
  QK_PROJECTS,
  QK_REG,
  QK_USER_PROFILE,
} from '../constants/TanStackQueryKeys';
import { ROUTE_ERROR_404 } from '../constants/routesConstants';
import queryClient from '../query-client';
import { getStoredAccessToken } from '../utils/localStorageHelpers';
import {
  getAllCompetencies,
  getAllProducts,
  getCompetenceBySlug,
  getProductBySlug,
  getProjectById,
  getUserAllProjects,
  getUserProfileData,
  postRegData,
} from './api';

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

export const useUserProfileQuery = () => {
  return useQuery({
    queryKey: [QK_USER_PROFILE],
    queryFn: getUserProfileData,
    enabled: !!getStoredAccessToken(),
  });
};

export const useCompetenciesQuery = () => {
  return useQuery({
    queryKey: [QK_COMPETENCIES],
    queryFn: getAllCompetencies,
    staleTime: 60 * 60 * 1000, // data is definetly fresh fo next 60 min
  });
};

export const useProductsQuery = () => {
  return useQuery({
    queryKey: [QK_PRODUCTS],
    queryFn: getAllProducts,
    staleTime: 60 * 60 * 1000, // data is definetly fresh fo next 60 min
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

export const useCompetenceQuery = (competenceSlug: string | undefined) => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: [QK_COMPETENCIES, competenceSlug],
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
    staleTime: 60 * 60 * 1000, // data is definetly fresh fo next 60 min
  });
};

export const useProductQuery = (productSlug: string | undefined) => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: [QK_PRODUCTS, productSlug],
    queryFn: async () => {
      if (!productSlug) {
        return undefined;
      }

      try {
        return await getProductBySlug(productSlug);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 404) {
          navigate(ROUTE_ERROR_404, { replace: true });
        }
      }
      return undefined;
    },
    enabled: !!productSlug,
    staleTime: 60 * 60 * 1000, // data is definetly fresh fo next 60 min
  });
};

export const useProjectQuery = (projectId: string | undefined) => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: [QK_PROJECTS, projectId],
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
    staleTime: 20 * 60 * 1000, // data is definetly fresh fo next 20 min
  });
};
