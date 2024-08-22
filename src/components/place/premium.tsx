import { memo } from 'react';
import { ComponentOptions } from '../../types/types';

type PremiumProps = {
  viewType: ComponentOptions;
};

function PremiumComponent({ viewType }: PremiumProps): JSX.Element {
  return (
    <div className={`${viewType.classPrefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}

const Premium = memo(PremiumComponent);
export default Premium;
