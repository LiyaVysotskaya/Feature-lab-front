import {
  TChangedPwdData,
  GetAuthResponse,
  GetUserProfileResponse,
  GetUserProjectsListResponse,
  LoginFormData,
  PostChangedPasswordResponse,
  PostRegDataResponse,
  RegFormData,
  TCompetenceFullInfo,
  TCompetenceShortInfo,
  TGetAllCompetenciesResponse,
  TProductFullInfo,
  TProductShortInfo,
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

export const postChangedPassword = async (
  changedPwdData: TChangedPwdData,
): Promise<PostChangedPasswordResponse> => {
  const response = await privateAPI.post<PostChangedPasswordResponse>(
    '/auth/users/set_password/',
    changedPwdData,
  );
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

export const getProjectById = async (projectId: string): Promise<TProjectFullInfo> => {
  const response = await privateAPI.get<TProjectFullInfo>(
    `/api/v1/account/my-projects/${projectId}/`,
  );
  return response.data;
};

export const getAllProducts = async (): Promise<TProductShortInfo[]> => {
  const response = await publicAPI.get<TProductShortInfo[]>('/api/v1/product/');
  return response.data;
};

export const getProductBySlug = async (slug: string): Promise<TProductFullInfo> => {
  const response = await publicAPI.get<TProductFullInfo>(`/api/v1/product/${slug}/`);
  return response.data;
};

export const getAllCompetencies = async (): Promise<TCompetenceShortInfo[]> => {
  const response = await publicAPI.get<TGetAllCompetenciesResponse>('/api/v1/competence/');
  return response.data.results;
};

export const getCompetenceBySlug = async (slug: string): Promise<TCompetenceFullInfo> => {
  const response = await publicAPI.get<TCompetenceFullInfo>(`/api/v1/competence/${slug}/`);
  return response.data;
};
