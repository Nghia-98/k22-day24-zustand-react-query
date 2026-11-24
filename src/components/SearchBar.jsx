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
      className="w-full rounded border px-3 py-2 text-sm shadow-sm"
    />
  );
}

export default SearchBar;
