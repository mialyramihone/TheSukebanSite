"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const gamingQuotes = [
  "La victoire n'est pas un hasard, c'est une stratégie.",
  "Le gaming n'a pas de genre, seulement des skills.",
  "Joue avec ton cœur, gagne avec ta tête.",
  "Le jeu est plus qu'un passe-temps, c'est une passion.",
  "Dans chaque partie, nous écrivons notre légende.",
  "Le skill se travaille, la victoire se mérite.",
  "Derrière chaque grande joueuse se cache une équipe solide.",
  "Notre force? La stratégie et la sororité.",
  "La victoire en Battle Royale commence par la survie.",
  "En ranked, on ne joue pas, on combat.",
  "Le sniper patient est plus dangereux que l'assaut impulsif.",
  "Build faster, shoot smarter, win bigger.",
  "Dans le bus de combat, chaque atterrissage est une nouvelle chance.",
  "Le dernier cercle sépare les joueurs des champions.",
  "Une bonne construction vaut mieux qu'un bon loot.",
  "Le teamwork divise le travail et multiplie les chances de victoire.",
  "Chaque agent a son rôle, chaque rôle sa importance.",
  "Le clutch n'est pas chance, c'est maîtrise.",
  "Eco round aujourd'hui, ace round demain.",
  "La map est notre échiquier, les champions nos pions.",
  "Un objectif vaut mieux que dix kills.",
  "La vision contrôle la map, la map contrôle la victoire.",
  "GG WP n'est pas une politesse, c'est un respect.",
  "Le gaming est un art, et nous en sommes les artistes.",
  "Chaque défaite est une leçon, chaque victoire une récompense.",
  "Le skill n'a pas de genre, seulement des niveaux.",
  "Dans le jeu comme dans la vie, la persévérance paie toujours.",
  "Le vrai pouvoir vient de la stratégie, pas de la chance.",
  "Jouer en équipe, c'est gagner en famille.",
  "Le gaming est notre terrain de jeu, la victoire notre objectif.",
  "Chaque partie est une nouvelle aventure, chaque victoire une nouvelle histoire.",
  "Le gaming n'est pas juste un jeu, c'est une passion qui nous unit.",
  "La victoire appartient à ceux qui osent.",
  "Le skill se mesure en actions, pas en mots.",
  "Dans chaque partie, nous sommes des guerrières.",
  "Le gaming est notre royaume, la victoire notre couronne.",
  "Chaque joueur a son style, chaque style sa force.",
  "Le vrai défi n'est pas de gagner, mais de s'améliorer.",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentQuote, setCurrentQuote] = useState('Chargement...');

  useEffect(() => {
    
    const randomQuote = gamingQuotes[Math.floor(Math.random() * gamingQuotes.length)];
    setCurrentQuote(randomQuote);

    
    const quoteInterval = setInterval(() => {
      const newQuote = gamingQuotes[Math.floor(Math.random() * gamingQuotes.length)];
      setCurrentQuote(newQuote);
    }, 8000);

    return () => clearInterval(quoteInterval);
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
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Citation Gaming</h3>
            <div >
              
              <p className="text-sm italic text-gray-200 min-h-[60px] flex items-center" style={{ marginTop: '-0.5rem' }}>
                &quot;{currentQuote}&quot;
              </p>
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