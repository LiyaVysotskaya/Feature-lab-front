export type TGetAuthResponse = {
  access: string;
  refresh: string;
};

export type TPostRegDataResponse = {
  id: string;
  email: string;
};

export type TPwdResetData = {
  uid: string;
  token: string;
  new_password: string;
  re_new_password: string;
};

export type TAccActivationData = {
  uid: string;
  token: string;
};

export type TContactSubmitData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
