// This file handles static generation and dynamic routes
import { client } from '@/app/lib/client';

export async function generateStaticParams() {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  // Generate static paths for each product slug
  return products.map(product => ({
    slug: product.slug.current,  // dynamic slug
  }));
}

// This component is responsible for fetching data on the server
export async function getProductData(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productsQuery = '*[_type == "product"]';
  const bannerQuery = '*[_type == "banner"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  const bannerData = await client.fetch(bannerQuery);

  return { product, products, bannerData };
}
