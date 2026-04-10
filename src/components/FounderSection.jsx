import { motion } from 'framer-motion';
import portraitImage from '../watch images/founder image.jpeg';

function FounderSection() {
  return (
    <section className="relative min-h-[100vh] bg-[#121212] text-white">
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center gap-16 px-6 py-24 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-[#D2C08B]/60">Founder</div>
          <h2 className="mt-6 text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5rem]">
            Born in Maiduguri, presenting a quiet collection.
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-9 text-white/65">
            Emjay brings a measured eye to each limited release, balancing heritage forms with contemporary restraint.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative h-[480px] overflow-hidden rounded-none lg:h-[620px] lg:w-[540px]"
        >
          <img src={portraitImage} alt="Founder Emjay" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export default FounderSection;
