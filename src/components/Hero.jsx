import { motion } from 'framer-motion';
import { galleryImages } from '../data/galleryImages.js';

function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#121212] text-white">
      <img
        src={galleryImages[10]}
        alt="Timeless collection"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[#121212]/72" />
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mx-auto max-w-3xl space-y-10"
        >
          <div className="text-[0.8rem] uppercase tracking-[0.45em] text-[#D8C79A]/70">Timeless by Emjay</div>
          <h1 className="text-[4.6rem] leading-[0.95] font-serif uppercase tracking-[-0.05em] text-white sm:text-[5.4rem] lg:text-[6.4rem]">
            Heritage timepieces. Quietly curated.
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-[1.9] text-white/70">
            A private collection of watches selected for presence and subtlety.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
