/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../constants/apiConstants';
import { ROUTE_ERROR_500 } from '../constants/routesConstants';
import { EMAIL_ALREADY_EXISTS, NO_ACTIVE_ACCOUNT } from '../constants/errors';

const toastOption = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 3000,
};
const notifyAuthError = () => toast('Ошибка авторизации', toastOption);
const notifyEmailAlreadyExists = () =>
  toast('Пользователь с таким email уже существует', toastOption);

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
            notifyAuthError(); // Notify user about authentication error
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
