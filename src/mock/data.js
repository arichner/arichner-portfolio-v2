import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron Richner | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Aaron Richner',
  subtitle: 'Full Stack Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Software engineering is my second career but my first passion. A decade in the publishing industry taught me the finer points of a dying trade, and gave me the superpower of spotting every typo on every restaurant menu I encounter, much to my own chagrin.',
  paragraphTwo:
    "From my first simple Java application, I was hooked on coding. I took any excuse to write code, at work and at home. I'd found my calling. Later, in graduate school, I learned what it means to be a Software Engineer: architecture, design, project management, formal methods, data modeling, and more.",
  paragraphThree:
    "I thrive in environments where I learn new things every day. I perform best when challenged, and am most engaged when I can't figure something out.",
  resume: 'https://linkedin.com/in/awrichner', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};
