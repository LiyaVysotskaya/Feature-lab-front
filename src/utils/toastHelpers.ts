import { InfoToastContainer } from '../components/_ui/InfoToastContainer/InfoToastContainer';

export const notifySignInError = () => InfoToastContainer('Неправильный логин или пароль');
export const notifyEmailAlreadyExists = () =>
  InfoToastContainer('Пользователь с таким email уже существует');
export const notifySomethingWrong = () => InfoToastContainer('Что-то пошло не так');
export const notifyAuthError = () => InfoToastContainer('Ошибка авторизации');
export const notifyWrongOldPassword = () => InfoToastContainer('Неправильный текущий пароль');
