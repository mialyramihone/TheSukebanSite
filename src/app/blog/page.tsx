import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';


export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Section Hero */}
      <section
        className="relative text-center py-16 md:py-24 lg:py-32 px-4 bg-cover bg-center min-h-[50vh] md:min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/fond.jpg)'
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
        Activités de <span className="text-pink-300">THE SUKEBAN</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-pink-300 mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez notre activités et nos dernières nouvelles dans le monde de l&apos;esport féminin.
          </p>
        </div>
      </section>

      {/* Contenu des articles */}
     
     
      <div className="py-8 md:py-12">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8 md:gap-12">
      {blogPosts.map((post, index) => (
        <article key={post.id} className="group">
          <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } md:flex`}>
            
            {/* Zone image avec placeholder */}
            <div className="md:w-2/5">
              <div className="aspect-video md:aspect-square md:h-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex items-center justify-center">
                {/* Placeholder d'image - vous pourrez ajouter des images plus tard */}
                <div className="w-full h-full flex items-center justify-center text-gray-200">
                  <span className="text-6xl">📖</span>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
              </div>
            </div>
            
            {/* Zone contenu */}
            <div className="md:w-3/5 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gradient-to-t from-pink-800 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(post.date).toLocaleDateString('fr-FR')}
                </span>
              </div>
              
              <h2 className="text-3xl font-black text-gray-900 mb-4 leading-tight group-hover:text-pink-600 transition-colors">
                {post.title}
              </h2>
              
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <span className="font-medium text-gray-700">Par {post.author}</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold group-hover:gap-3"
              >
                Découvrir l&apos;article
                <span className="group-hover:translate-x-1 transition-transform">⟶</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>

    {blogPosts.length === 0 && (
      <div className="text-center py-24">
        <div className="text-9xl mb-8">🌱</div>
        <h3 className="text-4xl font-bold text-gray-800 mb-4">Plantons les graines du savoir</h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Notre jardin d&apos;articles est en préparation. Revenez bientôt pour découvrir 
          des contenus fraîchement cultivés !
        </p>
      </div>
    )}

    {blogPosts.length === 0 && (
      <div className="text-center py-24">
        <div className="text-9xl mb-8">🌱</div>
        <h3 className="text-4xl font-bold text-gray-800 mb-4">Plantons les graines du savoir</h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Notre jardin d&apos;articles est en préparation. Revenez bientôt pour découvrir 
          des contenus fraîchement cultivés !
        </p>
      </div>
    )}
  </div>
</div>


    </div>
  );
}