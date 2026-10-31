export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  slug: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
}
