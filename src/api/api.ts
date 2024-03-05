import {
  GetAuthResponse,
  GetUserProfileResponse,
  LoginFormData,
  PostRegDataResponse,
  RegFormData,
  UserProfile,
} from '../types/data';
import { privateAPI } from './privateApiConfig';
import { publicAPI } from './publicApiConfig';

export const getAuth = async (loginData: LoginFormData): Promise<GetAuthResponse> => {
  const response = await publicAPI.post<GetAuthResponse>('auth/jwt/create/', loginData);
  return response.data;
};

export const postRegData = async (regData: RegFormData): Promise<PostRegDataResponse> => {
  const response = await publicAPI.post<PostRegDataResponse>('/auth/users/', regData);
  return response.data;
};

export const getUserProfileData = async (): Promise<UserProfile> => {
  const response = await privateAPI.get<GetUserProfileResponse>('/api/v1/account/profile/');
  return response.data.results[0];
};
