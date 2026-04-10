import products from '../data/products.json';
import ProductCard from './ProductCard.jsx';

function FeaturedCollection() {
  const featured = products.slice(0, 3);

  return (
    <section className="border-t border-b border-white/30 bg-white px-5 py-16 text-[#0A0A0A]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl uppercase tracking-[0.25em] text-[#C9A84C] font-serif">
            The Collection
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm tracking-[0.2em] text-[#0A0A0A]/70">
            Luxury timepieces curated for every moment.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
