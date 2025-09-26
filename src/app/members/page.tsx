"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { members } from "@/data/members";

import { User, Facebook } from "lucide-react";

export default function MembersPage() {
  return (
    <>
      {/* Section Hero */}
      <section
        className="relative text-center py-16 md:py-24 lg:py-32 px-4 bg-cover bg-center min-h-[50vh] md:min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/fond.jpg)",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
          Membres de <span className="text-pink-300">THE SUKEBAN</span> 
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-pink-300 mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez les talentueuses joueuses de THE SUKEBAN.
          </p>
        </div>
      </section>

      {/* Section Membres */}

      
      <div className="min-h-screen bg-white py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <div
          key={member.id}
          className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-pink-300 transition-all duration-500 hover:scale-[1.02] shadow-md hover:shadow-lg"
        >
          
          <div className="relative h-124 overflow-hidden">
            <img
              src={member.image}
              alt={member.pseudo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: "center top" , backgroundColor: '#9d174d'}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/25 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="mb-2">
                <span className="bg-pink-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {member.role}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-1">{member.pseudo}</h2>
            </div>
          </div>

          <div className="p-5">
            {member.slogan && (
              <p className="text-gray-600 italic text-center text-sm mb-4 leading-relaxed">
                &ldquo;{member.slogan}&rdquo;
              </p>
            )}

            <div className="flex justify-between text-xs text-gray-500 mb-4">
              {/* <span>🎮 {member.debutJeu}</span> */}
              <span>⚡ {member.styleJeu}</span>
            </div>

            <div className="flex gap-2">
                <Link
                  href={`/members/${member.id}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-500 text-white text-center py-2 rounded-lg text-sm font-semibold hover:bg-pink-600 transition-colors"
                >
                  <User className="w-4 h-4" /> 
                  Profil complet
                </Link>

                {member.socials?.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    title="Contact Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </>
  );
}
