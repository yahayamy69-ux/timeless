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
      <section id="contact" className="border-t border-white/20 bg-[#111] px-5 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Contact</div>
            <h2 className="mt-4 text-3xl font-serif text-white">Book a private consultation or request a bespoke styling call.</h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-[#d9d9d9]/90">
              Our team is ready to assist with pricing, availability, and private collections. Connect with us on WhatsApp, email, or Snapchat for the fastest response.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-none border border-white/10 bg-[#0f0f0f] p-6 text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.34 12.34 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.34 12.34 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Phone</div>
              <div className="mt-3 text-lg font-semibold text-white">08166394988</div>
            </div>
            <div className="rounded-none border border-white/10 bg-[#0f0f0f] p-6 text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Email</div>
              <div className="mt-3 text-lg font-semibold text-white">timelessbyemjay@gmail.com</div>
            </div>
            <div className="rounded-none border border-white/10 bg-[#0f0f0f] p-6 text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 7a4 4 0 1 1 8 0v3a4 4 0 0 1-8 0V7Z" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#8A7A56]">Snapchat</div>
              <div className="mt-3 text-lg font-semibold text-white">@byemjay</div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/2348166394988"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-none border border-[#C9A84C] bg-[#C9A84C] px-8 py-3 text-sm uppercase tracking-[0.35em] text-black transition hover:bg-[#f5df8a] sm:w-auto"
            >
              Message on WhatsApp
            </a>
            <a
              href="mailto:timelessbyemjay@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-none border border-white/20 bg-transparent px-8 py-3 text-sm uppercase tracking-[0.35em] text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C] sm:w-auto"
            >
              Send email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
