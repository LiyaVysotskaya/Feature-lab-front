/* eslint-disable no-underscore-dangle */
import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../constants/externalLinks';
import { ROUTE_ERROR_500 } from '../constants/routesConstants';
import { NO_ACTIVE_ACCOUNT } from '../constants/errors';
import {
  clearAllStoredTokens,
  getStoredAccessToken,
  getStoredRefreshToken,
  setStoredAccessToken,
  setStoredRefreshToken,
} from '../utils/localStorageHelpers';

type CustomAxiosRequestConfig = AxiosRequestConfig & {
  _retry?: boolean; // Add custom _retry field
};

let retry = 3; // Number of retry attempts for refreshing tokens

const toastOption = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 3000,
};
const notifyAuthError = () => toast('Ошибка авторизации', toastOption);

// Create an instance of axios for API requests requiring a access token
export const privateAPI = axios.create({
  baseURL: API_BASE_URL,
});

// Intercept request to include access token in headers for specific requests
privateAPI.interceptors.request.use((config) => {
  const newConfig = config;
  const accessToken = getStoredAccessToken();

  if (accessToken) newConfig.headers.Authorization = `Bearer ${accessToken}`;

  return newConfig;
});

// function that try to fetch new access token and retry original request if it fails
async function retryRequest(originalRequest: CustomAxiosRequestConfig) {
  const updatedRequest = originalRequest;
  updatedRequest._retry = true; // Mark the request as retried
  retry -= 1;

  const refreshToken = getStoredRefreshToken();

  // Request to refresh access token using refresh token
  const refreshResponse = await privateAPI.post('auth/jwt/refresh/', {
    refresh: refreshToken,
  });
  const newAccessToken = refreshResponse.data.access;
  const newRefresh = refreshResponse.data.refresh;

  // Update access token and refresh token in local storage
  privateAPI.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
  setStoredAccessToken(newAccessToken);
  setStoredRefreshToken(newRefresh);

  return privateAPI(updatedRequest);
}

// Intercept response for handling token expiration and server errors
privateAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config; // Original request configuration
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          break;
        case 401:
          if (data.detail === NO_ACTIVE_ACCOUNT) {
            notifyAuthError(); // Notify user about authentication error
          } else if (error.response && !originalRequest._retry && getStoredRefreshToken()) {
            // if respose related to expired token and retry is not set
            if (retry > 0) {
              await retryRequest(originalRequest);
            } else {
              clearAllStoredTokens();
              retry = 3;
            }
          }
          break;
        case error.response.status >= 500:
          window.location.href = ROUTE_ERROR_500;
          break;
        default:
        // Handle other cases
      }
    }
    return Promise.reject(error);
  },
);
