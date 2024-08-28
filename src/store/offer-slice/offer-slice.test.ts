import { setupStore } from '@store/store';
import { mockPlaces, mockReview, mockReviews } from '@src/mock/mock-offer';
import { MAX_NEAR_PLACES, NameSpace, ReviewSetup } from '@src/const';
import { initialState, offerSelectors } from './offer-slice';

describe('offerSlice reducer', () => {
  
  describe('commentsView selector', () => {
    it(`should selected ${ReviewSetup.MaxComments} comments`, () => {
      const mockStore = setupStore({
        [NameSpace.Offer]: {
          ...initialState,
          comments: mockReviews(12),
        },
      });

      const result = offerSelectors.commentsView(mockStore.getState());

      expect(result.length).toBe(ReviewSetup.MaxComments);
    });

    it('should selected sorted for date', () => {
      const mockReviewsNotSorted = [
        mockReview('2023-10-12'),
        mockReview('2024-02-01'),
        mockReview('2024-01-10'),
      ];
      const mockStore = setupStore({
        [NameSpace.Offer]: {
          ...initialState,
          comments: mockReviewsNotSorted,
        },
      });

      const result = offerSelectors.commentsView(mockStore.getState());

      expect(result[0]).toEqual(mockReviewsNotSorted[1]);
      expect(result[1]).toEqual(mockReviewsNotSorted[2]);
      expect(result[2]).toEqual(mockReviewsNotSorted[0]);
    });
  });

  describe('nearPlaces selector', () => {
    it(`should selected ${MAX_NEAR_PLACES} places in the neighbourhood`, () => {
      const mockStore = setupStore({
        [NameSpace.Offer]: {
          ...initialState,
          nearPlaces: mockPlaces(6),
        },
      });

      const result = offerSelectors.nearPlacesView(mockStore.getState());

      expect(result.length).toBe(MAX_NEAR_PLACES);
    });
  });
});
