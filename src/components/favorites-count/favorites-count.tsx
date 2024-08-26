import { useAppSelector } from '@src/hooks/store';
import { favoritesSelectors } from '@store/favorites-slice/favorites-slice';

export default function FavoritesCount(): JSX.Element {
  const favoritesCount = useAppSelector(favoritesSelectors.count);
  return <span className="header__favorite-count">{favoritesCount}</span>;
}
