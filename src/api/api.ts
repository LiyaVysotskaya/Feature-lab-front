import {
  GetAuthResponse,
  GetUserProfileResponse,
  GetUserProjectsListResponse,
  LoginFormData,
  PostRegDataResponse,
  RegFormData,
  TProjectFullInfo,
  TProjectShortInfo,
  TUserProfile,
} from '../types/data';
import { privateAPI } from './privateApiConfig';
import { publicAPI } from './publicApiConfig';

export const postLoginData = async (loginData: LoginFormData): Promise<GetAuthResponse> => {
  const response = await publicAPI.post<GetAuthResponse>('auth/jwt/create/', loginData);
  return response.data;
};

export const postRegData = async (regData: RegFormData): Promise<PostRegDataResponse> => {
  const response = await publicAPI.post<PostRegDataResponse>('/auth/users/', regData);
  return response.data;
};

export const getUserProfileData = async (): Promise<TUserProfile> => {
  const response = await privateAPI.get<GetUserProfileResponse>('/api/v1/account/profile/');
  return response.data.results[0];
};

export const getUserAllProjects = async (): Promise<TProjectShortInfo[]> => {
  const response = await privateAPI.get<GetUserProjectsListResponse>(
    '/api/v1/account/my-projects/',
  );
  return response.data.results;
};

export const getProjectById = async (projectId: string | undefined): Promise<TProjectFullInfo> => {
  if (!projectId) throw new Error('Project ID is not defined');

  const response = await privateAPI.get<TProjectFullInfo>(
    `/api/v1/account/my-projects/${projectId}/`,
  );
  return response.data;
};
