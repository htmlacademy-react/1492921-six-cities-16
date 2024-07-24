import {Navigate} from 'react-router-dom';
import {Pages} from '../../const';
import {loginInfo} from '../../data/user';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  return (
    loginInfo.name !== ''
      ? children
      : <Navigate to={Pages.Login.route} />
  );
}
