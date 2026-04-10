import Hero from '../components/Hero.jsx';
import MarqueeBar from '../components/MarqueeBar.jsx';
import FeaturedCollection from '../components/FeaturedCollection.jsx';
import BrandStory from '../components/BrandStory.jsx';
import FounderSection from '../components/FounderSection.jsx';
import PhotoGrid from '../components/PhotoGrid.jsx';
import SocialProof from '../components/SocialProof.jsx';
import WhatsappBanner from '../components/WhatsappBanner.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <MarqueeBar />
      <FeaturedCollection />
      <FounderSection />
      <BrandStory />
      <PhotoGrid />
      <SocialProof />
      <WhatsappBanner />
      <section id="contact" className="border-t border-white/20 bg-[#C9A84C] px-5 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs uppercase tracking-[0.35em] text-white/80">Contact</div>
          <p className="mt-4 text-sm leading-7 text-white/90">
            Reach out by phone, email, or Snapchat for private consultations and bespoke timepieces. We also maintain an active Google Business page for immediate visibility.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/90">
            <div>Phone: 08166394988</div>
            <div>Email: timelessbyemjay@gmail.com</div>
            <div>Snapchat: @byemjay</div>
          </div>
          <a
            href="https://wa.me/2348166394988"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-none border border-white bg-white px-8 py-3 text-sm uppercase tracking-[0.35em] text-[#C9A84C] transition hover:bg-[#F5F0E8]"
          >
            Message Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
