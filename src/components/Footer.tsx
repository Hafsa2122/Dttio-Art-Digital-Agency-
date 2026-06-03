import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 relative overflow-hidden">
        {/* Big wordmark absolute centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="font-serif font-semibold text-[24vw] leading-none tracking-[-0.05em] text-amber-400/25 blur-[2px] select-none text-center w-full">
            Dttio
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          <div>
            <Link to="/" className="font-serif font-semibold text-4xl italic tracking-[-0.04em] text-black">
              Dttio<span className="text-amber-400">.</span>
            </Link>
            <p className="mt-4 text-[13px] font-medium leading-[1.5] text-neutral-500 max-w-xs">
              Art Digital Agency based in New York. We specialise in prompt
              engineering for generating AI Images.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-neutral-500 uppercase tracking-wide text-xs mb-3">
                Pages
              </div>
              <ul className="space-y-2">
                <li><Link to="/shop" className="hover:text-amber-400">Shop</Link></li>
                <li><Link to="/visit" className="hover:text-amber-400">Visit</Link></li>
                <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>
                <li><Link to="/news" className="hover:text-amber-400">News & Media</Link></li>
                <li><Link to="/tools" className="hover:text-amber-400">Our Tools</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-neutral-500 uppercase tracking-wide text-xs mb-3">
                Social
              </div>
              <ul className="space-y-2">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Instagram</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Behance</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Dribbble</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-neutral-500 uppercase tracking-wide text-xs mb-3">
              Studio
            </div>
            <p className="text-sm">132 W 25th St,<br />New York, NY 10001</p>
            <p className="text-sm mt-3">hello@dttio.studio</p>
            <Link
              to="/chat"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 text-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-amber-300 transition-colors"
            >
              Start a project →
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500 pt-6 border-t border-black/15 mt-24">
          <span>© {new Date().getFullYear()} Dttio Studio — All rights reserved</span>
          <span>Crafted with intention in New York</span>
        </div>
      </div>
    </footer>
  );
}
