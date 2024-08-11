import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/types';
import { checkLogin, userLogin, userLogout } from './api-actions';
import { setToken } from '../services/token';
import { AuthorizationStatus } from '../const';

type userState = {
  email: string;
  status: AuthorizationStatus;
};

const initialState: userState = {
  email: '',
  status: AuthorizationStatus.Unknown,
};

const userWaitAuth = (state: userState) => {
  state.status = AuthorizationStatus.Unknown;
};

const userNoAuth = (state: userState) => {
  state.status = AuthorizationStatus.NoAuth;
  state.email = '';
};

const userAuth = (state: userState, action: PayloadAction<User>) => {
  state.status = AuthorizationStatus.Auth;
  state.email = action.payload.email ?? '';
  setToken(action.payload.token ?? '');
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkLogin.pending, userWaitAuth)
      .addCase(checkLogin.fulfilled, userAuth)
      .addCase(checkLogin.rejected, userNoAuth)
      .addCase(userLogin.fulfilled, userAuth)
      .addCase(userLogin.rejected, userNoAuth)
      .addCase(userLogout.fulfilled, userNoAuth);
  },
  selectors: {
    email: (state) => state.email,
    status: (state) => state.status,
    isLogged: (state) => state.status === AuthorizationStatus.Auth,
  },
});

const userSelectors = userSlice.selectors;

export { userSelectors };
export default userSlice.reducer;
