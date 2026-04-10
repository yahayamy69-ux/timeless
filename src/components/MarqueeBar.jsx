function MarqueeBar() {
  const text = 'NEW ARRIVALS · TIMELESS BY EMJAY · ABUJA, NIGERIA · TIME NEVER LOOKED THIS GOOD ON YOU · FREE DELIVERY ABOVE ₦30,000 · ';
  return (
    <section className="overflow-hidden border-t border-b border-white/20 bg-white py-3 text-center text-[0.75rem] uppercase tracking-[0.4em] text-[#C9A84C]">
      <div className="marquee">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </section>
  );
}

export default MarqueeBar;
