import portraitImage from '../watch images/founder image.jpeg';

function FounderSection() {
  const portrait = portraitImage;

  return (
    <section className="border-t border-white/20 bg-white px-5 py-16 text-[#080808]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] items-center">
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Founder</div>
          <h2 className="text-4xl font-serif leading-tight text-[#080808]">Meet Emjay, the curator of Timeless.</h2>
          <p className="max-w-xl text-sm leading-7 text-[#4A4A4A]">
            Born and raised in Abuja, Emjay launched Timeless by Emjay to bring a new kind of luxury watch curation to Nigeria. He builds each collection with an eye for craftsmanship, clarity, and stories that feel personal—not mass produced.
          </p>
          <p className="max-w-xl text-sm leading-7 text-[#4A4A4A]">
            His work is guided by modern elegance, honest detail, and a belief that a timepiece should feel as timeless as the moment it celebrates.
          </p>
          <div className="space-y-3 text-sm uppercase tracking-[0.25em] text-[#8A7A56]">
            <div>Phone: 08166394988</div>
            <div>Email: timelessbyemjay@gmail.com</div>
            <div>Snapchat: @byemjay</div>
          </div>
        </div>
        <div className="overflow-hidden border border-white/20 bg-white p-2 shadow-lg shadow-black/5">
          {portrait ? (
            <img src={portrait} alt="Founder Emjay" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center bg-white text-sm uppercase tracking-[0.25em] text-[#8A7A56]">
              Founder photo coming soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
