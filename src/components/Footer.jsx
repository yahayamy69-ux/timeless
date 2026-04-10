import { Link } from 'react-router-dom';
import LogoMark from './LogoMark.jsx';

function Footer() {
  const links = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#story' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#111] px-5 py-12 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <LogoMark compact />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[0.75rem] uppercase tracking-[0.35em] text-white/80">
          {links.map((link) => (
            <Link key={link.label} to={link.to} className="transition hover:text-[#C9A84C]">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-sm text-white/80">08166394988 · timelessbyemjay@gmail.com · Snapchat: @byemjay</div>
        <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/70">© 2026 Timeless by Emjay. Abuja, Nigeria.</div>
      </div>
    </footer>
  );
}

export default Footer;
