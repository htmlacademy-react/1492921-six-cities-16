import {ComponentOptions} from '../../types/types';

type PremiumProps = {
  viewType: ComponentOptions;
}

export default function Premium({viewType}: PremiumProps): JSX.Element {
  return (
    <div className={`${viewType.classPrefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}
