export const MIN_LENGTH_NAME = 2;
export const MAX_LENGTH_NAME = 60;

export const MIN_LENGTH_EMAIL = 6;
export const MAX_LENGTH_EMAIL = 60;

export const MIN_LENGTH_PROJECT = 15;
export const MAX_LENGTH_PROJECT = 500;

export const MIN_LENGTH_PASSWORD = 8;
export const MAX_LENGTH_PASSWORD = 30;

export const EMAIL_PHONE_REG_EX = /[+0-9]{1,4}[0-9]{1,10}$|(.*)@(.*)\\.[a-z]{2,6}/;
export const NAME_REG_EX = /^[A-Za-zА-Яа-яЁё \\-]+$/;

export const HAS_LOWER_CASE = /[a-z]/;
export const HAS_NUMBER = /\d/;
export const HAS_NO_SPACES = /^\S*$/;
export const HAS_UPPER_CASE = /[A-Z]/;
export const HAS_SPECIAL_CHAR = /[!#$%&‘*+—/=^_`{|}~.]/;
export const PWD_HAS_ALLOWED_CHARS_ONLY = /^[A-Za-z0-9!#$%&‘*+—/=^_`{|}~.]*$/;
export const EMAIL_START_WITH_DOT = /^[^.]/;
export const EMAIL_HAS_AT_LEAST_ONE_DOT_AFTER_AT = /^[^@]+@[^@]+\.[^@]+$/;
