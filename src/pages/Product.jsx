import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext.jsx';
import { imageMap } from '../data/imageMap.js';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((item) => item.id === id);
  const [variant, setVariant] = useState(product?.variant[0] || '');

  const image = imageMap[product?.image] || '';

  const handleAdd = () => {
    if (product) {
      addItem(product, variant);
      navigate('/shop');
    }
  };

  if (!product) {
    return (
      <section className="bg-white px-5 py-20 text-center text-[#0A0A0A]">
        <div className="mx-auto max-w-3xl border border-white/20 bg-white p-10">
          <p className="text-lg uppercase tracking-[0.35em] text-[#C9A84C]">Product not found</p>
          <Link to="/shop" className="mt-6 inline-block rounded-none border border-[#C9A84C] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-black">
            Return to Shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-white/20 bg-white p-6">
          <img src={image} alt={product.name} className="w-full object-cover" />
        </div>
        <div className="space-y-6">
          <Link to="/shop" className="text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Back to shop</Link>
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">{product.category}</div>
            <h1 className="text-4xl font-serif text-[#0A0A0A]">{product.name}</h1>
            <p className="text-sm uppercase tracking-[0.2em] text-[#0A0A0A]/80">Contact for pricing</p>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#0A0A0A]/80">{product.description}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="border border-[#C9A84C] bg-white p-4 text-sm uppercase tracking-[0.25em] text-[#0A0A0A]">
              Variant
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="mt-3 w-full border-none bg-transparent text-[#0A0A0A] outline-none"
              >
                {product.variant.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <div className="border border-[#C9A84C] bg-white p-4 text-sm uppercase tracking-[0.25em] text-[#0A0A0A]">
              Delivery
              <p className="mt-3 text-base text-[#0A0A0A]/80">Free delivery on orders above ₦30,000</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-none bg-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-black transition hover:bg-[#f5df8a]"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={() => {
                addItem(product, variant);
                navigate('/checkout');
              }}
              className="rounded-none border border-[#C9A84C] px-6 py-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-black"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
