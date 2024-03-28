export type TProperty = {
  order: number;
  name: string;
  value: string;
};

export type TProductStage = {
  name: string;
  phase_num: number;
  description: string;
};

export type TProductImg = {
  image: string;
};

export type TProductFullInfo = {
  id: string;
  slug: string;
  name: string;
  detailed_name: string;
  description: string;
  detailed_description: string;
  competence: string; // id
  url: string;
  product_type: string;
  properties: TProperty[];
  tags: string[];
  phases: TProductStage[];
  gallery: TProductImg[];
};

export type TProductShortInfo = {
  id: string;
  slug: string;
  competence: string;
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
  id: string;
  slug: string;
  name: string;
  detailed_name: string;
  description: string;
  detailed_description: string;
  description_on_main: string;
  priority: number;
  properties: TProperty[];
  employees: TEmployee[];
};

export type TCompetenceShortInfo = {
  id: string;
  slug: string;
  name: string;
  description: string;
  description_on_main: string;
  priority: number;
};
