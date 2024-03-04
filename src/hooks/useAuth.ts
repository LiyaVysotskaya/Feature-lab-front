import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { getAuth, getUserProfileData } from '../api/api';
import { isAuthAtom } from '../atoms/isAuthAtom';
import { userProfileAtom } from '../atoms/userProfileAtom';
import { LoginFormData } from '../types/data';
import {
  clearAllStoredTokens,
  getStoredAccessToken,
  setStoredAccessToken,
  setStoredRefreshToken,
} from '../utils/localStorageHelpers';

// Custom hook for handling authentication
const useAuth = () => {
  // State variables for authentication status and user profile
  const [isAuth, setIsAuth] = useAtom(isAuthAtom);
  const [, setUserProfile] = useAtom(userProfileAtom);

  const signOut = () => {
    // Clear all stored tokens and reset state variables
    clearAllStoredTokens();
    setIsAuth(false);
    setUserProfile(null);
  };

  const signIn = async (loginData: LoginFormData) => {
    try {
      const authResponse = await getAuth(loginData);
      if (authResponse.access && authResponse.refresh) {
        setStoredAccessToken(authResponse.access);
        setStoredRefreshToken(authResponse.refresh);
        setIsAuth(true);
        // After successful sign-in, fetch and set user profile data
        const userData = await getUserProfileData();
        setUserProfile(userData);
      } else {
        signOut();
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error
      signOut();
    }
  };

  useEffect(() => {
    // Function to check authentication status
    const checkAuth = async () => {
      const accessToken = getStoredAccessToken();

      if (accessToken) {
        try {
          // Fetch user profile data using access token
          const userData = await getUserProfileData();
          // Set authentication status to true and store user profile data
          setIsAuth(true);
          setUserProfile(userData);
        } catch (error) {
          // If error occurs during data fetching, log the error, clear tokens, and reset authentication status
          console.error('Error fetching user data:', error);
          signOut();
        }
      } else {
        // If no access token exists, set authentication status to false and clear user profile
        setIsAuth(false);
        setUserProfile(null);
      }
    };

    // Call the checkAuth function when the component mounts
    checkAuth();
  }, []);

  // Return authentication status and user profile data
  return { isAuth, signOut, signIn };
};

export default useAuth;
