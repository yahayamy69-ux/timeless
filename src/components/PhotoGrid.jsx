import { useMemo } from 'react';
import { galleryImages } from '../data/galleryImages.js';

function PhotoGrid() {
  const photos = useMemo(() => {
    return [...galleryImages].sort(() => 0.5 - Math.random()).slice(0, 6);
  }, []);

  return (
    <section className="border-t border-white/30 bg-[#C9A84C] px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-white/80">Featured imagery</div>
          <h2 className="mt-3 text-3xl font-serif text-white">A visual preview of our first collection.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-none border border-white/20 bg-white">
              <img src={src} alt={`Timeless photo ${index + 1}`} className="h-72 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGrid;
