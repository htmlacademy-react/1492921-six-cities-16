import {PlaceCardType, LogoType, Pages} from '../../const';
import Header from '../../components/header/header';
import Place from '../../components/place/place';
import {favorites} from '../../data/places';
import classNames from 'classnames';
import Logo from '../../components/logo/logo';

export default function FavoritesPage(): JSX.Element {
  const isEmpty = favorites.length === 0;
  return (
    <div className={classNames('page', {'page--favorites-empty': isEmpty})}>
      <Header page={Pages.FAVORITE} favoritesCount={favorites.length}/>
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
                {favorites.map((place) => (
                  <li key={place.id} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{place.city.name}</span>
                        </a>
                      </div>
                    </div>
                    <Place place={place} viewType={PlaceCardType.FAVORITE} />
                  </li>))}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Logo viewType={LogoType.FOOTER} page={Pages.FAVORITE} />
      </footer>
    </div>
  );
}

