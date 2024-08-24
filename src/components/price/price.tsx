import { PriceType } from '@src/const';
import { ComponentOptions } from '@src/types/types';

type PriceProps = {
  value: number;
  viewType: ComponentOptions;
};

export default function Price({ value, viewType }: PriceProps): JSX.Element {
  return (
    <div className={`${viewType.classPrefix}__price`}>
      <b className={`${viewType.classPrefix}__price-value`}>&euro;{value}</b>
      <span className={`${viewType.classPrefix}__price-text`}>
        {viewType === PriceType.Place ? (
          <>&#47;&nbsp;night</>
        ) : (
          <>&nbsp;night</>
        )}
      </span>
    </div>
  );
}
