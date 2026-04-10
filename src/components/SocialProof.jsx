import { galleryImages } from '../data/galleryImages.js';

function SocialProof() {
  const photos = galleryImages.slice(0, 4);

  return (
    <section className="border-b border-white/30 bg-white px-5 py-16 text-[#080808]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Social</div>
          <h2 className="mt-3 text-3xl font-serif text-[#080808]">Follow us on Instagram, Snapchat, and WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#4A4A4A]">
            See new launches and collection previews on our social channels.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((src, index) => (
            <div key={index} className="group relative overflow-hidden border border-white/20 bg-white p-0">
              <img src={src} alt={`Social proof ${index + 1}`} className="aspect-square h-full w-full object-cover" />
              <div className="absolute inset-0 border border-transparent transition group-hover:border-[#C9A84C]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
