export const SPARE_EMAIL_REG_EX = '[+0-9]{1,4}[0-9]{1,10}$|^\\S+@\\S+\\.\\S+$';
export const EMAIL_REG_EX = '[+0-9]{1,4}[0-9]{1,10}$|(.*)@(.*)\\.[a-z]{2,6}';
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
export const ROUTE_PROFILE = '/profile';
export const ROUTE_LOGIN = '/login';
export const ROUTE_REGISTER = '/register';
export const ROUTE_RESET_PASSWORD = '/reset-password';
export const ROUTE_FORGOT_PASSWORD = '/forgot-password';
export const ROUTE_CONTACT = '/contact';

// COMPETENCIES subroutes
export const SUBROUTE_GAMEDEV = `gamedev`;

// PRODUCTS subroutes
export const SUBROUTE_DOCSHABLON = `dockshablon`;

// PROFILE subroutes
export const SUBROUTE_DASHBOARD = `dashboard`;
export const SUBROUTE_SETTINGS = `settings`;
export const SUBROUTE_DOCS = `docs`;

// full route paths for subroutes
// _COMPETENCIES:
export const ROUTE_GAMEDEV = `${ROUTE_COMPETENCIES}/${SUBROUTE_GAMEDEV}`;

// _PRODUCTS:
export const ROUTE_PRODUCTS_DOCSHABLON = `${ROUTE_PRODUCTS}/${SUBROUTE_DOCSHABLON}`;

// _PROFILE:
export const ROUTE_PROFILE_DASHBOARD = `${ROUTE_PROFILE}/${SUBROUTE_DASHBOARD}`;
export const ROUTE_PROFILE_DOCSHABLON = `${ROUTE_PROFILE}/${SUBROUTE_DOCSHABLON}`;
export const ROUTE_PROFILE_DOCS = `${ROUTE_PROFILE}/${SUBROUTE_DOCS}`;
export const ROUTE_PROFILE_SETTINGS = `${ROUTE_PROFILE}/${SUBROUTE_SETTINGS}`;
