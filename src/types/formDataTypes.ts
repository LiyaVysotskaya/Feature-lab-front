export type TRegFormData = {
  email: string;
  password: string;
  repeatPassword?: string;
};

export type TLoginFormData = {
  email: string;
  password: string;
};

export type TChangePwdFormData = {
  current_password: string;
  new_password: string;
};

export type TContactFormData = {
  name: string;
  emailOrPhone: string;
  message: string;
};
