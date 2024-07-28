import { PageOptions, ComponentOptions } from '../../types/types';
import { Pages } from '../../const';
import { Link } from 'react-router-dom';

type LogoProps = {
  viewType: ComponentOptions;
  page: PageOptions;
};

export default function Logo({ viewType, page }: LogoProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMainPage = page === Pages.Main;
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
