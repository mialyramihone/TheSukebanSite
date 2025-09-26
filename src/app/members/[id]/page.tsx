/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { members } from "@/data/members";
import Link from "next/link";

export default function MemberDetail({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id);

  if (!member) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          href="/members"
          className="inline-flex items-center text-rose-600 hover:text-rose-800 font-semibold mb-8 group transition-all"
        >
          <span className="mr-2 group-hover:-translate-x-2 transition-transform">◀</span>
          Retour à l&apos;équipe
        </Link>

        <div className="bg-white rounded-3xl shadow-lg border border-rose-100 overflow-hidden">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 border-b border-rose-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-rose-200 rounded-full blur-lg opacity-50"></div>
                <img
                  src={member.image}
                  alt={member.pseudo}
                  className="relative w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-rose-900 mb-2">{member.pseudo}</h1>
                <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-md">
                  {member.role}
                </span>
                {member.slogan && (
                  <p className="text-rose-600 italic text-lg mt-4">
                    &ldquo;{member.slogan}&rdquo;
                  </p>
                )}
              </div>
            </div>
          </div>


          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
                
              <div className="space-y-6">
                <div className="bg-rose-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-rose-900 mb-4">Présentation</h2>
                  <p className="text-rose-800 leading-relaxed">{member.bio}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* <div className="bg-white rounded-xl p-4 border border-rose-200 text-center">
                    <div className="text-2xl font-bold text-rose-700">{member.debutJeu}</div>
                    <div className="text-rose-600 text-sm">Début de jeu</div>
                  </div> */}
                  <div className="bg-white rounded-xl p-4 border border-pink-200 text-center">
                    <div className="text-lg font-semibold text-pink-700">{member.styleJeu}</div>
                    <div className="text-pink-600 text-sm">Style de jeu</div>
                  </div>
                </div>
              </div>


              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-rose-200">
                  <h3 className="text-xl font-bold text-rose-900 mb-4">Caractéristiques</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-rose-600 text-sm font-medium">Arme favorite</div>
                      <div className="text-rose-900 font-semibold">{member.armeFav}</div>
                    </div>
                    <div>
                      <div className="text-rose-600 text-sm font-medium">Loisir</div>
                      <div className="text-rose-900 font-semibold">{member.loisir}</div>
                    </div>
                  </div>
                </div>

                {member.funFacts && (
                  <div className="bg-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-pink-900 mb-4">Fun Facts</h3>
                    <ul className="space-y-2">
                      {member.funFacts.map((fact, i) => (
                        <li key={i} className="text-pink-800 flex items-start">
                          <span className="text-pink-400 mr-2 mt-1">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}