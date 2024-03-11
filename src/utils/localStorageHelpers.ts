const ACCESS_JWT_LOCALSTORAGE_KEY = 'accessToken';
const REFRESH_JWT_LOCALSTORAGE_KEY = 'refreshToken';

// stored ACCESS token in local storage
export function getStoredAccessToken() {
  return localStorage.getItem(ACCESS_JWT_LOCALSTORAGE_KEY);
}

export function setStoredAccessToken(accessToken: string) {
  localStorage.setItem(ACCESS_JWT_LOCALSTORAGE_KEY, accessToken);
}

export function clearStoredAccessToken() {
  localStorage.removeItem(ACCESS_JWT_LOCALSTORAGE_KEY);
}

// stored REFRESH token in local storage
export function getStoredRefreshToken() {
  return localStorage.getItem(REFRESH_JWT_LOCALSTORAGE_KEY);
}

export function setStoredRefreshToken(refreshToken: string) {
  localStorage.setItem(REFRESH_JWT_LOCALSTORAGE_KEY, refreshToken);
}

export function clearStoredRefreshToken() {
  localStorage.removeItem(REFRESH_JWT_LOCALSTORAGE_KEY);
}

export function clearAllStoredTokens() {
  localStorage.removeItem(ACCESS_JWT_LOCALSTORAGE_KEY);
  localStorage.removeItem(REFRESH_JWT_LOCALSTORAGE_KEY);
}
