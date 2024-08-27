import { Header, Cities, Places } from '@components';
import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { placesSelectors } from '@store/places-slice/places-slice';
import { useAppSelector } from '@src/hooks/store';
import { CityName } from '@src/types/types';

export default function MainPage(): JSX.Element {
  const cityName = useParams().cityName as CityName;
  const isEmpty = useAppSelector(placesSelectors.isEmptyPlacesCity);

  return (
    <div
      className={classNames('page', 'page--gray', 'page--main', {
        'page__main--index-empty': isEmpty,
      })}
      data-testid="test-main-page"
    >
      <Helmet>
        <title>6 городов. Главная страница.?</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities cityActive={cityName} />
        <Places cityName={cityName} />
      </main>
    </div>
  );
}
