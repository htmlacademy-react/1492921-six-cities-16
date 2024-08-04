import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Pages } from '../../const';
import { userModel } from '../../data/user-model';

type LoginRouteProps = {
  children: JSX.Element;
};

export default function LoginRoute({ children }: LoginRouteProps): JSX.Element {
  return userModel.status === AuthorizationStatus.Auth ? (
    <Navigate to={Pages.Main.route} />
  ) : (
    children
  );
}
