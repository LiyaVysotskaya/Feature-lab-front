import { useAtom } from 'jotai';
import { postLoginData } from '../api/api';
import { isAuthAtom } from '../atoms/isAuthAtom';
import queryClient from '../query-client';
import { LoginFormData } from '../types/data';
import {
  clearAllStoredTokens,
  setStoredAccessToken,
  setStoredRefreshToken,
} from '../utils/localStorageHelpers';

// Custom hook for handling authentication
const useChangePassword = () => {
  // const [, setIsAuth] = useAtom(isAuthAtom);
  // const signOut = () => {
  //   // Clear all stored tokens and reset state variables
  //   clearAllStoredTokens();
  //   setIsAuth(false);
  //   queryClient.removeQueries();
  // };
  // const signIn = async (loginData: LoginFormData) => {
  //   try {
  //     const authResponse = await postLoginData(loginData);
  //     if (authResponse.access && authResponse.refresh) {
  //       setStoredAccessToken(authResponse.access);
  //       setStoredRefreshToken(authResponse.refresh);
  //       setIsAuth(true);
  //     } else {
  //       signOut();
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     // Handle error
  //   }
  // };
  // // Return authentication status and user profile data
  // return { signOut, signIn };
};

export default useChangePassword;
