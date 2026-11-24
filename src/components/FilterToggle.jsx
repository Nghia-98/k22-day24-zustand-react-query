import { useFavoritesStore } from '../store/favoritesStore';

function FilterToggle() {
  const filterMode = useFavoritesStore((state) => state.filterMode);
  const setFilterMode = useFavoritesStore((state) => state.setFilterMode);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFilterMode('all')}
        className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition ${
          filterMode === 'all' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-600 shadow-sm'
        }`}
      >
        Tất cả
      </button>
      <button
        onClick={() => setFilterMode('favorite')}
        className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition ${
          filterMode === 'favorite' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-600 shadow-sm'
        }`}
      >
        Yêu thích
      </button>
    </div>
  );
}

export default FilterToggle;
