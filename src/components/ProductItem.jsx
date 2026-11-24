import { useFavoritesStore } from '../store/favoritesStore';
import { formatUSD } from '../utils/formatPrice';

function ProductItem({ product }) {
  const isFavorite = useFavoritesStore((state) => state.favoriteIds.includes(product.id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-md sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex items-center gap-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-16 w-16 shrink-0 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{product.title}</h3>
          <p className="text-sm text-gray-500">{formatUSD(product.price)}</p>
        </div>
      </div>
      <button
        onClick={() => toggleFavorite(product.id)}
        className={`shrink-0 cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition ${
          isFavorite ? 'bg-amber-400 text-white shadow-md' : 'bg-gray-100 text-gray-600'
        }`}
      >
        {isFavorite ? '★ Yêu thích' : '☆ Thêm yêu thích'}
      </button>
    </div>
  );
}

export default ProductItem;
