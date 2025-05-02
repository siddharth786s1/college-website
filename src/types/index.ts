export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  credits: number;
  departments: string[];
  courses: Course[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  credits: number;
  prerequisites: string[];
}

export interface Faculty {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
  bio: string;
  education: string[];
  research: string[];
  email: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationLink?: string;
}

export interface Student {
  id: string;
  name: string;
  major: string;
  year: string;
  image: string;
  testimonial: string;
}