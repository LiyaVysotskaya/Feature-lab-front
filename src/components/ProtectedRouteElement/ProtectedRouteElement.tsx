import { useAtom } from 'jotai';
import { FC } from 'react';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import { ROUTE_LOGIN } from '../../constants/constants';

type TProtectedRouteElementProps = RouteProps & {
  onlyUnAuth?: boolean;
};

export const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({
  element,
  onlyUnAuth = false,
}) => {
  // Get the current location using the useLocation hook
  const location = useLocation();

  const [isAuth] = useAtom(isAuthAtom);

  // Allow only UnAuth users here, if the user is Auth,
  // redirect them to the page they came from or to the home page
  if (onlyUnAuth && isAuth) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Navigate to={from} replace />;
  }

  // Allow only UnAuth users here, if the user is UnAuth,
  // return the provided element
  if (onlyUnAuth && !isAuth) {
    return element;
  }

  // Allow only Auth users here, if the user is UnAuth,
  // redirect them to the login page, preserving the previous location.
  // The previous location may be needed if we want to return the user there after logging in
  if (!onlyUnAuth && !isAuth) {
    return <Navigate to={ROUTE_LOGIN} state={{ from: location }} />;
  }

  // Allow only Auth users here, if the user is Auth
  return element;
};
