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
      {menuOpen ? <button type="button" className="mobile-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} /> : null}
      <nav className="nav container">
        <Link href="/" className="brand-link" aria-label="AlzaWare Home">
          <div className="brand">
            <img
              src={`/assets/alzaware-logo.jpeg?v=${assetVersion}`}
              alt="AlzaWare logo"
              className="brand-logo"
            />
          </div>
        </Link>

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

        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? 'open' : ''}`.trim()}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

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