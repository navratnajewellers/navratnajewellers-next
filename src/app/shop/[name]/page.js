import { fetchShopNames } from '@/app/lib/productName';
import ProductGrid from './ProductGrid';

export async function generateStaticParams() {
  const shops = await fetchShopNames(); // Fetch shop names from DB

  return shops.map(shop => ({
    name: shop.name, // Ensure it matches [name] in URL
  }));
}

export default function ProductPage() {
  return (
    <div>
      {/* <h2>Product</h2> */}
      <ProductGrid />
    </div>
  );
}
