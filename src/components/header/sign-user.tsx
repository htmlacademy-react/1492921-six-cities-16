import { Pages, AuthorizationStatus } from '../../const';
import { CallbackFunction } from '../../types/types';
import { Link } from 'react-router-dom';
import { userModel } from '../../data/user-model';
import { placesModel } from '../../data/places-model';
import { useState } from 'react';

type SignInProps = {
  email: string | undefined;
  favoritesCount: number;
};
function SignIn({ email, favoritesCount }: SignInProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={Pages.Favorites.route}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        {userModel.isLogged ? (
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

type SignOutProps = {
  onLogOut: CallbackFunction;
};
function SignOut({ onLogOut }: SignOutProps): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={Pages.Main.route}>
        <span className="header__signout" onClick={onLogOut}>
          Sign out
        </span>
      </Link>
    </li>
  );
}

export default function SignUser(): JSX.Element {
  const [isLogged, setIsLogged] = useState(
    userModel.status === AuthorizationStatus.Auth
  );

  const logOutHandler = () => {
    userModel.logOut(userModel.loginInfo.token ?? '');
    setIsLogged(false);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <SignIn
          email={userModel.loginInfo.email}
          favoritesCount={placesModel.favoritesCount}
        />
        {isLogged && <SignOut onLogOut={logOutHandler} />}
      </ul>
    </nav>
  );
}
