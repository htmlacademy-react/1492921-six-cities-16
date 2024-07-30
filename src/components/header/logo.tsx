import { ComponentOptions } from '../../types/types';
import { Pages } from '../../const';
import { Link } from 'react-router-dom';

type LogoProps = {
  viewType: ComponentOptions;
};

export default function Logo({ viewType }: LogoProps): JSX.Element {
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
    >
      {imgElement}
    </Link>
  );
}
