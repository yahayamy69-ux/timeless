import { motion } from 'framer-motion';
import { imageMap } from '../data/imageMap.js';

function FeaturedCollection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#050505] text-white">
      <img
        src={imageMap.watch2}
        alt="Collection highlight"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#D2C08B]/60">A quiet edit</span>
          <h2 className="mt-6 text-[3.5rem] font-serif uppercase tracking-[-0.04em] leading-[0.9] sm:text-[5rem]">
            The collection is restrained and rare.
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-9 text-white/65">
            Six appointments of watchmaking, offered with private access and deliberate calm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
