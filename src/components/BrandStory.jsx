import { motion } from 'framer-motion';

function BrandStory() {
  return (
    <section id="story" className="relative min-h-[100vh] bg-[#f4efe6] text-[#111]">
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Heritage</span>
          <h2 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
            An editorial expression of timeless quality.
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-9 text-[#111]/70">
            Private editions, thoughtful curation and an approach that values discretion over display.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandStory;
