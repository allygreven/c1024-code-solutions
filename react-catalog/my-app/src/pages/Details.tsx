import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { type Product, toDollars, readProduct } from '../lib';

export function Details() {
  const [product, setProducts] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProducts(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  if (!product) return null;

  const { name, price, imageUrl, longDescription, shortDescription } = product;

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            Back to Catalog
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
            <span className="font-bold">{toDollars(price)}</span>
            <p>{shortDescription}</p>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              alert('Product was added to cart');
              navigate('/');
            }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
