import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Pages } from '../../const';
import { userModel } from '../../data/user-model';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({
  children,
}: PrivateRouteProps): JSX.Element {
  return userModel.status === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={Pages.Login.route} />
  );
}
