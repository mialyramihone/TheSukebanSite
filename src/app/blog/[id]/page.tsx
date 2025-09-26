import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-8 md:py-12">
      
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-pink-900 to-black text-white" style={{marginTop: '-3rem'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="bg-white/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>


      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        

        <article className="bg-white">
          {/* Métadonnées */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">Par {post.author}</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>
              {new Date(post.date).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>


          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-8">
              {post.content.split('\n').map((paragraph, index) => (
                <div key={index} className="relative">
                  <p className="text-lg leading-8">{paragraph}</p>
                  {index % 3 === 0 && index !== 0 && (
                    <div className="w-20 h-px bg-gray-200 my-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                Article publié dans <span className="font-semibold text-pink-700">{post.category}</span>
              </div>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-pink-700 hover:text-pink-900 font-semibold transition-colors"
              >
                <span>Lire un autre article</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}