import { useAtom } from 'jotai';
import { postLoginData } from '../../api/api';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import queryClient from '../../query-client';
import { TLoginFormData } from '../../types/forms';
import {
  clearAllStoredTokens,
  setStoredAccessToken,
  setStoredRefreshToken,
} from '../localStorageHelpers';

// Custom hook for handling authentication
export const useAuth = () => {
  const [, setIsAuth] = useAtom(isAuthAtom);

  const signOut = () => {
    // Clear all stored tokens and reset state variables
    clearAllStoredTokens();
    setIsAuth(false);
    queryClient.removeQueries();
  };

  const signIn = async (loginData: TLoginFormData) => {
    try {
      const authResponse = await postLoginData(loginData);
      if (authResponse.access && authResponse.refresh) {
        setStoredAccessToken(authResponse.access);
        setStoredRefreshToken(authResponse.refresh);
        setIsAuth(true);
      } else {
        signOut();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return { signOut, signIn };
};
