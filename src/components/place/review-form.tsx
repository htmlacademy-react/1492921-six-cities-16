import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import { RatingStars } from '../../const';
import { ReviewFormSetup } from '../../const';

type RatingStarProps = {
  value: number;
  title: (typeof RatingStars)[number];
  rating: number;
  onRatingChange: ChangeEventHandler<HTMLInputElement>;
};
function RatingStar({
  value,
  title,
  rating,
  onRatingChange,
}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={value === rating}
        onChange={onRatingChange}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type ReviewFormProps = {
  offerId: string;
};

export default function ReviewForm({
  offerId: _unused,
}: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    textReview: '',
  });

  const isSubmitDisabled =
    !formData.rating ||
    formData.textReview.length < ReviewFormSetup.MinChars ||
    formData.textReview.length > ReviewFormSetup.MaxChars;

  const textChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, textReview: evt.target.value });
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: +evt.target.value });
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // eslint-disable-next-line no-alert
    alert(
      `Отправка на сервер\nРейтинг = ${formData.rating}\nТекст=${formData.textReview}`
    );
    setFormData({
      rating: 0,
      textReview: '',
    });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={formSubmitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RatingStars.map((name, index) => (
          <RatingStar
            key={name}
            value={RatingStars.length - index}
            title={name}
            rating={formData.rating}
            onRatingChange={ratingChangeHandler}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.textReview}
        onInput={textChangeHandler}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {ReviewFormSetup.MinChars} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
