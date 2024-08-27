import MockAdapter from 'axios-mock-adapter';
import { APIRoute, AuthorizationStatus, NameSpace } from '@src/const';
import { createAPI } from '@src/services/api';
import { setupStore } from '@store/store';
import { checkLogin, userLogin, userLogout } from '@store/api-actions';
import { initialState as initialStateUser } from '@store/user-slice/user-slice';
import {
  mockCheckLoginError,
  mockLogin,
  mockLoginNotValid,
  mockUser,
  mockUserAuthState,
  mockUserLoginError,
} from '@src/mock/mock-user';

describe('ASYNC ACTIONS', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);

  describe('User', () => {
    describe('checkLogin', () => {
      it('should return email of the authorized user', async () => {
        const mockStore = setupStore(
          { [NameSpace.User]: initialStateUser },
          axios
        );
        const mockResponse = mockUser();

        mockAxiosAdapter.onGet(APIRoute.Login).reply(200, mockResponse);
        await mockStore.dispatch(checkLogin());
        const stateMockStore = mockStore.getState()[NameSpace.User];

        expect(stateMockStore.email).toBe(mockResponse.email);
        expect(stateMockStore.status).toBe(AuthorizationStatus.Auth);
      });
      it('should return status "NO_AUTH"', async () => {
        const mockStore = setupStore(
          { [NameSpace.User]: mockUserAuthState },
          axios
        );
        const mockResponse = mockCheckLoginError;

        mockAxiosAdapter
          .onGet(APIRoute.Login)
          .reply(mockCheckLoginError.errorCode, mockResponse.response);
        await mockStore.dispatch(checkLogin());
        const stateMockStore = mockStore.getState()[NameSpace.User];

        expect(stateMockStore.email).toBe(initialStateUser.email);
        expect(stateMockStore.status).toBe(AuthorizationStatus.NoAuth);
      });
    });

    describe('userLogin', () => {
      it('should return data of the authorized user', async () => {
        const mockStore = setupStore(
          { [NameSpace.User]: initialStateUser },
          axios
        );
        const mockRequestData = mockLogin();
        const mockResponse = mockUser(mockRequestData);

        mockAxiosAdapter.onPost(APIRoute.Login).reply(200, mockResponse);
        await mockStore.dispatch(userLogin(mockRequestData));
        const stateMockStore = mockStore.getState()[NameSpace.User];

        expect(stateMockStore.email).toBe(mockRequestData.email);
        expect(stateMockStore.status).toBe(AuthorizationStatus.Auth);
      });
      it('should return status "NO_AUTH"', async () => {
        const mockStore = setupStore(
          { [NameSpace.User]: initialStateUser },
          axios
        );
        const mockRequestData = mockLoginNotValid();
        const mockResponse = mockUserLoginError;

        mockAxiosAdapter
          .onPost(APIRoute.Login)
          .reply(mockCheckLoginError.errorCode, mockResponse.response);
        await mockStore.dispatch(userLogin(mockRequestData));
        const stateMockStore = mockStore.getState()[NameSpace.User];

        expect(stateMockStore.email).toBe(initialStateUser.email);
        expect(stateMockStore.status).toBe(AuthorizationStatus.NoAuth);
      });
    });

    describe('userLogout', () => {
      it('should return data of the authorized user', async () => {
        const mockStore = setupStore(
          { [NameSpace.User]: mockUserAuthState },
          axios
        );

        mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
        await mockStore.dispatch(userLogout());
        const stateMockStore = mockStore.getState()[NameSpace.User];

        expect(stateMockStore.email).toBe(initialStateUser.email);
        expect(stateMockStore.status).toBe(AuthorizationStatus.NoAuth);
      });
    });
  });
});
