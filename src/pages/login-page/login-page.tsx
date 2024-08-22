import { CITIES, Pages } from '../../const';
import { CityName, Login } from '../../types/types';
import Header from '../../components/header/header';
import { getRandomArrayElement } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FormEvent, ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { userLogin } from '../../store/api-actions';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const randomCity: CityName = getRandomArrayElement(CITIES);
  let login: Login;

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    login = { ...login, [evt.target.name]: evt.target.value };
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(userLogin(login));
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 городов. Аутентификация пользователя.?</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleFieldChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern="^(?=.*[a-zA-Z])(?=.*\d).*$"
                  title="'Пароль должен содержать не менее одной латинской буквы и одной цифры!'"
                  required
                  onChange={handleFieldChange}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={Pages.City.route.replace(':cityName', randomCity)}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
