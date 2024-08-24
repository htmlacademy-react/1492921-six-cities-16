import faker from 'faker';
import { Host, Login, User } from '@src/types/types';
import { UserState } from '@store/user-slice/user-slice';
import { AuthorizationStatus } from '@src/const';

const mockHost: Host = {
  name: faker.name.firstName(),
  avatarUrl: faker.internet.avatar(),
  isPro: faker.datatype.boolean(),
};

const mockLogin: Login = {
  email: faker.internet.email(),
  password: `${faker.internet.password()}p1`,
};

const mockLoginNotValid: Login = {
  email: faker.internet.email(),
  password: 'p',
};

const mockUser: User = {
  ...mockHost,
  ...mockLogin,
  token: faker.internet.password(),
};

const mockUserAuthState: UserState = {
  email: faker.internet.email(),
  status: AuthorizationStatus.Auth,
};

const mockUserNoAuthState: UserState = {
  email: '',
  status: AuthorizationStatus.NoAuth,
};

const mockUserUnknownState: UserState = {
  email: faker.internet.email(),
  status: AuthorizationStatus.Unknown,
};

const mockCheckLoginError = {
  errorCode: 401,
  response: {
    errorType: 'COMMON_ERROR',
    message: 'Access deny.',
  },
};

const mockUserLoginError = {
  errorCode: 400,
  response: {
    errorType: 'VALIDATION_ERROR',
    message: 'Validation error: /six-cities/login',
    details: [
      {
        property: 'password',
        value: 'p',
        messages: ['password must be longer than or equal to 3 characters'],
      },
    ],
  },
};

const getUserAuthState = (emailUser: string): UserState => ({
  email: emailUser,
  status: AuthorizationStatus.Auth,
});

export {
  mockHost,
  mockLogin,
  mockLoginNotValid,
  mockUser,
  mockUserAuthState,
  mockUserNoAuthState,
  mockUserUnknownState,
  mockCheckLoginError,
  mockUserLoginError,
  getUserAuthState,
};
