import Hero from '../components/Hero.jsx';
import FeaturedCollection from '../components/FeaturedCollection.jsx';
import FounderSection from '../components/FounderSection.jsx';
import BrandStory from '../components/BrandStory.jsx';

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedCollection />
      <FounderSection />
      <BrandStory />
      <section id="contact" className="relative min-h-[100vh] bg-[#f4efe6] text-[#111]">
        <div className="relative mx-auto flex min-h-[100vh] max-w-5xl flex-col justify-center gap-10 px-6 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Contact</span>
          <h2 className="text-[4rem] font-serif uppercase tracking-[-0.04em] leading-[0.95] sm:text-[5.2rem]">
            Private appointments begin with a message.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#111]/70">
            Request availability and private viewings through discreet service.
          </p>
          <div className="mx-auto flex flex-col items-center gap-3 text-sm uppercase tracking-[0.35em] text-[#111]/70 sm:flex-row sm:justify-center">
            <a href="mailto:timelessbyemjay@gmail.com" className="transition hover:text-[#111]">
              timelessbyemjay@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="https://wa.me/2348166394988" className="transition hover:text-[#111]">
              0816 639 4988
            </a>
            <span className="hidden sm:block">•</span>
            <span>Snapchat: @byemjay</span>
          </div>
          <div className="text-xs uppercase tracking-[0.35em] text-[#111]/40">
            Founded in Maiduguri · Private service only
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
