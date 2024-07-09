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
