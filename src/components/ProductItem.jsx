import { useFavoritesStore } from '../store/favoritesStore';
import { formatUSD } from '../utils/formatPrice';

function ProductItem({ product }) {
  const isFavorite = useFavoritesStore((state) => state.favoriteIds.includes(product.id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <div className="flex flex-col gap-3 rounded border p-4 shadow-sm sm:flex-row sm:justify-between sm:items-center sm:gap-4">
      <div className="flex items-center gap-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-16 w-16 shrink-0 rounded object-cover"
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{product.title}</h3>
          <p className="text-sm text-gray-600">{formatUSD(product.price)}</p>
        </div>
      </div>
      <button
        onClick={() => toggleFavorite(product.id)}
        className={`shrink-0 cursor-pointer rounded px-3 py-2 text-sm font-medium ${
          isFavorite ? 'bg-yellow-400 text-white' : 'border text-gray-700'
        }`}
      >
        {isFavorite ? '★ Yêu thích' : '☆ Thêm yêu thích'}
      </button>
    </div>
  );
}

export default ProductItem;
