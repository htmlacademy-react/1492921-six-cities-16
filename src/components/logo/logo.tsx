import { PageOptions, ComponentOptions } from '../../types/types';
import { Pages } from '../../const';

type LogoProps = {
  viewType: ComponentOptions;
  page: PageOptions;
};

export default function Logo({ viewType, page }: LogoProps): JSX.Element {
  const isMainPage = page === Pages.MAIN;
  return (
    <a
      {...{
        className: `${viewType.classPrefix}__logo-link header__logo-link--active`,
        ...(isMainPage && { href: 'main.html' }),
      }}
    >
      <img
        className={`${viewType.classPrefix}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={viewType.imageWidth}
        height={viewType.imageHeight}
      >
      </img>
    </a>
  );
}
