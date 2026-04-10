import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LogoMark from './LogoMark.jsx';

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-5 text-center bg-[#111] text-white">
      <div className="absolute inset-x-0 bottom-20 mx-auto h-14 w-14 rounded-full border border-white/25" />
      <div className="relative z-10 max-w-3xl">
        <LogoMark />
        <div className="mt-10 text-sm uppercase tracking-[0.35em] text-white/90">
          Curated timepieces for the refined.
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/shop"
            className="rounded-none bg-white px-8 py-3 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#F5F0E8]"
          >
            Shop the Collection
          </Link>
          <a
            href="#story"
            className="rounded-none border border-white px-8 py-3 text-sm uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-[#C9A84C]"
          >
            Our Story
          </a>
        </div>
        <motion.div
          className="mx-auto mt-14 h-0.5 w-24 rounded-full bg-white/75"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </div>
    </section>
  );
}

export default Hero;
