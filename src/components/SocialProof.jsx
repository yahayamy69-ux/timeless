import { galleryImages } from '../data/galleryImages.js';

function SocialProof() {
  const photos = galleryImages.slice(0, 4);

  return (
    <section className="border-b border-white/30 bg-[#C9A84C] px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-white/80">Social Proof</div>
          <h2 className="mt-3 text-3xl font-serif text-white">Tag @timelessbyemjay on Instagram</h2>
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
