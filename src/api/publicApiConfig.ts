/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { EMAIL_ALREADY_EXISTS, NO_ACTIVE_ACCOUNT } from '../constants/errors';
import { API_BASE_URL } from '../constants/externalLinks';
import { ROUTE_ERROR_500 } from '../constants/routesConstants';
import {
  notifySignInError,
  notifyEmailAlreadyExists,
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
          if (data.email[0] === EMAIL_ALREADY_EXISTS) {
            notifyEmailAlreadyExists();
          }
          break;
        case 401:
          if (data.detail === NO_ACTIVE_ACCOUNT) {
            notifySignInError();
          }
          break;
        case 500:
          window.location.href = ROUTE_ERROR_500;
          break;
        default:
          notifySomethingWrong();
      }
    }
    return Promise.reject(error);
  },
);
