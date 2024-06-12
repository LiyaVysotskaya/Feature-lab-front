import * as yup from 'yup';
import {
  EMAIL_HAS_AT_LEAST_ONE_DOT_AFTER_AT,
  EMAIL_START_WITH_DOT,
  HAS_LOWER_CASE,
  HAS_NO_SPACES,
  HAS_NUMBER,
  HAS_SPECIAL_CHAR,
  HAS_UPPER_CASE,
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_NAME,
  MAX_LENGTH_PASSWORD,
  MAX_LENGTH_PROJECT,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_NAME,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_PROJECT,
  NAME_REG_EX,
  PHONE_REG_EX,
  PWD_HAS_ALLOWED_CHARS_ONLY,
} from '../constants/validationConstants';

const passwordSchema = yup
  .string()
  .required('Обязательное поле')
  .matches(HAS_NO_SPACES, 'Пробелы не допускаются')
  .min(MIN_LENGTH_PASSWORD, `Минимальная длина ${MIN_LENGTH_PASSWORD} символов`)
  .max(MAX_LENGTH_PASSWORD, `Максимальная длина ${MAX_LENGTH_PASSWORD} символов`)
  .matches(HAS_LOWER_CASE, 'Пароль должен содержать хотя бы одну строчную букву')
  .matches(HAS_UPPER_CASE, 'Пароль должен содержать хотя бы одну заглавную букву')
  .matches(HAS_NUMBER, 'Пароль должен содержать хотя бы одну цифру')
  .matches(HAS_SPECIAL_CHAR, 'Пароль должен содержать хотя бы один специальный символ')
  .matches(PWD_HAS_ALLOWED_CHARS_ONLY, 'Пароль должен содержать только допустимые символы');

export const emailSchema = yup
  .string()
  .required('Обязательное поле')
  .email('Некорректный email')
  .matches(HAS_NO_SPACES, 'Пробелы не допускаются')
  .matches(EMAIL_START_WITH_DOT, 'Некорректный email')
  .matches(EMAIL_HAS_AT_LEAST_ONE_DOT_AFTER_AT, 'Некорректный email')
  .min(MIN_LENGTH_EMAIL, `Минимальная длина ${MIN_LENGTH_EMAIL} символов`)
  .max(MAX_LENGTH_EMAIL, `Максимальная длина ${MAX_LENGTH_EMAIL} символов`);

const phoneSchema = yup
  .string()
  .required('Обязательное поле')
  .matches(PHONE_REG_EX, 'Введите корректный номер телефона');

export const loginSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema.test(
    'not-same-as-email',
    'Пароль не должен совпадать с email',
    function (value) {
      return value !== this.parent.email;
    },
  ),
});

export const regSchema = yup.object().shape({
  email: emailSchema.test(
    'not-similar-to-email',
    'Пароль слишком похож на email',
    function (value) {
      const emailPrefix = value.split('@')[0];
      return emailPrefix !== this.parent.password;
    },
  ),
  password: passwordSchema
    .test('not-same-as-email', 'Пароль не должен совпадать с email', function (value) {
      return value !== this.parent.email;
    })
    .test('not-similar-to-email', 'Пароль слишком похож на email', function (value) {
      const emailPrefix = this.parent.email.split('@')[0];
      return value !== emailPrefix;
    }),
  re_password: passwordSchema.test('same-password', 'Пароли должны совпадать', function (value) {
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
  re_new_password: passwordSchema.test(
    'same-password',
    'Новые пароли должны совпадать',
    function (value) {
      return value === this.parent.new_password;
    },
  ),
});

export const formWithEmailSchema = yup.object().shape({
  email: emailSchema,
});

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Обязательное поле')
    .min(MIN_LENGTH_NAME, `Минимальная длина ${MIN_LENGTH_NAME} символов`)
    .max(MAX_LENGTH_NAME, `Максимальная длина ${MAX_LENGTH_NAME} символов`)
    .matches(NAME_REG_EX, 'Разрешены только буквы, пробелы и дефис'),
  emailOrPhone: yup
    .string()
    .required('Обязательное поле')
    .min(MIN_LENGTH_EMAIL, `Минимальная длина ${MIN_LENGTH_EMAIL} символов`)
    .max(MAX_LENGTH_EMAIL, `Максимальная длина ${MAX_LENGTH_EMAIL} символов`)
    .test('email-or-phone', 'Введите корректный email или телефон', function (value) {
      if (!value) return false;

      try {
        // First, try validating as an email
        emailSchema.validateSync(value);
        return true;
      } catch (emailError) {
        console.log(emailError);
        // If email validation fails, try phone validation
        try {
          phoneSchema.validateSync(value);
          return true;
        } catch (phoneError) {
          // If both validations fail, return false
          return false;
        }
      }
    }),
  message: yup
    .string()
    .required('Обязательное поле')
    .min(MIN_LENGTH_PROJECT, `Минимальная длина ${MIN_LENGTH_PROJECT} символов`)
    .max(MAX_LENGTH_PROJECT, `Максимальная длина ${MAX_LENGTH_PROJECT} символов`),
});
