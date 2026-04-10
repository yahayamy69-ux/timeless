import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { imageMap } from '../data/imageMap.js';

const collections = [
  {
    title: 'Heritage',
    image: imageMap.watch4,
    query: 'category=Classic',
  },
  {
    title: 'Signature',
    image: imageMap.watch2,
    query: 'category=Luxe',
  },
  {
    title: 'Chronograph',
    image: imageMap.watch3,
    query: 'category=Sport',
  },
];

function BrandStory() {
  return (
    <motion.section id="collections" className="bg-[#f4efe6] border-b border-[#111]/10 text-[#111]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Collections</span>
          <h2 className="mt-6 text-[2.8rem] font-serif uppercase tracking-[-0.04em] leading-[1.0] sm:text-[3.8rem] lg:text-[5rem]">
            Browse by collection.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              to={`/shop?${collection.query}`}
              className="group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-[260px] w-full object-cover transition duration-1000 group-hover:scale-[1.02] sm:h-[360px] lg:h-[520px]"
                />
              </div>
              <div className="mt-6 max-w-full">
                <p className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">{collection.title}</p>
                <h3 className="mt-4 text-3xl font-serif uppercase tracking-[-0.03em] leading-[1.05] transition group-hover:text-[#8A7A56]">
                  {collection.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default BrandStory;
