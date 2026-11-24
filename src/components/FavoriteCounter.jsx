import { useFavoritesStore } from '../store/favoritesStore';

function FavoriteCounter() {
  const favoriteCount = useFavoritesStore((state) => state.favoriteIds.length);

  return <p className="text-sm text-gray-600">Yêu thích: {favoriteCount}</p>;
}

export default FavoriteCounter;
