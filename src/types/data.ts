type TGeneralApiResponse = {
  count: number;
  next: null | string;
  previous: null | string;
};

export type GetAuthResponse = {
  access: string;
  refresh: string;
};

export type TUserProfile = {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  phone_number: string;
  company_name: string;
  position: string;
};

export type GetUserProfileResponse = TGeneralApiResponse & {
  results: TUserProfile[];
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

export type TProjectStage = {
  id: number;
  name: string;
  description: string;
  stage_num: number;
  stage_status: 'completed' | 'in_progress' | 'new';
  start_date: string;
  end_date: string;
};

export type TManager = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type TProjectShortInfo = {
  id: number;
  name: string;
  stages_count: number;
  end_date: string;
  current_stage: TProjectStage;
  manager: TManager;
  stages: TProjectStage[];
};

export type TDocument = {
  id: number;
  name: string;
  description: string;
  doctype: {
    id: number;
    name: string;
  };
  url: string;
  pub_date: string;
};

export type TProperty = {
  order: number;
  name: string;
  value: string;
};

export type TProjectFullInfo = {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
  end_date: string;
  managers: TManager[];
  stages: TProjectStage[];
  current_stage: TProjectStage;
  documents: TDocument[];
  properties: TProperty[];
};

export type GetUserProjectsListResponse = TGeneralApiResponse & {
  results: TProjectShortInfo[];
};

export type TProductFullInfo = {
  id: number;
  slug: string;
  name: string;
  description: string;
  competence: number;
  url: string;
  product_type: string;
  properties: TProperty[];
  tags: string[];
};

export type TProductShortInfo = {
  id: number;
  slug: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
};

type TEmployeePosition = {
  name: string;
};

export type TEmployee = {
  first_name: string;
  last_name: string;
  middle_name: string;
  photo_active: string;
  photo_inactive: string;
  description: string;
  positions: TEmployeePosition[];
};

export type TCompetenceFullInfo = {
  id: number;
  slug: string;
  name: string;
  description: string;
  detailed_description: string;
  description_on_main: string;
  priority: number;
  properties: TProperty[];
  employees: TEmployee[];
};

export type TCompetenceShortInfo = {
  id: number;
  slug: string;
  name: string;
  description: string;
  description_on_main: string;
  priority: number;
};

export type TGetAllCompetenciesResponse = TGeneralApiResponse & {
  results: TCompetenceShortInfo[];
};
