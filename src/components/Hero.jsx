import { motion } from 'framer-motion';
import { galleryImages } from '../data/galleryImages.js';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#080808] text-white">
      <img
        src={galleryImages[10]}
        alt="Timeless collection"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[#080808]/80" />
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-[5rem] font-serif uppercase tracking-[-0.05em] leading-[0.95] text-white sm:text-[5.8rem] lg:text-[6.8rem]">
            Discover the collection.
          </h1>
          <div className="mt-14">
            <Link
              to="/shop"
              className="inline-flex rounded-none border border-white/20 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white/15"
            >
              Explore watches
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
