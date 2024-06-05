import { InfoToastContainer } from '../components/_ui/InfoToastContainer/InfoToastContainer';

export const notifySignInError = () => InfoToastContainer('Неправильный логин или пароль');
export const notifyEmailAlreadyExists = () =>
  InfoToastContainer('Пользователь с таким email уже существует');
export const notifySomethingWrong = () => InfoToastContainer('Что-то пошло не так');
export const notifyAuthError = () => InfoToastContainer('Ошибка авторизации');
export const notifyWrongCurrentPassword = () => InfoToastContainer('Неправильный текущий пароль');
export const notifyPasswordIsTooCommon = () =>
  InfoToastContainer('Пароль слишком простой. Выберите другой');
export const notifyPasswordSimilarToEmail = () =>
  InfoToastContainer('Пароль слишком похож на email');
