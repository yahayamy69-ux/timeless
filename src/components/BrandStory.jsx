import { motion } from 'framer-motion';

function BrandStory() {
  return (
    <section id="story" className="border-b border-white/20 bg-white px-5 py-16 text-[#080808]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">More than a watch.</div>
          <h2 className="text-4xl font-serif leading-tight text-[#080808]">A story of craftsmanship and elegant restraint.</h2>
          <p className="max-w-xl text-sm leading-7 text-[#4A4A4A]">
            Timeless by Emjay blends premium craftsmanship with personal service. Every watch is handpicked for the modern collector who values elegance, clarity, and lasting memory.
          </p>
          <p className="max-w-xl text-sm leading-7 text-[#4A4A4A]">
            With a focus on limited drops and private appointments, we make sure each piece feels intentional, rare, and ready for the moment you wear it.
          </p>
          <button className="rounded-none border border-[#C9A84C] bg-[#F9F7EE] px-8 py-3 text-sm uppercase tracking-[0.35em] text-[#080808] transition hover:bg-[#E2D998] hover:text-[#080808]">
            Discover Our Story
          </button>
        </div>
        <motion.div
          className="relative flex items-center justify-center border border-[#E2C974]/20 bg-[#F9F7EE] p-10"
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
