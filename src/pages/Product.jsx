import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import products from '../data/products.json';
import { imageMap } from '../data/imageMap.js';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((item) => item.id === id);
  const [variant, setVariant] = useState(product?.variant[0] || '');
  const image = imageMap[product?.image] || '';

  if (!product) {
    return (
      <section className="bg-[#f4efe6] px-5 py-20 text-center text-[#111]">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8A7A56]">Product not found</p>
          <Link to="/shop" className="mt-6 inline-block text-sm uppercase tracking-[0.35em] text-[#111] underline">
            Return to Shop
          </Link>
        </div>
      </section>
    );
  }

  const handleAdd = () => {
    addItem(product, variant);
  };

  const handleCheckout = () => {
    addItem(product, variant);
    navigate('/checkout');
  };

  return (
    <section className="bg-[#f4efe6] text-[#111]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-none">
            <img src={image} alt={product.name} className="h-[320px] w-full object-cover sm:h-[520px]" />
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">{product.brand} · {product.category}</p>
              <h1 className="mt-4 text-[2.6rem] font-serif uppercase tracking-[-0.04em] leading-[1.0] sm:text-[4.2rem] lg:text-[4.8rem]">
                {product.name}
              </h1>
              <div className="mt-6 text-[2rem] uppercase tracking-[0.35em] text-[#D2C08B]">
                ₦{product.price.toLocaleString()}
              </div>
            </div>
            <p className="max-w-xl text-lg leading-9 text-[#111]/70">
              {product.description}
            </p>
            <div className="space-y-8">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Variant</div>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  className="mt-4 w-full rounded-none border border-[#111]/10 bg-transparent px-4 py-3 text-[#111] outline-none"
                >
                  {product.variant.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.35em] text-[#111]/80">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="rounded-none border border-[#111]/10 bg-[#111] px-6 py-4 text-white transition hover:bg-[#333]"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="rounded-none border border-[#D2C08B] px-6 py-4 text-sm uppercase tracking-[0.35em] text-[#111] transition hover:bg-[#D2C08B]/10"
                >
                  Checkout
                </button>
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#111]/60">
              Available now · Free delivery on orders above ₦30,000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
