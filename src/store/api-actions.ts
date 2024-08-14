import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  Login,
  Offer,
  Place,
  Review,
  User,
  PlaceFavorite,
} from '../types/types';
import { AppDispatch, RootState } from './store';
import { APIRoute, NameSpace } from '../const';
import { dropToken, setToken } from '../services/token';

export type AsyncThunkOptions = {
  state: RootState;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const loadOffers = createAsyncThunk<
  Place[],
  undefined,
  AsyncThunkOptions
>(`${NameSpace.Places}/loadOffers`, async (_arg, { extra: api }) => {
  const { data } = await api.get<Place[]>(APIRoute.Offers);
  return data;
});

export const loadFavorite = createAsyncThunk<
  Place[],
  undefined,
  AsyncThunkOptions
>(`${NameSpace.Favorites}/loadFavorite`, async (_arg, { extra: api }) => {
  const { data } = await api.get<Place[]>(APIRoute.Favorite);
  return data;
});

export const uploadFavorite = createAsyncThunk<
  Place,
  PlaceFavorite,
  AsyncThunkOptions
>(
  `${NameSpace.Favorites}/uploadFavorite`,
  async (placeFavorite, { extra: api }) => {
    const { data } = await api.post<Place>(
      APIRoute.FavoritePost.replace('{offerId}', placeFavorite.id).replace(
        '{status}',
        placeFavorite.isFavorite ? '1' : '0'
      )
    );
    return data;
  }
);

export const loadOffer = createAsyncThunk<Offer, string, AsyncThunkOptions>(
  `${NameSpace.Offer}/loadOffer`,
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(
      APIRoute.Offer.replace('{offerId}', offerId)
    );
    return data;
  }
);

export const loadNearPlaces = createAsyncThunk<
  Place[],
  string,
  AsyncThunkOptions
>(`${NameSpace.Offer}loadNearPlaces`, async (offerId, { extra: api }) => {
  const { data } = await api.get<Place[]>(
    APIRoute.OffersNear.replace('{offerId}', offerId)
  );
  return data;
});

export const loadComments = createAsyncThunk<
  Review[],
  string,
  AsyncThunkOptions
>(`${NameSpace.Offer}/loadComments`, async (offerId, { extra: api }) => {
  const { data } = await api.get<Review[]>(
    APIRoute.Comments.replace('{offerId}', offerId)
  );
  return data;
});

export const uploadComment = createAsyncThunk<
  Review,
  { offerId: string; comment: string; rating: number },
  AsyncThunkOptions
>(
  `${NameSpace.Offer}/uploadComment'`,
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review>(
      APIRoute.Comments.replace('{offerId}', offerId),
      {
        comment: comment,
        rating: rating,
      }
    );
    return data;
  }
);

export const checkLogin = createAsyncThunk<User, undefined, AsyncThunkOptions>(
  `${NameSpace.User}/checkLogin`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Login);
    return data;
  }
);

export const userLogin = createAsyncThunk<User, Login, AsyncThunkOptions>(
  `${NameSpace.User}/userLogin`,
  async (login, { extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, {
      email: login.email,
      password: login.password,
    });
    setToken(data.token ?? '');
    return data;
  }
);

export const userLogout = createAsyncThunk<void, undefined, AsyncThunkOptions>(
  `${NameSpace.User}/userLogout`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
