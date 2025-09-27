"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Compter CHAQUE visite, même si c'est la même personne
    const countVisit = () => {
      // Incrémenter le compteur local à chaque visite
      const currentCount = parseInt(localStorage.getItem('totalVisits') || '0');
      const newCount = currentCount + 1;
      
      localStorage.setItem('totalVisits', newCount.toString());
      setVisitorCount(newCount);
    };

    countVisit();
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-pink-700 mb-4 inline-block">
              THE SUKEBAN
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              La team féminine qui révolutionne le gaming. <br />Talent, stratégie et style - 
              nous repoussons les limites du possible depuis day one.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-pink-500 transition">Accueil</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-pink-500 transition">À propos</Link></li>
              <li><Link href="/members" className="text-gray-300 hover:text-pink-500 transition">Membres</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-pink-500 transition">Activités</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-pink-500 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Localisation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Madagascar</li>
            </ul>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 mt-6">Total des visites</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="text-gray font-semibold">
                  <span className="text-pink-500" style={{ marginRight: '0.5rem' }}>👤</span>
                  {visitorCount === null ? '...' : `${visitorCount.toLocaleString()} visites`}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-400">
          <div className="flex justify-between items-center">
            <span>&copy; {currentYear} THE SUKEBAN. Tous droits réservés.</span>
            <span>Dalia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}