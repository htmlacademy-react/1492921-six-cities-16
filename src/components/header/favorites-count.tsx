import { useAppSelector } from '../../hooks/store';
import { favoritesSelectors } from '../../store/favorite-slice/favorites-slice';

export default function FavoritesCount(): JSX.Element {
  const favoritesCount = useAppSelector(favoritesSelectors.count);
  return <span className="header__favorite-count">{favoritesCount}</span>;
}
