import { memo } from 'react';
import { RatingType } from '@src/const';
import { ComponentOptions } from '@src/types/types';

type RatingProps = {
  valuePercent: number;
  value?: number;
  viewType: ComponentOptions;
};

function RatingComponent({
  valuePercent,
  value,
  viewType,
}: RatingProps): JSX.Element {
  return (
    <div className={`${viewType.classPrefix}__rating rating`}>
      <div className={`${viewType.classPrefix}__stars rating__stars`}>
        <span style={{ width: `${valuePercent}%` }} />
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
