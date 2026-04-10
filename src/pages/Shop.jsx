import { useMemo, useState } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard.jsx';

const categories = ['All', ...new Set(products.map((product) => product.category))];

function Shop() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () => products.filter((product) => category === 'All' || product.category === category),
    [category]
  );

  return (
    <section className="bg-white px-5 py-16 text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 border-b border-white/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">Shop</div>
            <h1 className="mt-3 text-4xl font-serif text-[#0A0A0A]">All Collections</h1>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#0A0A0A]">
              <span>Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-none border border-[#C9A84C] bg-white px-3 py-2 text-[#0A0A0A]"
              >
                {categories.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-none border border-[#C9A84C22] bg-white p-10 text-center text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
              No products match those filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Shop;
