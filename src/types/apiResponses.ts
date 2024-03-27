import { TCompetenceShortInfo, TDocument, TProjectShortInfo, TUserProfile } from './data';

type GeneralApiResponse = {
  count: number;
  next: null | string;
  previous: null | string;
};

export type GetAuthResponse = {
  access: string;
  refresh: string;
};

export type GetUserProfileResponse = GeneralApiResponse & {
  results: TUserProfile[];
};

export type PostRegDataResponse = {
  id: string;
  email: string;
};

export type PostChangedPasswordResponse = {};

export type GetUserProjectsListResponse = GeneralApiResponse & {
  results: TProjectShortInfo[];
};

export type GetAllCompetenciesResponse = GeneralApiResponse & {
  results: TCompetenceShortInfo[];
};

export type GetAllUserDocsResponse = GeneralApiResponse & {
  results: TDocument[];
};
