import {
  TAccActivationData,
  TContactSubmitData,
  TGetAuthResponse,
  TPostRegDataResponse,
  TPwdResetData,
} from '../types/apiTypes';
import {
  TChangePwdFormData,
  TLoginFormData,
  TPwdRestoreFormData,
  TRegFormData,
} from '../types/formDataTypes';
import {
  TDocument,
  TProjectFullInfo,
  TProjectShortInfo,
  TUserProfile,
} from '../types/privateDataTypes';
import {
  TCompetenceFullInfo,
  TCompetenceShortInfo,
  TProductFullInfo,
  TProductShortInfo,
} from '../types/publicDataTypes';
import { privateAPI } from './privateApiConfig';
import { publicAPI } from './publicApiConfig';

export const postLoginData = async (loginData: TLoginFormData): Promise<TGetAuthResponse> => {
  const response = await publicAPI.post<TGetAuthResponse>('auth/jwt/create/', loginData);
  return response.data;
};

export const postRegData = async (regData: TRegFormData): Promise<TPostRegDataResponse> => {
  const response = await publicAPI.post<TPostRegDataResponse>('/auth/users/', regData);
  return response.data;
};

export const postAccActivationData = async (activationData: TAccActivationData): Promise<void> => {
  await publicAPI.post<void>('/auth/users/', activationData);
};

export const postContactFormData = async (contactSubmitData: TContactSubmitData): Promise<void> => {
  await publicAPI.post<void>('/api/v1/feedback/', contactSubmitData);
};

export const postChangedPassword = async (changePwdData: TChangePwdFormData): Promise<void> => {
  await privateAPI.post<void>('/auth/users/set_password/', changePwdData);
};

export const postPwdRestoreData = async (pwdRestoreData: TPwdRestoreFormData): Promise<void> => {
  await privateAPI.post<void>('/auth/users/reset_password/', pwdRestoreData);
};

export const postPwdResetData = async (pwdResetData: TPwdResetData): Promise<void> => {
  await privateAPI.post<void>('/auth/users/reset_password_confirm/', pwdResetData);
};

export const getUserProfileData = async (): Promise<TUserProfile> => {
  const response = await privateAPI.get<TUserProfile[]>('/api/v1/account/profile/');
  return response.data[0];
};

export const getUserAllProjects = async (): Promise<TProjectShortInfo[]> => {
  const response = await privateAPI.get<TProjectShortInfo[]>('/api/v1/account/my-projects/');
  return response.data;
};

export const getUserAllDocs = async (): Promise<TDocument[]> => {
  const response = await privateAPI.get<TDocument[]>('/api/v1/account/my-documents/');
  return response.data;
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
  const response = await publicAPI.get<TCompetenceShortInfo[]>('/api/v1/competence/');
  return response.data;
};

export const getCompetenceBySlug = async (slug: string): Promise<TCompetenceFullInfo> => {
  const response = await publicAPI.get<TCompetenceFullInfo>(`/api/v1/competence/${slug}/`);
  return response.data;
};
