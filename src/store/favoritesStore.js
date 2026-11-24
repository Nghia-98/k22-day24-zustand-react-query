import { create } from 'zustand';

export const useFavoritesStore = create((set) => ({
  searchText: '',
  filterMode: 'all', // 'all' | 'favorite'
  favoriteIds: [],

  setSearchText: (text) => set({ searchText: text }),

  setFilterMode: (mode) => set({ filterMode: mode }),

  toggleFavorite: (id) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(id)
        ? state.favoriteIds.filter((favId) => favId !== id)
        : [...state.favoriteIds, id],
    })),
}));
