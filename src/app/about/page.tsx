import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8 md:py-12">
      
      
      <section
        className="relative text-center py-16 md:py-24 lg:py-32 px-4 bg-cover bg-center min-h-[50vh] md:min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/fond.jpg) ' , marginTop: '-3rem'
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
            À propos de <span className="text-pink-300">THE SUKEBAN</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-pink-100 mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre histoire, nos missions et nos aventures dans le monde de l&apos;esport féminin.
          </p>
          
        </div>
        
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        
        
        <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
          
          
          <div className="bg-white/70 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 md:gap-8 transition-all duration-300 hover:shadow-2xl">
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56  overflow-hidden">
                <Image
                  src="/images/LOGO copie.png"
                  alt="Le début de THE SUKEBAN"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Notre histoire</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-pink-600 mb-4">Le Début d&apos;une Révolution</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <em className="text-pink-600 font-semibold">Sukeban</em> désigne les filles rebelles et indépendantes dans la culture japonaise. 
                Inspirées par cet esprit de résistance et de sororité, quelques amies passionnées de gaming ont décidé de créer 
                <strong> THE SUKEBAN</strong> en Juin 2025. Notre objectif était simple mais ambitieux : créer un espace où les femmes 
                pourraient s&apos;épanouir dans l&apos;esport sans barrières ni préjugés.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">Fondé en 2025</span>
                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">25 membres</span>
                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">Esport féminin</span>
              </div>
            </div>
          </div>


          <div className="bg-white/70 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 transition-all duration-300 hover:shadow-2xl">
            <div className="w-full lg:w-2/5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/pdc.png"
                  alt="Notre équipe grandit"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <span className="text-white font-semibold text-lg">Notre équipe en 2025</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Croissance</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-pink-600 mb-4">Une Équipe en Expansion</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Notre équipe s&apos;est soudée autour de valeurs fortes : <strong>solidarité, créativité et dépassement de soi</strong>. 
                Ce qui a commencé comme un petit groupe d&apos;amies est rapidement devenu une communauté florissante. 
                Aujourd&apos;hui, nous sommes fières d&apos;avoir atteint <strong className="text-pink-600">25 membres</strong>, 
                toutes passionnées et déterminées à repousser les limites de l&apos;esport féminin à Madagascar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/members" className="group bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
                  Découvrez tous nos membres 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="group border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
                  Rejoindre l&apos;équipe
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Nos Membres - amélioré */}
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Diversité</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-pink-600 mb-4">La Force de la Diversité</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Nos Talents</h3>
                <p className="text-gray-700 mb-4">
                  THE SUKEBAN réunit 25 filles talentueuses et passionnées. Chacune apporte sa personnalité et son style unique :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Créatrices de contenu innovantes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Joueuses compétitives d&apos;élite</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Managers et organisatrices talentueuses</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Notre Communauté</h3>
                <p className="text-gray-700 mb-4">
                  Au-delà de l&apos;équipe principale, THE SUKEBAN c&apos;est aussi une communauté grandissante :
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-pink-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">390+</div>
                    <div className="text-sm text-pink-800">Followers</div>
                  </div>
                  <div className="bg-pink-200 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">15+</div>
                    <div className="text-sm text-pink-800">Événements</div>
                  </div>
                  <div className="bg-pink-100 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">10+</div>
                    <div className="text-sm text-pink-800">Jeux pratiqués</div>
                  </div>
                  <div className="bg-pink-200 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-600">1</div>
                    <div className="text-sm text-pink-800">An d&apos;expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">

          {/* Objectifs */}
          <div className="bg-gradient-to-br from-pink-50 to-white backdrop-blur-md rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-pink-600">Objectifs</h3>
              </div>
              <ul className="text-gray-700 space-y-4 text-sm md:text-base">
                {[
                  "Devenir une référence de l'esport féminin à Madagascar et représenter le pays sur la scène internationale.",
                  "Inspirer et accompagner de nouvelles joueuses à développer leurs talents et leur passion.",
                  "Créer une communauté inclusive et soudée, où chaque membre se sent valorisé.",
                  "Encourager la créativité et l'innovation dans les stratégies et contenus gaming."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                    <span className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Missions */}
          <div className="bg-gradient-to-br from-purple-50 to-white backdrop-blur-md rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200/30 rounded-full -translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-black-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-black-600">Missions</h3>
              </div>
              <ul className="text-gray-700 space-y-4 text-sm md:text-base">
                {[
                  "Encourager le dépassement de soi, l'esprit d'équipe et la créativité chez chaque membre.",
                  "Promouvoir la diversité et l'inclusion dans le monde du gaming à Madagascar.",
                  "Partager nos connaissances et expériences pour inspirer de nouvelles joueuses.",
                  "Renforcer la cohésion et la solidarité au sein de la communauté THE SUKEBAN."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Règlements et Formations - amélioré */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">

          {/* Règlements */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-pink-600">Règlements</h3>
              <p className="text-gray-600 mt-2">Les principes qui guident notre communauté</p>
            </div>
            <ul className="text-gray-700 space-y-4 text-sm md:text-base">
              {[
                "Respect de toutes les membres et de la communauté.",
                "Pas de triche ni de comportement toxique.",
                "Participation active aux activités de l'équipe.",
                "Communication claire et bienveillance entre toutes les membres."
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border-l-4 border-pink-500">
                  <svg className="w-5 h-5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Formations & Rôles */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-v mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black">Formations & Rôles</h3>
              <p className="text-gray-600 mt-2">Notre structure et notre approche de développement</p>
            </div>
            <ul className="text-gray-700 space-y-4 text-sm md:text-base">
              {[
                "Formations stratégiques pour chaque jeu, activité et projet interne.",
                "Rôles définis : joueuses, créatrices de contenu, managers, coachs.",
                "Sessions régulières de coaching et team building.",
                "Suivi personnalisé pour progresser individuellement et collectivement."
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border-l-4 border-black">
                  <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section CTA finale */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-800 rounded-2xl md:rounded-3xl shadow-xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Prête à nous rejoindre ?</h2>
          <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
            Que vous soyez joueuse passionnée, créatrice de contenu ou simplement curieuse, 
            il y a une place pour vous dans l&apos;aventure THE SUKEBAN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/20 font-bold py-3 px-8 rounded-full transition-all duration-300">
              Plus d&apos;informations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}