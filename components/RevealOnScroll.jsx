'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'));

    targets.forEach((element, index) => {
      element.classList.remove('reveal-item', 'reveal-rise', 'is-visible');
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${Math.min(index * 22, 260)}ms`);
    });

    if (!targets.length) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach((element) => {
        element.classList.add('reveal-rise', 'is-visible');
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('reveal-rise', 'is-visible');
          observerInstance.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    targets.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}