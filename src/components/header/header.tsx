import { LogoType, Pages } from '../../const';
import Logo from './logo';
import SignUser from './sign-user';
import { useLocation } from 'react-router-dom';

export default function Header(): JSX.Element {
  const path = useLocation().pathname;
  const page =
    Object.values(Pages).find(
      (item) => item.route.split('/')[1] === path.split('/')[1]
    ) || Pages.Error;
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
