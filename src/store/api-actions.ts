import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Login, Offer, Place, Review, User } from '../types/types';
import { AppDispatch, RootState } from './store';
import { APIRoute } from '../const';
import { dropToken } from '../services/token';

export type AsyncThunkOptions = {
  state: RootState;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const loadOffers = createAsyncThunk<
  Place[],
  undefined,
  AsyncThunkOptions
>('places/loadOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Place[]>(APIRoute.Offers);
  return data;
});

export const loadOffer = createAsyncThunk<Offer, string, AsyncThunkOptions>(
  'offer/loadOffer',
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
>('offer/loadNearPlaces', async (offerId, { extra: api }) => {
  const { data } = await api.get<Place[]>(
    APIRoute.OffersNear.replace('{offerId}', offerId)
  );
  return data;
});

export const loadFavorite = createAsyncThunk<
  Place[],
  undefined,
  AsyncThunkOptions
>('places/loadFavorite', async (_arg, { extra: api }) => {
  const { data } = await api.get<Place[]>(APIRoute.Favorite);
  return data;
});

export const uploadFavorite = createAsyncThunk<
  Offer,
  { offerId: string; isFavorite: boolean },
  AsyncThunkOptions
>('places/uploadFavorite', async ({ offerId, isFavorite }, { extra: api }) => {
  const { data } = await api.post<Offer>(
    APIRoute.FavoritePost.replace('{offerId}', offerId).replace(
      '{status}',
      isFavorite ? '1' : '0'
    )
  );
  return data;
});

export const loadComments = createAsyncThunk<
  Review[],
  string,
  AsyncThunkOptions
>('places/loadComments', async (offerId, { extra: api }) => {
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
  'places/uploadComment',
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
  'user/checkLogin',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Login);
    return data;
  }
);

export const userLogin = createAsyncThunk<User, Login, AsyncThunkOptions>(
  'user/userLogin',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, {
      email: email,
      password: password,
    });
    return data;
  }
);

export const userLogout = createAsyncThunk<void, undefined, AsyncThunkOptions>(
  'user/userLogout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
