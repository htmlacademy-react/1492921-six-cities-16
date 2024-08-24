import { render, screen } from '@testing-library/react';
import { Premium } from '@components';
import { PremiumType } from '@src/const';
import { ComponentOptions } from '@src/types/types';

describe('Premium component', () => {
  const testPremium = (viewType: ComponentOptions) => {
    const testId = 'test-premium';
    const expectedText = 'Premium';
    render(<Premium viewType={viewType} />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(testId).className).toBe(
      `${viewType.classPrefix}__mark`
    );
  };

  it('render correctly, "place-card"', () => {
    testPremium(PremiumType.Place);
  });

  it('render correctly, "offer"', () => {
    testPremium(PremiumType.Offer);
  });
});
