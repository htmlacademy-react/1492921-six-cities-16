import { Pages } from '@src/const';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@src/hooks/store';
import { userSelectors } from '@store/user-slice/user-slice';
import { userLogout } from '@store/api-actions';
import { FavoritesCount } from '@components';

type SignInProps = {
  isLogged: boolean;
};
function SignIn({ isLogged }: SignInProps): JSX.Element {
  const location = useLocation();
  const email = useAppSelector(userSelectors.email);
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={Pages.Favorites.route}
        state={{ from: location }}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        {isLogged ? (
          <>
            <span className="header__user-name user__name">{email}</span>
            <FavoritesCount />
          </>
        ) : (
          <span className="header__login">Sign in</span>
        )}
      </Link>
    </li>
  );
}

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogOutClick = () => {
    dispatch(userLogout());
  };

  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="#">
        <span className="header__signout" onClick={handleLogOutClick}>
          Sign out
        </span>
      </Link>
    </li>
  );
}

export default function SignUser(): JSX.Element {
  const isLogged = useAppSelector(userSelectors.isLogged);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <SignIn isLogged={isLogged} />
        {isLogged && <SignOut />}
      </ul>
    </nav>
  );
}
