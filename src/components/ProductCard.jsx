import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { imageMap } from '../data/imageMap.js';

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const { addItem } = useCart();
  const image = imageMap[product.image];

  return (
    <div
      className="group relative overflow-hidden border border-white/20 bg-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[#C9A84C]" />
      <div className="absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 border-[#C9A84C]" />
      <Link to={`/product/${product.id}`} className="block p-5">
        <img src={image} alt={product.name} className="h-60 w-full object-cover" />
        <div className="mt-5 space-y-2">
          <div className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">{product.name}</div>
          <div className="text-sm uppercase tracking-[0.15em] text-[#0A0A0A]/80">Contact for pricing</div>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => addItem(product, product.variant[0])}
        className={`absolute bottom-0 left-0 right-0 translate-y-full bg-[#C9A84C] px-4 py-4 text-sm uppercase tracking-[0.35em] text-black transition duration-300 ${hover ? 'translate-y-0' : ''}`}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
