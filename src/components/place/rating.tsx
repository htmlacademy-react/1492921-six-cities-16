import { RatingSetup, RatingType } from '../../const';
import { ComponentOptions } from '../../types/types';

type RatingProps = {
  value: number;
  viewType: ComponentOptions;
};

export default function Rating({ value, viewType }: RatingProps): JSX.Element {
  return (
    <div className={`${viewType.classPrefix}__rating rating`}>
      <div className={`${viewType.classPrefix}__stars rating__stars`}>
        <span
          style={{
            width: `${Math.round((value * 100) / RatingSetup.MaxRating)}%`,
          }}
        />

        <span className="visually-hidden">Rating</span>
      </div>
      {viewType === RatingType.Offer && (
        <span className="offer__rating-value rating__value">{value}</span>
      )}
    </div>
  );
}
