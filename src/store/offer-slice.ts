import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  loadComments,
  loadNearPlaces,
  loadOffer,
  uploadComment,
  uploadFavorite,
} from './api-actions';
import { Offer, Place, Review, PlacePoint } from '../types/types';
import {
  EMPTY_COMMENTS,
  EMPTY_OFFER,
  EMPTY_PLACE_POINTS,
  EMPTY_PLACES,
  MAX_NEAR_PLACES_ON_MAP,
  MAX_REVIEWS,
  NameSpace,
  ProcessStatus,
} from '../const';

type OfferState = {
  offer: Offer | null;
  loadingOfferStatus: ProcessStatus;
  nearPlaces: Place[];
  isLoadingNearPlaces: boolean;
  comments: Review[];
  isLoadingComments: boolean;
  savingCommentStatus: ProcessStatus;
};

const initialState: OfferState = {
  offer: EMPTY_OFFER,
  loadingOfferStatus: ProcessStatus.Idle,
  nearPlaces: EMPTY_PLACES,
  isLoadingNearPlaces: false,
  comments: EMPTY_COMMENTS,
  isLoadingComments: false,
  savingCommentStatus: ProcessStatus.Idle,
};

const loadingOfferWait = (state: OfferState) => {
  state.offer = EMPTY_OFFER;
  state.loadingOfferStatus = ProcessStatus.Process;
};
const loadingOfferError = (state: OfferState) => {
  state.offer = EMPTY_OFFER;
  state.loadingOfferStatus = ProcessStatus.Error;
};
const loadingOfferEnd = (state: OfferState, action: PayloadAction<Offer>) => {
  state.offer = action.payload;
  state.loadingOfferStatus = ProcessStatus.Success;
};

const loadingNearPlacesWait = (state: OfferState) => {
  state.nearPlaces = EMPTY_PLACES;
  state.isLoadingNearPlaces = true;
};
const loadingNearPlacesError = (state: OfferState) => {
  state.nearPlaces = EMPTY_PLACES;
  state.isLoadingNearPlaces = false;
};
const loadingNearPlacesEnd = (
  state: OfferState,
  action: PayloadAction<Place[]>
) => {
  state.nearPlaces = action.payload;
  state.isLoadingNearPlaces = false;
};

const loadingCommentsWait = (state: OfferState) => {
  state.comments = EMPTY_COMMENTS;
  state.isLoadingComments = true;
};
const loadingCommentsError = (state: OfferState) => {
  state.comments = EMPTY_COMMENTS;
  state.isLoadingComments = false;
};
const loadingCommentsEnd = (
  state: OfferState,
  action: PayloadAction<Review[]>
) => {
  state.comments = action.payload;
  state.isLoadingComments = false;
};

const savingCommentWait = (state: OfferState) => {
  state.savingCommentStatus = ProcessStatus.Process;
};
const savingCommentError = (state: OfferState) => {
  state.savingCommentStatus = ProcessStatus.Error;
};
const savingCommentEnd = (state: OfferState, action: PayloadAction<Review>) => {
  state.comments = [...state.comments, action.payload];
  state.savingCommentStatus = ProcessStatus.Success;
};

const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadOffer.pending, loadingOfferWait)
      .addCase(loadOffer.fulfilled, loadingOfferEnd)
      .addCase(loadOffer.rejected, loadingOfferError)
      .addCase(loadNearPlaces.pending, loadingNearPlacesWait)
      .addCase(loadNearPlaces.fulfilled, loadingNearPlacesEnd)
      .addCase(loadNearPlaces.rejected, loadingNearPlacesError)
      .addCase(loadComments.pending, loadingCommentsWait)
      .addCase(loadComments.fulfilled, loadingCommentsEnd)
      .addCase(loadComments.rejected, loadingCommentsError)
      .addCase(uploadComment.pending, savingCommentWait)
      .addCase(uploadComment.rejected, savingCommentError)
      .addCase(uploadComment.fulfilled, savingCommentEnd)
      .addCase(uploadFavorite.fulfilled, setFavorite);
  },
  selectors: {
    offer: (state) => state.offer,
    loadingOfferStatus: (state) => state.loadingOfferStatus,
    nearPlaces: (state) => state.nearPlaces,
    isLoadingNearPlaces: (state) => state.isLoadingNearPlaces,
    comments: (state) => state.comments,
    isLoadingComments: (state) => state.isLoadingComments,
    commentsCount: (state) => state.comments.length,
    savingCommentStatus: (state) => state.savingCommentStatus,
  },
});

const offerSelectors = {
  ...offerSlice.selectors,
  commentsView: createSelector(offerSlice.selectors.comments, (comments) => {
    comments
      ?.sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        return +date2 - +date1;
      })
      .slice(0, MAX_REVIEWS);
  }),
  pointsInMap: createSelector(
    offerSlice.selectors.offer,
    offerSlice.selectors.nearPlaces,
    (offer, nearPlaces) => {
      if (!offer) {
        return EMPTY_PLACE_POINTS;
      }
      const nearPoints: PlacePoint[] = [offer];
      return nearPoints.concat(nearPlaces.slice(0, MAX_NEAR_PLACES_ON_MAP));
    }
  ),
};

export { offerSelectors };
export default offerSlice.reducer;
