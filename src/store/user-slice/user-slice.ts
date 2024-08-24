import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@src/types/types';
import { checkLogin, userLogin, userLogout } from '@store/api-actions';
import { AuthorizationStatus } from '@src/const';

type UserState = {
  email: string;
  status: AuthorizationStatus;
};

const initialState: UserState = {
  email: '',
  status: AuthorizationStatus.Unknown,
};

const userWaitAuth = (state: UserState) => {
  state.status = AuthorizationStatus.Unknown;
};

const userNoAuth = (state: UserState) => {
  state.status = AuthorizationStatus.NoAuth;
  state.email = '';
};

const userAuth = (state: UserState, action: PayloadAction<User>) => {
  state.status = AuthorizationStatus.Auth;
  state.email = action.payload.email ?? '';
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

export { initialState, userSelectors };
export type { UserState };

export default userSlice.reducer;
