import { motion } from 'framer-motion';

function BrandStory() {
  return (
    <section id="story" className="relative min-h-[100vh] bg-[#080808] text-white">
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#D2C08B]/60">Heritage</span>
          <h2 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
            Quietly curated, intentionally framed.
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-9 text-white/65">
            The collection is offered through private service, selected for an audience that values restraint, provenance and lasting presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandStory;
