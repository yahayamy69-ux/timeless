import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import products from '../data/products.json';
import { imageMap } from '../data/imageMap.js';

function Shop() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const [brand, setBrand] = useState(search.get('brand') || 'All');
  const [category, setCategory] = useState(search.get('category') || 'All');
  const [price, setPrice] = useState(search.get('price') || 'All');

  const brands = ['All', ...new Set(products.map((product) => product.brand))];
  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const prices = [
    { label: 'All prices', value: 'All' },
    { label: '₦35,000–₦37,000', value: '35-37' },
    { label: '₦37,000–₦39,000', value: '37-39' },
    { label: '₦39,000+', value: '39-40' },
  ];

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesBrand = brand === 'All' || product.brand === brand;
      const matchesCategory = category === 'All' || product.category === category;
      let matchesPrice = true;

      if (price === '35-37') matchesPrice = product.price >= 35000 && product.price <= 37000;
      if (price === '37-39') matchesPrice = product.price > 37000 && product.price <= 39000;
      if (price === '39-40') matchesPrice = product.price > 39000;

      return matchesBrand && matchesCategory && matchesPrice;
    });
  }, [brand, category, price]);

  return (
    <section className="bg-[#f4efe6] text-[#111]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Shop</span>
        <h1 className="mt-6 text-[2.8rem] font-serif uppercase tracking-[-0.04em] leading-[1.0] sm:text-[4rem] lg:text-[5.2rem]">
          A curated selection of watches.
        </h1>
        <p className="mt-10 max-w-3xl text-lg leading-9 text-[#111]/70">
          Browse by brand, category, and price with calm, editorial clarity.
        </p>

        <div className="mt-16 flex flex-col gap-4 text-sm uppercase tracking-[0.35em] text-[#111]/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[#8A7A56]">Brand</span>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="rounded-none border border-[#111]/10 bg-transparent px-3 py-2 text-[#111]"
            >
              {brands.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#8A7A56]">Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-none border border-[#111]/10 bg-transparent px-3 py-2 text-[#111]"
            >
              {categories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#8A7A56]">Price</span>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="rounded-none border border-[#111]/10 bg-transparent px-3 py-2 text-[#111]"
            >
              {prices.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 text-sm uppercase tracking-[0.35em] text-[#111]/60">
          {filtered.length} watch{filtered.length === 1 ? '' : 'es'} available
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {filtered.map((product) => (
            <article key={product.id} className="overflow-hidden">
              <Link to={`/product/${product.id}`} className="block overflow-hidden">
                <img
                  src={imageMap[product.image]}
                  alt={product.name}
                  className="h-[320px] w-full object-cover transition duration-1000 hover:scale-[1.02] sm:h-[420px] lg:h-[520px]"
                />
              </Link>
              <div className="mt-8 max-w-full">
                <p className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">{product.brand}</p>
                <h2 className="mt-4 text-3xl font-serif uppercase tracking-[-0.03em] leading-[1.05]">
                  <Link to={`/product/${product.id}`} className="transition hover:text-[#8A7A56]">
                    {product.name}
                  </Link>
                </h2>
                <div className="mt-3 text-xl uppercase tracking-[0.25em] text-[#D2C08B]">
                  ₦{product.price.toLocaleString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
