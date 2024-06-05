/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { API_BASE_URL } from '../constants/externalLinks';
import { checkDataFieldsForErrors } from '../utils/errorHandlers';
import { notifySomethingWrong } from '../utils/toastHelpers';

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
          checkDataFieldsForErrors(data);
          break;

        case 401:
          checkDataFieldsForErrors(data);
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
