import { ComponentOptions } from '../../types/types';
import { Pages } from '../../const';
import { Link, useLocation } from 'react-router-dom';
import { memo } from 'react';

type LogoProps = {
  viewType: ComponentOptions;
};

function LogoComponent({ viewType }: LogoProps): JSX.Element {
  const path = useLocation().pathname;
  const isMainPage = path.includes(Pages.City.route.split('/')[1]);
  const imgElement = (
    <img
      className={`${viewType.classPrefix}__logo`}
      src="img/logo.svg"
      alt="6 cities logo"
      width={viewType.imageWidth}
      height={viewType.imageHeight}
    />
  );
  return (
    <Link
      className={`${viewType.classPrefix}__logo-link header__logo-link--active`}
      to={Pages.Main.route}
      style={isMainPage ? { pointerEvents: 'none' } : {}}
    >
      {imgElement}
    </Link>
  );
}

const Logo = memo(LogoComponent);
export default Logo;
