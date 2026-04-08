'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Demo', href: '/book-demo', primary: true }
];

export default function SiteHeader({ assetVersion = 'dev' }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="header-nav">
      <nav className="nav container">
        <Link href="/" className="brand-link" aria-label="AlzaWare Home">
          <div className="brand">
            <img
              src={`/assets/alzaware-logo.png?v=${assetVersion}`}
              alt="AlzaWare logo"
              className="brand-logo"
            />
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.primary ? 'demo-link' : ''} ${isActive ? 'active' : ''}`.trim()}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div
          id="site-mobile-menu"
          className={`mobile-menu ${menuOpen ? 'open' : ''}`.trim()}
          aria-hidden={!menuOpen}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.primary ? 'demo-link' : ''} ${isActive ? 'active' : ''}`.trim()}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}