import { Link, useParams } from 'react-router-dom';
import products from '../data/products.json';
import { imageMap } from '../data/imageMap.js';

function Product() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
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

  return (
    <section className="relative min-h-[100vh] bg-[#121212] text-white">
      <img src={image} alt={product.name} className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-[#121212]/70" />
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-[#D2C08B]/60">{product.category}</p>
        <h1 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
          {product.name}
        </h1>
        <p className="mt-10 max-w-3xl text-lg leading-9 text-white/70">
          {product.description}
        </p>
        <p className="mt-10 max-w-2xl text-sm uppercase tracking-[0.35em] text-[#D2C08B]/70">
          Private appointments only. Contact us for pricing and availability.
        </p>
        <div className="mt-14 flex flex-wrap gap-6 text-sm uppercase tracking-[0.35em] text-white/80">
          <a href="https://wa.me/2348166394988" className="underline transition hover:text-[#D2C08B]">
            Request details
          </a>
          <Link to="/shop" className="underline transition hover:text-[#D2C08B]">
            All watches
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
