import { useProducts } from '../api/useProducts';
import { useFavoritesStore } from '../store/favoritesStore';
import ProductItem from './ProductItem';

function ProductList() {
  const { data: products, isLoading, isFetching, isError, refetch } = useProducts();
  const searchText = useFavoritesStore((state) => state.searchText);
  const filterMode = useFavoritesStore((state) => state.filterMode);
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);

  if (isLoading) return <p className="text-sm text-gray-500">Đang tải...</p>;

  if (isError) {
    return (
      <div className="flex items-center gap-3">
        <p className="text-sm text-red-600">Không tải được danh sách sản phẩm.</p>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="cursor-pointer rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isFetching ? 'Đang thử lại...' : 'Thử lại'}
        </button>
      </div>
    );
  }

  const keyword = searchText.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchKeyword = keyword === '' || product.title.toLowerCase().includes(keyword);
    const matchFilter = filterMode === 'favorite' ? favoriteIds.includes(product.id) : true;
    return matchKeyword && matchFilter;
  });

  if (filteredProducts.length === 0) {
    return <p className="text-sm text-gray-500">Không có sản phẩm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
