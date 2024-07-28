import { user, validationError, authorizationError } from '../mock/mock-user';
import { User, Login } from '../types/types';
import { AuthorizationStatus } from '../const';

type ErrorUserLogin = {
  property: string;
  value: string;
  messages: string[];
};

type ErrorGetUser = {
  errorType: string;
  message: string;
};

type ErrorResponse = {
  errorType: string;
  message: string;
  details: ErrorUserLogin[];
};

type LoginInfo = User & { status: AuthorizationStatus };

export default class UserModel {
  #loginInfo: LoginInfo;
  #errorLogin: ErrorResponse;
  #errorGetUser: ErrorGetUser;

  constructor() {
    this.#loginInfo = {} as LoginInfo;
    this.#loginInfo.status = AuthorizationStatus.Unknown;
    this.#errorLogin = {} as ErrorResponse;
    this.#errorGetUser = {} as ErrorGetUser;
  }

  get loginInfo() {
    return this.#loginInfo;
  }

  get errorLogin() {
    return this.#errorLogin;
  }

  get errorGetUser() {
    return this.#errorGetUser;
  }

  get status() {
    const checkInfo = this._checkStatus(this.#loginInfo.token ?? '');
    this.#errorGetUser = checkInfo.error ?? ({} as ErrorGetUser);
    if (this.#errorGetUser.message) {
      this.#loginInfo.status = AuthorizationStatus.NoAuth;
    } else {
      this.#loginInfo = Object.assign(checkInfo.user ?? ({} as LoginInfo), {
        status: AuthorizationStatus.Auth,
      });
    }
    return this.#loginInfo.status;
  }

  get isLogged() {
    return this.status === AuthorizationStatus.Auth;
  }

  _checkStatus(token: string): { user?: User; error?: ErrorGetUser } {
    if (token === user.token) {
      return { user: user };
    } else {
      return { error: authorizationError };
    }
  }

  checkPassword = (password: string) =>
    /\d/g.test(password) && /[a-zA-Zа-яА-Я]/g.test(password);

  login({ email, password }: Login): LoginInfo {
    if (email === user.email && this.checkPassword(password)) {
      this.#errorLogin = {} as ErrorResponse;
      this.#loginInfo = Object.assign(user, {
        status: AuthorizationStatus.Auth,
      });
    } else {
      this.#loginInfo.token = '';
      this.#loginInfo.status = AuthorizationStatus.NoAuth;
      this.#errorLogin = validationError;
      this.#errorLogin.details[0].value = password;
    }
    return this.#loginInfo;
  }

  logOut(token: string): void {
    if (token) {
      this.#loginInfo = {} as LoginInfo;
      this.#loginInfo.status = AuthorizationStatus.Unknown;
      this.#errorLogin = {} as ErrorResponse;
      this.#errorGetUser = {} as ErrorGetUser;
    }
  }
}

const userModel = new UserModel();

userModel.login({ email: user.email, password: '34s5' });

export { userModel };
