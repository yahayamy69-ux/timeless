import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import { imageMap } from '../data/imageMap.js';

const featured = products.slice(0, 4);

function FeaturedCollection() {
  return (
    <motion.section className="bg-[#080808] border-b border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#D2C08B]/60">Featured watches</span>
          <h2 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
            Select from the collection.
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-20 lg:grid-cols-2">
          {featured.map((product) => (
            <article key={product.id} className="overflow-hidden">
              <Link to={`/product/${product.id}`} className="block overflow-hidden">
                <img
                  src={imageMap[product.image]}
                  alt={product.name}
                  className="h-[620px] w-full object-cover transition duration-1000 hover:scale-[1.02]"
                />
              </Link>
              <div className="mt-8 max-w-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-[#D2C08B]/60">{product.brand}</p>
                <h3 className="mt-4 text-3xl font-serif uppercase tracking-[-0.03em] leading-[1.05]">
                  <Link to={`/product/${product.id}`} className="transition hover:text-[#D2C08B]">
                    {product.name}
                  </Link>
                </h3>
                <div className="mt-3 text-xl uppercase tracking-[0.25em] text-[#D2C08B]">
                  ₦{product.price.toLocaleString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedCollection;
