import { TProperty } from './publicData';

export type TUserProfile = {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  email: string;
  phone_number: string;
  company_name: string;
  position: string;
};

export type TProjectStage = {
  id: string;
  name: string;
  description: string;
  stage_num: number;
  stage_status: 'completed' | 'in_progress' | 'new';
  start_date: string;
  end_date: string;
};

type TManager = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type TProjectFullInfo = {
  id: string;
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

export type TProjectShortInfo = {
  id: string;
  name: string;
  stages_count: number;
  end_date: string;
  current_stage: TProjectStage;
  manager: TManager;
  stages: TProjectStage[];
};

export type TDocument = {
  id: string;
  name: string;
  description: string;
  doctype: {
    id: string;
    name: string;
  };
  url: string;
  pub_date: string;
};
