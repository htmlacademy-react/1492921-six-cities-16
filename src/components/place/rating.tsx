import {MAX_RATING} from '../../const';

type RatingProps = {
  value: number;
}

export default function Logo({value}: RatingProps): JSX.Element {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${value * 100 / MAX_RATING}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
