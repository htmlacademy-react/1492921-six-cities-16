import { Pages } from '../../const';
import { CityName, Login } from '../../types/types';
import { CITIES, setCurrentCity } from '../../data/cities';
import Header from '../../components/header/header';
import { getRandomArrayElement } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FormEvent, ChangeEvent } from 'react';
import { userModel } from '../../data/user-model';

export default function LoginPage(): JSX.Element {
  const randomCity: CityName = getRandomArrayElement(CITIES);
  //const [login, setLogin] = useState({} as Login);
  let login: Login;
  const navigate = useNavigate();

  const cityClickHandler = () => {
    setCurrentCity(randomCity);
  };

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    //setLogin({ ...login, [evt.target.name]: evt.target.value });
    login = { ...login, [evt.target.name]: evt.target.value };
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (userModel.checkPassword(login.password)) {
      userModel.login(login);
      if (userModel.isLogged) {
        setCurrentCity(randomCity);
        navigate(Pages.Main.route);
      }
    } else {
      throw new Error(
        'Пароль должен содержать не менее одной буквы и одной цифры!'
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 городов. Аутентификация пользователя.?</title>
      </Helmet>
      <Header page={Pages.Login} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={formSubmitHandler}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={fieldChangeHandler}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={fieldChangeHandler}
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
              <Link className="locations__item-link" to={Pages.Main.route}>
                <span onClick={cityClickHandler}>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
