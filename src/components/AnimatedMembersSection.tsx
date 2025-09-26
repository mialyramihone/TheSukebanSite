'use client';

import { useRef, useEffect, useState } from 'react';
import { members } from '@/data/members';

export default function AnimatedMembersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedMembers = [...members, ...members, ...members];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.8;

    const animateScroll = () => {
      if (scrollContainer && !isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            L&apos;Équipe Légendaire
          </h2>
          <p className="text-xl text-gray-600">
            25 joueuses d&apos;élite unies par la passion du gaming
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden py-8 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-8 flex-nowrap">
            {duplicatedMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="flex-shrink-0 w-100 bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-t from-pink-400 to-pink-700 rounded-full mx-auto flex items-center justify-center text-2xl text-white font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {member.pseudo.charAt(0)}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                {member.role}
                </h3>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
