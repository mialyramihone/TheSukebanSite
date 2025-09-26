/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getLinkClass = (href: string) => {
    const baseClass = "transition duration-300";
    const activeClass = isActiveLink(href) 
      ? "text-pink-500 font-semibold border-b-2 border-pink-500" 
      : "text-gray-700 hover:text-pink-500";
    
    return `${baseClass} ${activeClass}`;
  };

  const getMobileLinkClass = (href: string) => {
    const baseClass = "transition duration-300 px-4 py-2";
    const activeClass = isActiveLink(href) 
      ? "text-pink-500 font-semibold bg-pink-50 rounded-lg" 
      : "text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-lg";
    
    return `${baseClass} ${activeClass}`;
  };

  return (
    <nav className="bg-white/20 backdrop-blur-md sticky top-0 z-50 shadow-lg">

      <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-2">

          <Link 
        href="/" 
        className="flex items-center space-x-2"
        onClick={closeMenu}
      >
        <img 
          src="/images/LOGO copie.png" 
          alt="Logo Sukeban" 
          className="w-15 h-15 object-contain"
        />
        <span className="text-xl md:text-2xl font-bold text-pink-800 hover:text-pink-900 transition">
          THE SUKEBAN
        </span>
      </Link>


          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={getLinkClass('/')}
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className={getLinkClass('/about')}
            >
              À propos
            </Link>
            <Link 
              href="/members" 
              className={getLinkClass('/members')}
            >
              Membres
            </Link>
            <Link 
              href="/blog" 
              className={getLinkClass('/blog')}
            >
              Activités
            </Link>
            <Link 
              href="/contact" 
              className={getLinkClass('/contact')}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <span className="text-xl">✕</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-2 py-4">
              <Link 
                href="/" 
                className={getMobileLinkClass('/')}
                onClick={closeMenu}
              >
                Accueil
              </Link>
              <Link 
                href="/about" 
                className={getMobileLinkClass('/about')}
                onClick={closeMenu}
              >
                À propos
              </Link>
              <Link 
                href="/members" 
                className={getMobileLinkClass('/members')}
                onClick={closeMenu}
              >
                Membres
              </Link>
              <Link 
                href="/blog" 
                className={getMobileLinkClass('/blog')}
                onClick={closeMenu}
              >
                Activités
              </Link>
              <Link 
                href="/contact" 
                className={getMobileLinkClass('/contact')}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}