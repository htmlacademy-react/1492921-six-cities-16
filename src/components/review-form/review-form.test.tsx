import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from './review-form';
import { mockInitialState, withStore } from '@src/mock/mock';

describe('ReviewForm component', () => {
  const ratingValue = '2';
  const incorrectReviewValue = '12345';
  const correctReviewValue = Array.from({ length: 60 }).join('1');

  it('should render & button disable ', async () => {
    const component = withStore(
      <ReviewForm offerId={'123'} />,
      mockInitialState
    ).withStoreComponent;

    const { getByRole, getByDisplayValue } = render(component);
    const button = getByRole('button');
    await userEvent.click(getByDisplayValue(ratingValue));
    await userEvent.type(getByRole('textbox'), incorrectReviewValue);

    expect(getByDisplayValue(incorrectReviewValue)).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('should render & button enable ', async () => {
    const component = withStore(
      <ReviewForm offerId={'123'} />,
      mockInitialState
    ).withStoreComponent;

    const { getByRole, getByDisplayValue } = render(component);
    const button = getByRole('button');
    await userEvent.click(getByDisplayValue(ratingValue));
    await userEvent.type(getByRole('textbox'), correctReviewValue);

    expect(getByDisplayValue(correctReviewValue)).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
