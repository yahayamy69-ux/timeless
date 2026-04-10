import { Link } from 'react-router-dom';
import products from '../data/products.json';
import { imageMap } from '../data/imageMap.js';

function Shop() {
  return (
    <section className="bg-[#f4efe6] text-[#111]">
      <div className="mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-24">
        <span className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Collection</span>
        <h1 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
          A restrained edit of heritage wristwear.
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-9 text-[#111]/70">
          Discover each watch through calm composition, material focus and private availability.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pb-24 sm:grid-cols-2">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden">
            <Link to={`/product/${product.id}`} className="block overflow-hidden">
              <img
                src={imageMap[product.image]}
                alt={product.name}
                className="h-[560px] w-full object-cover transition duration-1000 hover:scale-[1.02]"
              />
            </Link>
            <div className="mt-8 max-w-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">{product.category}</p>
              <h2 className="mt-4 text-3xl font-serif uppercase tracking-[-0.03em] leading-[1.05]">
                <Link to={`/product/${product.id}`} className="transition hover:text-[#8A7A56]">
                  {product.name}
                </Link>
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#111]/70">
                Contact for private details and availability.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Shop;
