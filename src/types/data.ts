type GeneralApiResponse = {
  count: number;
  next: null | string;
  previous: null | string;
};

export type GetAuthResponse = {
  access: string;
  refresh: string;
};

export type UserProfile = {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  phone_number: string;
  company_name: string;
  position: string;
};

export type GetUserProfileResponse = GeneralApiResponse & {
  results: UserProfile[];
};

export type PostRegDataResponse = {
  id: number;
  email: string;
};

// forms data
export type RegFormData = {
  email: string;
  password: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};
