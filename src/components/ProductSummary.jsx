import { useProducts } from '../api/useProducts';

function ProductSummary() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return null;
  if (isError) return null;

  return <p className="text-sm text-gray-600">Tổng số sản phẩm: {products.length}</p>;
}

export default ProductSummary;
