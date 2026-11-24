import { useFavoritesStore } from '../store/favoritesStore';

function SearchBar() {
  const searchText = useFavoritesStore((state) => state.searchText);
  const setSearchText = useFavoritesStore((state) => state.setSearchText);

  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Tìm theo tên sản phẩm..."
      className="w-full rounded-xl bg-white px-4 py-3 text-sm shadow-md outline-none focus:ring-2 focus:ring-emerald-500"
    />
  );
}

export default SearchBar;
