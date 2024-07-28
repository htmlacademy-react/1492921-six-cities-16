import { LogoType, Pages } from '../../const';
import Logo from './logo';
import { PageOptions } from '../../types/types';
import SignUser from './sign-user';

type HeaderProps = {
  page: PageOptions;
};

export default function Header({ page }: HeaderProps): JSX.Element {
  const shouldShowMenu = page !== Pages.Login && page !== Pages.Error;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo viewType={LogoType.Header} />
          </div>
          {shouldShowMenu && <SignUser />}
        </div>
      </div>
    </header>
  );
}
