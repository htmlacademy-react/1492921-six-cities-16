import { LogoType, Pages } from '../../const';
import Logo from '../logo/logo';
import { PageOptions } from '../../types/types';
import { loginInfo } from '../../data/user';
import { placesModel } from '../../data/places-model';

type HeaderProps = {
  page: PageOptions;
};

export default function Header({ page }: HeaderProps): JSX.Element {
  const isLogged = loginInfo.name !== '';
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo viewType={LogoType.Header} page={page} />
          </div>
          {page !== Pages.LOGIN && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {isLogged ? (
                      <>
                        <span className="header__user-name user__name">
                          {loginInfo.email}
                        </span>
                        <span className="header__favorite-count">
                          {placesModel.favoritesCount}
                        </span>
                      </>
                    ) : (
                      <span className="header__login">Sign in</span>
                    )}
                  </a>
                </li>
                {isLogged && (
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
