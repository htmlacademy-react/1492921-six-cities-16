import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Place } from '../types/types';
import { AppDispatch, RootState } from './store';
import { APIRoute } from '../const';

type AsyncThunkOptions = {
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
