import { Location, Navigate, useLocation } from 'react-router-dom';
import { RouteProps } from '../../types/types';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/user-slice';
import { AuthorizationStatus, Pages } from '../../const';
import LoadingPage from '../../pages/loading-page.tsx/loading-page';

type FormState = {
  from?: string;
};

type PrivateRouteProps = RouteProps & {
  isNoLogged?: boolean;
};

export default function PrivateRoute({
  children,
  isNoLogged,
}: PrivateRouteProps): JSX.Element {
  const location = useLocation() as Location<FormState>;
  const userStatus = useAppSelector(userSelectors.status);
  const isLogged = userStatus === AuthorizationStatus.Auth;
  if (userStatus === AuthorizationStatus.Unknown) {
    return <LoadingPage />;
  }
  if (isLogged && isNoLogged) {
    const from = location.state?.from || { pathname: Pages.Main.route };
    return <Navigate to={from} />;
  }
  if (!isLogged && !isNoLogged) {
    return <Navigate state={{ from: location }} to={Pages.Login.route} />;
  }

  return children;
}
