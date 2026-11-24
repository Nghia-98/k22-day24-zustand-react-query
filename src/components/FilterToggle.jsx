import { useFavoritesStore } from '../store/favoritesStore';

function FilterToggle() {
  const filterMode = useFavoritesStore((state) => state.filterMode);
  const setFilterMode = useFavoritesStore((state) => state.setFilterMode);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFilterMode('all')}
        className={`cursor-pointer rounded px-3 py-2 text-sm font-medium ${
          filterMode === 'all' ? 'bg-blue-600 text-white' : 'border text-gray-700'
        }`}
      >
        Tất cả
      </button>
      <button
        onClick={() => setFilterMode('favorite')}
        className={`cursor-pointer rounded px-3 py-2 text-sm font-medium ${
          filterMode === 'favorite' ? 'bg-blue-600 text-white' : 'border text-gray-700'
        }`}
      >
        Yêu thích
      </button>
    </div>
  );
}

export default FilterToggle;
