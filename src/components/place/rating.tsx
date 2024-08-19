import { memo } from 'react';
import { RatingType } from '../../const';
import { ComponentOptions } from '../../types/types';

type RatingProps = {
  value: number;
  viewType: ComponentOptions;
};

function RatingComponent({ value, viewType }: RatingProps): JSX.Element {
  return (
    <div className={`${viewType.classPrefix}__rating rating`}>
      <div className={`${viewType.classPrefix}__stars rating__stars`}>
        <span style={{ width: `${value}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {viewType === RatingType.Offer && (
        <span className="offer__rating-value rating__value">{value}</span>
      )}
    </div>
  );
}

const Rating = memo(RatingComponent);

export default Rating;
