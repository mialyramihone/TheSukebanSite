
"use client";


import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import AnimatedMembersSection from '@/components/AnimatedMembersSection'; 
import CountUp from "react-countup";


export default function Home() {
  
  const stats = [
    { number: "35K+", label: "Matchs joués" },
    { number: "390+", label: "Followers actifs" },
    { number: "99%", label: "Taux de victoire" },
    { number: "25K+", label: "Communauté" }
  ];

  const popularGames = [
    { name: "Freestyle", icon: "🎵", desc: "Improvisation et créativité" },
    { name: "Hardstyle", icon: "⚡", desc: "Intense et technique" },
    { name: "Competitive", icon: "🏆", desc: "Compétition pure" },
    { name: "Strategic", icon: "🧠", desc: "Stratégie et réflexion" },
    { name: "Casual", icon: "😎", desc: "Détente et fun" },
    { name: "Speedrun", icon: "⏱️", desc: "Rapidité et précision" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <section 
        className="relative text-center py-20 md:py-32 px-4 bg-cover bg-center min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/images/fond.jpg)'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-8">
          <div className="text-center mb-12">
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 drop-shadow-2xl">
            THE SUKEBAN
          </h1>
        </div>

            <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-xl sm:text-2xl md:text-3xl text-pink-300 mb-4 font-light italic">
              &ldquo;Dominez le jeu, défiez les règles&rdquo;
            </p>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            La team gaming féminine qui révolutionne l&apos;esport à Madagascar. 
            Talent, stratégie et innovation au service de la performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/members" 
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px] justify-center"
            >
              <span>🎮</span>
              Découvrir l&apos;équipe
            </Link>
            <Link 
              href="/blog" 
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-pink-500 text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px] justify-center"
            >
              <span>📰</span>
              Nos actualités
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            
              const numericValue = parseInt(stat.number.replace(/K\+|%/g, ''));
              const suffix = stat.number.includes("K+") ? "K+" : stat.number.includes("%") ? "%" : stat.number.includes("+") ? "+" :"";

              return (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-pink-600 mb-2">
                    <CountUp 
                      start={0} 
                      end={numericValue} 
                      duration={17} 

                      suffix={suffix} 
                    />
                  </div>
                  <div className="text-sm sm:text-base text-gray-700 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Styles Maîtrisés
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diversité et expertise dans tous les aspects du gaming compétitif
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {popularGames.map((game, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm">{game.name}</h3>
                <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {game.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedMembersSection />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Dernières Actualités
            </h2>
            <p className="text-xl text-gray-600">
              Suivez notre aventure gaming au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  {blogPosts.slice(-2).map((post) => (
    <article 
      key={post.id} 
      className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-6 z-10">
        
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 pr-4 group-hover:text-pink-600 transition-colors">
            {post.title}
          </h3>
          <span className="bg-gradient-to-r from-pink-400 to-pink-700 text-white px-3 py-1 rounded-full text-xs font-bold transform group-hover:scale-110 transition-transform">
            {post.category}
          </span>
        </div>
        
        {/* Contenu */}
        <p className="text-gray-600 mb-6 leading-relaxed relative">
          {post.excerpt}
          <span className="absolute bottom-0 right-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></span>
        </p>
        
        {/* Pied de carte */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500">
              <div className="font-semibold text-gray-700">{post.author}</div>
              <div className="text-xs">{new Date(post.date).toLocaleDateString('fr-FR')}</div>
            </div>
          </div>
          
          <Link 
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 px-4 py-2 rounded-full transition-all duration-300 group-hover:translate-x-1"
          >
            <span className="font-medium text-sm">Lire</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
      
      {/* Bordure animée */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
    </article>
  ))}
</div>
          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-3 bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              📰 Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-400 via-pink-700 to-pink-400 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Prêt à rejoindre la légende ?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Que vous soyez fan, partenaire ou future membre, 
            découvrez comment écrire l&apos;histoire avec THE SUKEBAN
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-gray-100 font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-3 justify-center"
            >
              📩 Devenir partenaire
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-pink-500 font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-3 justify-center"
            >
              ℹ️ Notre histoire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}