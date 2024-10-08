import { memo } from 'react';
import { ComponentOptions } from '@src/types/types';

type PremiumProps = {
  viewType: ComponentOptions;
};

function PremiumComponent({ viewType }: PremiumProps): JSX.Element {
  return (
    <div className={`${viewType.classPrefix}__mark`} data-testid="test-premium">
      <span>Premium</span>
    </div>
  );
}

const Premium = memo(PremiumComponent);
export default Premium;
