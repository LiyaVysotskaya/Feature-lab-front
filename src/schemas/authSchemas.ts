import * as yup from 'yup';
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_PASSWORD,
} from '../constants/formConstants';

const hasUpperCase = /[A-Z]/;
const hasLowerCase = /[a-z]/;
const hasNumber = /\d/;
const hasNoSpaces = /^\S*$/;
const hasSpecialChar = /[!#$%&‘*+—/=^_`{|}~.]/;
const isLatinOnly = /^[A-Za-z0-9!#$%&‘*+—/=^_`{|}~.]*$/;
const isEmailStartWithDot = /^[^.]/;

const passwordSchema = yup
  .string()
  .required('Обязательное поле')
  .matches(hasNoSpaces, 'Пробелы не допускаются')
  .min(MIN_LENGTH_PASSWORD, `Минимальная длина ${MIN_LENGTH_PASSWORD} символов`)
  .max(MAX_LENGTH_PASSWORD, `Максимальная длина ${MAX_LENGTH_PASSWORD} символов`)
  .matches(hasLowerCase, 'Пароль должен содержать хотя бы одну строчную букву')
  .matches(hasUpperCase, 'Пароль должен содержать хотя бы одну заглавную букву')
  .matches(isLatinOnly, 'Пароль должен содержать только латинские символы')
  .matches(hasNumber, 'Пароль должен содержать хотя бы одну цифру')
  .matches(hasSpecialChar, 'Пароль должен содержать хотя бы один специальный символ');

const emailSchema = yup
  .string()
  .required('Обязательное поле')
  .email('Некорректный email')
  .matches(hasNoSpaces, 'Пробелы не допускаются')
  .matches(isEmailStartWithDot, 'Некорректный email')
  .min(MIN_LENGTH_EMAIL, `Минимальная длина ${MIN_LENGTH_EMAIL} символов`)
  .max(MAX_LENGTH_EMAIL, `Максимальная длина ${MAX_LENGTH_EMAIL} символов`);

export const loginSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export const regSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  repeatPassword: passwordSchema.test('same-password', 'Пароли должны совпадать', function (value) {
    return value === this.parent.password;
  }),
});

export const pwdChangeSchema = yup.object().shape({
  current_password: passwordSchema,
  new_password: passwordSchema.test(
    'not-same-as-current',
    'Новый пароль не должен совпадать с текущим паролем',
    function (value) {
      return value !== this.parent.current_password;
    },
  ),
});

export const formWithEmailSchema = yup.object().shape({
  email: emailSchema,
});
