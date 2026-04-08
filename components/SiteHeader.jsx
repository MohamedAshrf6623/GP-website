'use client';

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
      </nav>
    </header>
  );
}