import { ComponentOptions } from '../../types/types';
import { Pages } from '../../const';
import { Link, useLocation } from 'react-router-dom';

type LogoProps = {
  viewType: ComponentOptions;
};

export default function Logo({ viewType }: LogoProps): JSX.Element {
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
      to={isMainPage ? '#' : Pages.Main.route}
    >
      {imgElement}
    </Link>
  );
}
