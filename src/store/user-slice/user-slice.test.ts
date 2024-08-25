import reducer, { initialState, UserState } from '@store/user-slice/user-slice';
import {
  getUserAuthState,
  mockLogin,
  mockUser,
  mockUserAuthState,
  mockUserNoAuthState,
  mockUserUnknownState,
} from '@src/mock/mock-user';
import { checkLogin, userLogin, userLogout } from '@store/api-actions';

describe('userSlice reducer', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('checkLogin.fulfilled', () => {
    const initState: UserState = mockUserUnknownState;

    const resultState = reducer(
      initState,
      checkLogin.fulfilled(mockUser, '', undefined)
    );

    expect(resultState).toEqual(getUserAuthState(mockUser.email));
  });

  it('checkLogin.rejected', () => {
    const resultState = reducer(
      initialState,
      checkLogin.rejected(null, '', undefined)
    );

    expect(resultState).toEqual(mockUserNoAuthState);
  });

  it('userLogin.fulfilled', () => {
    const resultState = reducer(
      initialState,
      userLogin.fulfilled(mockUser, '', mockLogin)
    );
    expect(resultState).toEqual(getUserAuthState(mockLogin.email));
  });

  it('userLogin.rejected', () => {
    const resultState = reducer(
      initialState,
      userLogin.rejected(null, '', mockLogin)
    );
    expect(resultState).toEqual(mockUserNoAuthState);
  });

  it('userLogout.fulfilled', () => {
    const resultState = reducer(
      mockUserAuthState,
      userLogout.fulfilled(undefined, '', undefined)
    );
    expect(resultState).toEqual(mockUserNoAuthState);
  });
});
