import {PlaceCardType, LogoType, Pages} from '../../const';
import {placesModel} from '../../data/places-model';
import Header from '../../components/header/header';
import Place from '../../components/place/place-card';
import classNames from 'classnames';
import Logo from '../../components/logo/logo';
import { CityName } from '../../types/types';

export default function FavoritesPage(): JSX.Element {
  const isEmpty = placesModel.favoritesCount === 0;
  return (
    <div className={classNames('page', {'page--favorites-empty': isEmpty})}>
      <Header page={Pages.FAVORITE} />
      {isEmpty ?
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.keys(placesModel.favorites).map((city) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {(placesModel.favorites[(city as CityName)] ?? []).map((place) =>
                        <Place key={place.id} place={place} viewType={PlaceCardType.Favorite} />
                      )}
                    </div>
                  </li>))}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Logo viewType={LogoType.Footer} page={Pages.FAVORITE} />
      </footer>
    </div>
  );
}

