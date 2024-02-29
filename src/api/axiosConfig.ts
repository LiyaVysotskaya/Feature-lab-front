/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  clearAllStoredTokens,
  getStoredAccessToken,
  getStoredRefreshToken,
  setStoredAccessToken,
  setStoredRefreshToken,
} from '../utils/localStorageHelpers';

let retry = 3; // Number of retry attempts for refreshing tokens

const toastOption = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 3000,
};
const notifyAuthError = () => toast('Ошибка авторизации', toastOption);

export const API_BASE_URL = 'http://109.68.212.118/';

// Create an instance of axios for API requests
export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Intercept request to include access token in headers
api.interceptors.request.use((config) => {
  const newConfig = config;
  const accessToken = getStoredAccessToken();
  if (accessToken) newConfig.headers.Authorization = `Bearer ${accessToken}`;
  return newConfig;
});

// Intercept response for handling token expiration and server errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config; // Original request configuration
    if (error.response) {
      if (error.response.status === 401) {
        if (error.response.data.detail === 'No active account found with the given credentials') {
          notifyAuthError(); // Notify user about authentication error
        } else if (error.response && !originalRequest._retry) {
          if (retry > 0) {
            originalRequest._retry = true; // Mark the request as retried
            retry -= 1;

            const refreshToken = getStoredRefreshToken();

            // Request to refresh access token using refresh token
            const refreshResponse = await api.post('auth/jwt/refresh/', {
              refresh: refreshToken,
            });
            const newAccessToken = refreshResponse.data.access;
            const newRefresh = refreshResponse.data.refresh;

            // Update access token and refresh token in local storage
            api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            setStoredAccessToken(newAccessToken);
            setStoredRefreshToken(newRefresh);

            return api(originalRequest);
          }
          if (retry <= 0) {
            // Clear all local storage and reset retry count if retries exhausted
            clearAllStoredTokens();
            retry = 3;
          }
        }
      } else if (error.response.status >= 500) {
        // notifyErrorServer();
      }
    }
    return Promise.reject(error);
  },
);
