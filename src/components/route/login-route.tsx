import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Pages } from '../../const';
import { userModel } from '../../data/user-model';
import { RouteProps } from '../../types/types';

export default function LoginRoute({ children }: RouteProps): JSX.Element {
  return userModel.status === AuthorizationStatus.Auth ? (
    <Navigate to={Pages.Main.route} />
  ) : (
    children
  );
}
