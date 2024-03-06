import { useAtom } from 'jotai';
import { getAuth, postRegData } from '../api/api';
import { isAuthAtom } from '../atoms/isAuthAtom';
import queryClient from '../query-client';
import { LoginFormData, RegFormData } from '../types/data';
import {
  clearAllStoredTokens,
  setStoredAccessToken,
  setStoredRefreshToken,
} from '../utils/localStorageHelpers';

// Custom hook for handling authentication
const useAuth = () => {
  const [, setIsAuth] = useAtom(isAuthAtom);

  const signOut = () => {
    // Clear all stored tokens and reset state variables
    clearAllStoredTokens();
    setIsAuth(false);
    queryClient.removeQueries();
  };

  const signIn = async (loginData: LoginFormData) => {
    try {
      const authResponse = await getAuth(loginData);
      if (authResponse.access && authResponse.refresh) {
        setStoredAccessToken(authResponse.access);
        setStoredRefreshToken(authResponse.refresh);
        setIsAuth(true);
      } else {
        signOut();
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error
    }
  };

  const signUp = async (regData: RegFormData) => {
    try {
      await postRegData(regData);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  // Return authentication status and user profile data
  return { signOut, signIn, signUp };
};

export default useAuth;
