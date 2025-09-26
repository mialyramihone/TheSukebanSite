import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Illustration gaming */}
        <div className="text-8xl mb-8">🎮</div>
        
        {/* Message d'erreur */}
        <h1 className="text-9xl font-bold text-pink-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Level Not Found</h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Oups ! Il semble que vous ayez pris un mauvais warp zone. 
          Cette page n&apos;existe pas dans notre univers gaming.
        </p>

        {/* Boutons de navigation */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            href="/blog" 
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 inline-block font-semibold transition"
          >
            Retour à l&apos;activités
          </Link>
          
        </div>

        {/* Message fun */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">
            <strong>Tip:</strong> Vérifiez l&apos;URL ou utilisez la navigation pour trouver votre chemin !
          </p>
        </div>
      </div>
    </div>
  );
}