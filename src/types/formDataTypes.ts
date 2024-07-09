export type TRegFormData = {
  email: string;
  password: string;
  re_password: string;
};

export type TLoginFormData = {
  email: string;
  password: string;
};

export type TPwdRestoreFormData = {
  email: string;
};

export type TPwdResetFormData = {
  new_password: string;
  re_new_password: string;
};

export type TChangePwdFormData = {
  current_password: string;
  new_password: string;
  re_new_password: string;
};

export type TContactFormData = {
  name: string;
  emailOrPhone: string;
  message: string;
};
