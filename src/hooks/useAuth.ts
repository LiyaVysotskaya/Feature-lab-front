import { useAtom } from 'jotai';
import { postLoginData } from '../api/api';
import { isAuthAtom } from '../atoms/isAuthAtom';
import { InfoToastContainer } from '../components/ui/InfoToastContainer/InfoToastContainer';
import queryClient from '../query-client';
import { LoginFormData } from '../types/forms';
import {
  clearAllStoredTokens,
  setStoredAccessToken,
  setStoredRefreshToken,
} from '../utils/localStorageHelpers';

// Custom hook for handling authentication
export const useAuth = () => {
  const [, setIsAuth] = useAtom(isAuthAtom);

  const signOut = () => {
    // Clear all stored tokens and reset state variables
    clearAllStoredTokens();
    setIsAuth(false);
    queryClient.removeQueries();
  };

  const signIn = async (loginData: LoginFormData) => {
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
      InfoToastContainer('Что-то пошло не так');
    }
  };

  return { signOut, signIn };
};
