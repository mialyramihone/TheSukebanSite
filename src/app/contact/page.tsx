'use client';

export default function Contact() {
  return (
    <>
    
      <section
        className="relative text-center py-16 md:py-24 lg:py-32 px-4 bg-cover bg-center min-h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/fond.jpg)',
          
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
       Contactez <span className="text-pink-300">THE SUKEBAN</span>
          </h1>
          <p className="text-lg md:text-xl text-pink-300 opacity-90">
            Une question, un partenariat ou envie de rejoindre l’aventure ?  
            Notre équipe est là pour vous répondre rapidement 
          </p>
        </div>
      </section>

      {/* Section Contact */}
<div className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6">
    
    
    <div className="text-center mb-16">
      <div className="flex justify-center items-center mb-6">
        <div className="w-12 h-0.5 bg-gray-300 mr-4"></div>
        <span className="text-pink-500 font-semibold">Contact</span>
        <div className="w-12 h-0.5 bg-gray-300 ml-4"></div>
      </div>
      <h2 className="text-4xl font-light text-gray-900 mb-4">Restons en contact</h2>
      <p className="text-gray-600 text-lg">La façon la plus simple de nous joindre</p>
    </div>


    <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center mb-16 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-32 h-32 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-pink-100">
        <svg className="w-16 h-16 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </div>
      
      <h3 className="text-2xl font-medium text-gray-900 mb-4">Notre page Facebook</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Rejoignez notre communauté pour suivre toutes nos actualités, tournois et événements.
      </p>
      
      <a
        href="https://www.facebook.com/profile.php?id=61577528661604"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
      >
        <span>THE SUKEBAN ˢᴷ</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </a>
    </div>


    <div className="bg-pink-50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-gray-900">Questions fréquentes</h3>
        <p className="text-gray-600">Trouvez rapidement une réponse à votre question</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { q: "Comment rejoindre l'équipe ?", a: "Envoyez vos motivations via notre formulaire" },
          { q: "Quels jeux pratiquez-vous ?", a: "Free Fire principalement + jeux compétitifs" },
          { q: "Partenariats possibles ?", a: "Contactez-nous directement sur Facebook" },
          { q: "Horaires de contact ?", a: "Lundi au samedi, 07h-20h" },
          { q: "Gratuit de rejoindre ?", a: "Oui, totalement gratuit" },
          { q: "Streamers acceptés ?", a: "Oui, nous collaborons avec des créateurs" }
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-pink-300 transition-colors">
            <h4 className="font-medium text-pink-600 mb-2">{item.q}</h4>
            <p className="text-gray-600 text-sm">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


    </>
  );
}
