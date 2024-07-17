import {PlaceList} from '../../types/types';
import {PlaceCardType} from '../../const';
import Header from '../../components/header/header';
import Place from '../../components/place/place';

type FavoritesProps = {
  places: PlaceList;
}

export default function FavoritesPage({places}: FavoritesProps): JSX.Element {
  return (
    <div className={`page ${places.length === 0 ? 'page--favorites-empty' : ''}`}>
      <Header isLogon isMainPage={false} isLoginPage={false} />
      {places.length === 0 ?
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
                {places.map((place) => (
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
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
        </a>
      </footer>
    </div>
  );
}

