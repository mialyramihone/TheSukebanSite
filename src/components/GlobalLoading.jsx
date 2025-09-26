"use client";

import { useEffect, useState } from 'react';

export default function GlobalLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    
    document.body.style.overflow = 'hidden';
    
    let progressInterval;
    let loadTimeout;

    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    loadTimeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
      
      document.body.style.overflow = 'auto';
    }, 6000);

    return () => {
      clearTimeout(loadTimeout);
      clearInterval(progressInterval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  
  if (!isLoading) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-pink-50 to-purple-100 z-50 flex items-center justify-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'white'
      }}
    >
      <div className="text-center">
        <div className="relative mb-8">
          
          <div className="w-20 h-20 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto">
            </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-pink-600 mb-6">
          THE SUKEBAN
        </h1>

        <div className="mb-8">
          <p className="text-xl text-gray-700 mb-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Bienvenue sur notre site de gaming !
          </p>
        </div>
        
        <div className="w-80 mx-auto bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-pink-700 to-pink-900 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="text-gray-600 mb-2">
          <span className="font-bold text-pink-600">{progress}%</span>
        </div>
        
        <div className="text-gray-500 text-sm">
          {progress < 25 && "Chargement des composants..."}
          {progress >= 25 && progress < 50 && "Initialisation du gaming..."}
          {progress >= 50 && progress < 75 && "Préparation des équipes..."}
          {progress >= 75 && "Presque prêt..."}
        </div>
      </div>
    </div>
  );
}