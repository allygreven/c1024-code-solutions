import { Link } from 'react-router-dom';
import { Product, toDollars } from '../lib';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div>
      <div className="border rounded border-gray-300">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-80 object-contain"
        />
        <Link
          to={`/details/${product.productId}`}
          className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4 font-bold mb-3 text-black">
          {product.name}
        </Link>
        <div className="flex-auto p-6">
          <span>{toDollars(product.price)}</span>
          <p>{product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
