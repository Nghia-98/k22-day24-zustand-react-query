# Day 24 - Product Explorer (Zustand + TanStack Query)

Repo: [https://github.com/Nghia-98/k22-day24-zustand-react-query](https://github.com/Nghia-98/k22-day24-zustand-react-query)

Demo: [https://k22-day24-zustand-react-query.vercel.app](https://k22-day24-zustand-react-query.vercel.app)

Trang khám phá sản phẩm: tìm kiếm theo tên, đánh dấu/bỏ đánh dấu yêu thích,
lọc theo Tất cả/Yêu thích. Tách rõ 2 loại state — **client state** (từ
khoá tìm kiếm, chế độ lọc, danh sách ID yêu thích) quản lý bằng Zustand, và
**server state** (danh sách sản phẩm từ API) quản lý bằng TanStack Query.

## Cài đặt & chạy dự án

```bash
npm install
npm run dev      # chạy dev server
npm run build    # build production ra dist/
npm run preview  # xem thử bản build
```

## Cấu trúc & vai trò từng phần

- `src/api/useProducts.js`: `fetchProducts()` gọi `GET
  https://dummyjson.com/products`, kiểm tra `response.ok` trước khi đọc
  JSON; `useProducts()` bọc `useQuery({ queryKey: ['products'], queryFn:
  fetchProducts })`.
- `src/store/favoritesStore.js`: Zustand store chứa `searchText`,
  `filterMode` (`'all' | 'favorite'`), `favoriteIds`. Action
  `toggleFavorite(id)` không mutate mảng cũ — dùng `.filter()`/spread tạo
  mảng mới, không thêm trùng ID.
- `src/components/SearchBar.jsx`, `FilterToggle.jsx`,
  `FavoriteCounter.jsx`: mỗi component chỉ đọc đúng phần state cần qua
  selector của Zustand (`useFavoritesStore((s) => s.xxx)`), không nhận
  state qua props từ `App`.
- `src/components/ProductList.jsx`: gọi `useProducts()`, lọc kết hợp
  `searchText` (không phân biệt hoa/thường trên `title`) +
  `favoriteIds` (khi `filterMode === 'favorite'`) trên mảng đã fetch.
  Hiển thị "Đang tải..." (`isLoading`), thông báo lỗi kèm nút "Thử lại"
  (`refetch()`, disable qua `isFetching` khi đang chạy lại), và thông báo
  khi lọc ra rỗng.
- `src/components/ProductSummary.jsx`: cũng gọi `useProducts()` — **cùng
  `queryKey: ['products']`** với `ProductList`, nên TanStack Query chỉ gọi
  API 1 lần, 2 component cùng đọc chung 1 cache entry (không tạo request
  hay kho dữ liệu riêng).
- `src/App.jsx`: tạo `QueryClient` ở `main.jsx`, bọc `QueryClientProvider`
  ngoài `App`; compose toàn bộ UI, không truyền state/props trung gian.

## Cách kiểm tra 2 component dùng chung 1 query

Mở DevTools → tab Network, lọc theo `dummyjson.com` → chỉ thấy **1 request**
dù cả `ProductSummary` và `ProductList` đều gọi `useProducts()`.
