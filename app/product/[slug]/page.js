// page.js: This is the main page where the static data will be passed to the client component
import { getProductData } from './ProductServer';
import ProductDetails from './ProductClient';

export default async function Page({ params }) {
  const { slug } = params;
  const { product, products, bannerData } = await getProductData(slug);

  return <ProductDetails product={product} products={products} />;
}

