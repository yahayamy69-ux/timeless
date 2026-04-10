import { motion } from 'framer-motion';
import { imageMap } from '../data/imageMap.js';

function FeaturedCollection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#f4efe6] text-[#111]">
      <img
        src={imageMap.watch2}
        alt="Collection highlight"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-[#f4efe6]/80" />
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">The Collection</span>
          <h2 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
            A measured edit of enduring watches.
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-9 text-[#111]/70">
            Each piece is chosen for quiet strength, refined material and thoughtful presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
