import { ComponentOptions } from '../../types/types';
import { Pages } from '../../const';
import { Link, useLocation } from 'react-router-dom';
import { memo } from 'react';

type LogoProps = {
  viewType: ComponentOptions;
};

function ImgLogoComponent({ viewType }: LogoProps): JSX.Element {
  return (
    <img
      className={`${viewType.classPrefix}__logo`}
      src="img/logo.svg"
      alt="6 cities logo"
      width={viewType.imageWidth}
      height={viewType.imageHeight}
    />
  );
}

const ImgLogo = memo(ImgLogoComponent);

function LogoComponent({ viewType }: LogoProps): JSX.Element {
  const path = useLocation().pathname;
  const isMainPage = path.includes(Pages.City.route.split('/')[1]);
  return (
    <Link
      className={`${viewType.classPrefix}__logo-link header__logo-link--active`}
      to={Pages.Main.route}
      style={isMainPage ? { pointerEvents: 'none' } : {}}
    >
      <ImgLogo viewType={viewType} />
    </Link>
  );
}

const Logo = memo(LogoComponent);
export default Logo;
