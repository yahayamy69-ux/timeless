function WhatsappBanner() {
  return (
    <section className="border-t border-white/20 bg-[#111] px-5 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-none border border-white/20 bg-white px-6 py-8 text-[#080808] lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-[#C9A84C]">Get exclusive deals on WhatsApp</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#0A0A0A]/80">
            Stay first in line for new introductions, private drops, and personalised service. We are also live on Google Business for quick discovery.
          </p>
          <p className="mt-3 text-sm text-[#0A0A0A]/80">Contact: 08166394988 | timelessbyemjay@gmail.com</p>
        </div>
        <a
          href="https://wa.me/2348166394988"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-none border border-[#C9A84C] bg-[#C9A84C] px-6 text-sm uppercase tracking-[0.35em] text-black transition hover:bg-[#f5df8a]"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}

export default WhatsappBanner;
