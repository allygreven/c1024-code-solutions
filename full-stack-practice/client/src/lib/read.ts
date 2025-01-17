import { type Product } from './data';

export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = (await response.json()) as Product[];
  return data;
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    if (response.status === 404) {
      return undefined;
    }
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }
  const data: Product = await response.json();
  return data;
}
