import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import LogoMark from './LogoMark.jsx';

const navItems = [
  { title: 'Home', to: '/', type: 'link' },
  { title: 'Shop', to: '/shop', type: 'link' },
  { title: 'Contact', to: '/#contact', type: 'anchor' },
];

function Navbar() {
  const { cartCount, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b ${scrolled ? 'border-white/10 bg-[#050505]/95 backdrop-blur-xl' : 'border-transparent bg-transparent'} text-white transition-colors duration-500`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-[0.95rem] font-serif leading-none text-white tracking-[0.18em]">TIMELESS</div>
          <div className="text-[0.65rem] uppercase tracking-[0.58em] font-display font-[200] text-white/80">BY EMJAY</div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.type === 'link' ? (
              <Link
                key={item.title}
                to={item.to}
                className="text-[0.75rem] uppercase tracking-[0.35em] font-display font-[200] text-white transition hover:text-[#C9A84C]"
              >
                {item.title}
              </Link>
            ) : (
              <a
                key={item.title}
                href={item.to}
                className="text-[0.75rem] uppercase tracking-[0.35em] font-display font-[200] text-white transition hover:text-[#C9A84C]"
              >
                {item.title}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleCart}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/30 text-white transition hover:border-white"
            aria-label="Open cart"
          >
            <span className="block h-4 w-4 border-t border-r border-white rotate-45" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white text-[0.65rem] text-[#C9A84C]">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-none border border-white/60 px-4 text-[0.8rem] uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-[#C9A84C] md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#050505] px-6 py-10 text-white md:hidden">
          <div className="flex items-center justify-between">
            <div className="text-lg uppercase tracking-[0.58em] font-display font-[200]">Menu</div>
            <button onClick={() => setMobileOpen(false)} className="text-white text-[0.9rem] uppercase tracking-[0.3em]">Close</button>
          </div>
          <div className="mt-16 flex flex-col gap-8 text-[1.05rem] uppercase tracking-[0.35em]">
            {navItems.map((item) =>
              item.type === 'link' ? (
                <Link
                  key={item.title}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-white transition hover:text-[#C9A84C]"
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  key={item.title}
                  href={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-white transition hover:text-[#C9A84C]"
                >
                  {item.title}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
