import { Pages } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/user-slice';
import { placesSelectors } from '../../store/places-slice';
import { userLogout } from '../../store/api-actions';

type SignInProps = {
  isLogged: boolean;
};
function SignIn({ isLogged }: SignInProps): JSX.Element {
  const email = useAppSelector(userSelectors.email);
  const favoritesCount = useAppSelector(placesSelectors.favoritesCount);
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={isLogged ? Pages.Favorites.route : Pages.Login.route}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        {isLogged ? (
          <>
            <span className="header__user-name user__name">{email}</span>
            <span className="header__favorite-count">{favoritesCount}</span>
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
      <Link className="header__nav-link" to={Pages.Main.route}>
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
