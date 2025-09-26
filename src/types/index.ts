

export interface Member {
  id: string;
  pseudo: string;
  role: string;
  bio: string;
  slogan?: string;
  armeFav?: string;
  loisir?: string;
  tel?: {
    modele: string;
    depuis: string; 
  };
  debutJeu?: string; 
  styleJeu?: string; 
  image: string;
  socials?: {
    facebook?: string;
  };
  funFacts?: string[];
}

  
  export interface BlogPost {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    author: string;
    image?: string;
    category: string;
  }

