export const EMAIL_REG_EX = '^\\S+@\\S+\\.\\S+$';
export const NAME_REG_EX = '^[A-Za-zА-Яа-яЁё \\-]+$';
export const MIN_LENGTH_NAME = 2;
export const MAX_LENGTH_NAME = 60;
export const MIN_LENGTH_EMAIL = 6;
export const MAX_LENGTH_EMAIL = 60;
export const MIN_LENGTH_PROJECT = 15;
export const MAX_LENGTH_PROJECT = 500;

export const ROUTE_HOME = '/';
export const ROUTE_COMPETENCIES = '/competencies';
export const ROUTE_ED_TECH = '/ed-tech';
export const ROUTE_PRODUCTS = '/products';

// COMPETENCIES subroutes
export const SUBROUTE_GAMEDEV = `gamedev`;

// PRODUCTS subroutes
export const SUBROUTE_DOCSHABLON = `dockshablon`;

// full route paths for subroutes
// _COMPETENCIES:
export const ROUTE_GAMEDEV = `${ROUTE_COMPETENCIES}/${SUBROUTE_GAMEDEV}`;

// _PRODUCTS:
export const ROUTE_DOCSHABLON = `${ROUTE_PRODUCTS}/${SUBROUTE_DOCSHABLON}`;
