import { motion } from 'framer-motion';
import LogoMark from './LogoMark.jsx';

function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#080808] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_45%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-10"
        >
          <div className="text-[0.8rem] uppercase tracking-[0.4em] text-white/70">Timeless by Emjay</div>
          <h1 className="max-w-3xl text-[4.2rem] leading-[1.05] font-serif uppercase tracking-[-0.04em] text-white sm:text-[5rem] md:text-[6rem]">
            Heritage timepieces. Quiet luxury.
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-[1.6] text-white/70">
            A restrained collection of wristwear designed for moments that last.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
