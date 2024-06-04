/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { COMMON_PASSWORD, EMAIL_ALREADY_EXISTS, NO_ACTIVE_ACCOUNT } from '../constants/errors';
import { API_BASE_URL } from '../constants/externalLinks';
import {
  notifyEmailAlreadyExists,
  notifyPasswordIsTooCommon,
  notifySignInError,
  notifySomethingWrong,
} from '../utils/toastHelpers';

// Create an instance of axios for API requests that dont need access token
export const publicAPI = axios.create({
  baseURL: API_BASE_URL,
});

// Intercept response for handling token expiration and server errors
publicAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          if (data.email?.includes(EMAIL_ALREADY_EXISTS)) {
            notifyEmailAlreadyExists();
          } else if (data.password?.includes(COMMON_PASSWORD)) {
            notifyPasswordIsTooCommon();
          } else if (data.new_password?.includes(COMMON_PASSWORD)) {
            notifyPasswordIsTooCommon();
          } else {
            notifySomethingWrong();
          }
          break;

        case 401:
          if (data.detail === NO_ACTIVE_ACCOUNT) {
            notifySignInError();
          }
          break;

        case 500:
          break;

        default:
          notifySomethingWrong();
      }
    }
    return Promise.reject(error);
  },
);
