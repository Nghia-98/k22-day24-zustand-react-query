import SearchBar from './components/SearchBar';
import FilterToggle from './components/FilterToggle';
import FavoriteCounter from './components/FavoriteCounter';
import ProductSummary from './components/ProductSummary';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900">Khám phá sản phẩm</h1>

        <SearchBar />

        <div className="flex items-center justify-between">
          <FilterToggle />
          <FavoriteCounter />
        </div>

        <ProductSummary />

        <ProductList />
      </div>
    </div>
  );
}

export default App;
