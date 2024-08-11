import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/types';
import { checkLogin, userLogin, userLogout } from './api-actions';
import { dropToken, setToken } from '../services/token';
import { AuthorizationStatus } from '../const';

const EMPTY_USER = {} as User;

type userState = {
  user: User;
  status: AuthorizationStatus;
};

const initialState: userState = {
  user: EMPTY_USER,
  status: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkLogin.pending, (state) => {
        state.status = AuthorizationStatus.Unknown;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.status = AuthorizationStatus.Auth;
        state.user = action.payload;
        setToken(action.payload.token ?? '');
      })
      .addCase(checkLogin.rejected, (state) => {
        state.status = AuthorizationStatus.NoAuth;
        state.user = EMPTY_USER;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = AuthorizationStatus.Auth;
        state.user = action.payload;
        setToken(action.payload.token ?? '');
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = AuthorizationStatus.NoAuth;
        state.user = EMPTY_USER;
      })
      .addCase(userLogout.fulfilled, (state) => {
        dropToken();
        state.status = AuthorizationStatus.NoAuth;
        state.user = EMPTY_USER;
      });
  },
  selectors: {
    user: (state) => state.user,
    status: (state) => state.status,
    isLogged: (state) => state.status === AuthorizationStatus.Auth,
  },
});

export const userSelectors = userSlice.selectors;
export default userSlice.reducer;
