import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs, 
  tailwind,
  nodejs, 
  figma,
  docker,
  postgresql, 
  mongo,
  graphql, 
  eventsmgr,  
  dotnet,
  vue, 
  csharp, 
  laravel,
  freelance,
  innorik,
  faculty,
  banana,
  inventory
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'C-Sharp',
    icon: csharp,
  },
  {
    name: 'Dotnet',
    icon: dotnet,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'Mongo',
    icon: mongo,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  }, 
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer',
    company_name: 'Freelance',
    icon: freelance,
    iconBg: '#333333',
    date: 'Jan 2019 - May 2023',
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Innorik Gh Ltd',
    icon: innorik,
    iconBg: '#333333',
    date: 'Oct 2023 - May 2023',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'FacultyMIS',
    description: 'A faculty management system to facilitate effective communication between faculty members',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: faculty,
    repo: 'https://github.com/Lukada-taiya/FacultyMIS',
    demo: 'https://facultymis.azurewebsites.net/',
  },
  {
    id: 'project-2',
    name: 'Events Manager',
    description:
      'An app to manage participants of scheduled events',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: eventsmgr,
    repo: 'https://github.com/Lukada-taiya/events-mgr',
    demo: 'https://events-mgr.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'InventoryMS',
    description: 'An app to store and manage organization inventory built with React',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: '.net',
        color: 'pink-text-gradient',
      },
    ],
    image: inventory,
    repo: 'https://github.com/Lukada-taiya/InventoryMS',
    demo: 'https://github.com/Lukada-taiya/InventoryMS',
  },
  {
    id: 'project-4',
    name: 'Banana Services',
    description: `An Ecommerce Microservices .Net Application`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: banana,
    repo: 'https://github.com/Lukada-taiya/BananaServices',
    demo: 'https://github.com/Lukada-taiya/BananaServices',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
