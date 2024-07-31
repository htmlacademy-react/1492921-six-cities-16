import { Pages } from '../../const';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type ErrorProps = {
  text?: string;
  description?: string;
};

const Error404: ErrorProps = {
  text: 'Error 404. Page not found',
  description: 'The wrong address may have been entered',
};

export default function ErrorPage({
  text = Error404.text,
  description = Error404.description,
}: ErrorProps) {
  return (
    <div className="page page--gray page--main page__main--index-empty">
      <Helmet>
        <title>6 городов. Ошибка.</title>
      </Helmet>
      <Header page={Pages.Main} />
      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">{text}</b>
                <p className="cities__status-description">{description}</p>
                <br></br>
                <h2>
                  <Link to={Pages.Main.route}>Open main page</Link>
                </h2>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
