import { GetAuthResponse, GetUserProfileResponse, LoginFormData, UserProfile } from '../types/data';
import { api } from './axiosConfig';

export const getAuth = async (loginData: LoginFormData): Promise<GetAuthResponse> => {
  const response = await api.post<GetAuthResponse>('auth/jwt/create/', loginData);
  return response.data;
};

export const getUserProfileData = async (): Promise<UserProfile> => {
  const response = await api.get<GetUserProfileResponse>('/api/v1/account/profile/');
  return response.data.results[0];
};
