import { motion } from 'framer-motion';

function BrandStory() {
  return (
    <section id="story" className="border-b border-white/30 bg-[#C9A84C] px-5 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-[0.35em] text-white/80">More than a watch.</div>
          <h2 className="text-4xl font-serif leading-tight text-white">A story of craftsmanship and elegant restraint.</h2>
          <p className="max-w-xl text-sm leading-7 text-white/80">
            Timeless by Emjay is built on the belief that every timepiece should be a memory in motion. Based in Abuja, we bring refined finishes and polished details to collectors who desire luxury with purpose.
          </p>
          <button className="rounded-none border border-white px-8 py-3 text-sm uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-[#C9A84C]">
            Discover Our Story
          </button>
        </div>
        <motion.div
          className="relative flex items-center justify-center border border-white/20 bg-white p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-80 w-80 rounded-none border border-[#C9A84C]">
            <div className="absolute inset-0 rounded-none border border-[#C9A84C]/30" />
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A84C]/40" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A84C]/40" />
            <div className="absolute left-1/2 top-1/2 h-2 w-24 bg-[#C9A84C] transform -translate-x-1/2 translate-y-[-1px]" />
            <div className="absolute left-1/2 top-1/2 h-28 w-1 bg-[#C9A84C] clock-hand" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandStory;
