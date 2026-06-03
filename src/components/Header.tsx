import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/shop", label: "SHOP" },
  { to: "/visit", label: "VISIT" },
  { to: "/about", label: "ABOUT US" },
  { to: "/news", label: "NEWS & MEDIA" },
  { to: "/tools", label: "OUR TOOLS" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-50 bg-white">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 border-b border-neutral-200">
        <div className="relative flex h-[76px] items-center">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-serif text-[21px] font-semibold leading-none tracking-[-0.03em] text-black"
          >
            Dttio
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[26px] md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="relative py-2 text-[10px] font-bold uppercase tracking-[0.02em] text-black transition-opacity hover:opacity-60"
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-line"
                        className="absolute -bottom-[13px] left-0 right-0 h-px bg-black"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-6">
            <Link
              to="/chat"
              className="hidden rounded-full border border-black px-[16px] py-[7px] text-[10px] font-bold uppercase tracking-[0.02em] transition-colors hover:bg-black hover:text-white sm:inline-flex"
            >
              LET'S CHAT <span className="ml-1 text-[11px]">👋</span>
            </Link>
            <button
              onClick={() => setOpen((value) => !value)}
              aria-label="Menu"
              className="group flex h-8 w-10 flex-col items-end justify-center gap-[6px]"
            >
              <span className="block h-px w-8 bg-black" />
              <span className="block h-px w-6 bg-black" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="mx-auto grid max-w-[1240px] gap-1 px-5 py-5 pt-24">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-neutral-200 py-3 font-serif text-3xl md:text-5xl tracking-[-0.05em]"
                >
                  {link.label}
                  <span className="font-sans text-sm">↗</span>
                </NavLink>
              ))}
              <Link
                to="/chat"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-[11px] font-bold uppercase text-white"
              >
                LET'S CHAT <span className="ml-1">👋</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}