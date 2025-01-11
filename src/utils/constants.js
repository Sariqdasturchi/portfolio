export const navMenu = [
  { id: 1, title: 'About' },
  { id: 2, title: 'Work' },
  { id: 3, title: 'Testimonials' },
  { id: 4, title: 'Contact' }
]

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import git from '../assets/git.png'
import tailwind from '../assets/tailwind.png'
import ts from '../assets/ts.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import sass from '../assets/sass.png'

export const skillsCard = [
  { id: 1, title: 'Html', url: html },
  { id: 2, title: 'Css', url: css },
  { id: 3, title: 'JavaScript', url: js },
  { id: 4, title: 'React JS', url: react },
  { id: 5, title: 'Tailwind', url: tailwind },
  { id: 6, title: 'TypeScript', url: ts },
  { id: 7, title: 'Node JS', url: nodejs },
  { id: 8, title: 'Git', url: git },
  { id: 9, title: 'Sass/Scss', url: sass },
  { id: 10, title: 'MongoDB', url: mongodb }
]

export const work = [
  {
    id: 1,
    name: 'Samarkand Youth Techno park',
    date: 'Feb 2024 - Mentor',
    job: 'Frontend Developer',
    description:
      'In February 2024, I was hired as a test worker at the Samarkand Youth Technopark in Samarkand, where I did a 1-month internship and then was hired. I have been working there to this day. By the way, I work there as a Frontend mentor and Frontend developer.'
  },
  {
    id: 2,
    name: 'Samarkand Tayloq IT-Center',
    date: 'Jan 2024 - Feb 2024 Mentor',
    job: 'Frontend Mentor',
    description:
      'In January 2024, I started working as a mentor at the IT-center training center in the Tayloq district of Samarkand. I worked there for 1 month and then left for some reason. Within 1 month, I developed some of the skills I needed.'
  },
  {
    id: 3,
    name: 'Upwork',
    date: '2023 - Freelancer',
    job: 'Frontend Developer',
    description:
      'In 2023, after registering on the Upwork platform and after several attempts, I received my first project and submitted it in full. Then, I slowly started receiving projects one after another, which I have been doing until now.'
  }
]

import ustozweb from '../assets/ustozweb.jpg'
import portfolio from '../assets/port.jpg'
import panda from '../assets/panda.jpg'
import turon from '../assets/turon.jpg'
import smm from '../assets/smm.jpg'

export const projects = [
  {
    id: 1,
    name: 'Ustozweb',
    description:
      'The ustozweb project is a website that provides training for creating websites and telegram bots, and also offers online courses in web programming.',
    tags: [
      'React',
      'Node js',
      'MongoDB',
      'Nest.js',
      'React-router-dom',
      'JavaScript',
      'Tailwindcss',
      'Figma',
      'Git'
    ],
    imageUrl: ustozweb,
    projectUrl: 'https://ustozweb.uz'
  },
  {
    id: 2,
    name: "Ko'rkam Dizayn",
    description:
      'Korkam Design website was created for a portfolio for a 3D-max Autocat architect.',
    tags: [
      'React',
      'React-router-dom',
      'i18-next react',
      'JavaScript',
      'Tailwindcss',
      'Figma',
      'Git'
    ],
    imageUrl: portfolio,
    projectUrl: 'https://www.abduhofizov.uz/'
  },
  {
    id: 3,
    name: 'Panda paint equipment',
    description:
      'Panda website was developed for a company that sells paints and accessories.',
    tags: [
      'React',
      'React-router-dom',
      'JavaScript',
      'Css',
      'Bootstarp',
      'Figma',
      'Git'
    ],
    imageUrl: panda,
    projectUrl: 'https://pandacham.netlify.app/'
  },
  {
    id: 4,
    name: 'Turan Flour',
    description:
      'Turon Un website was created as a model for the Turon Un sales company to sell flour and receive payments.',
    tags: [
      'React',
      'React-router-dom',
      'JavaScript',
      'Css',
      'Bootstrap',
      'Ant Dizayn',
      'Mui',
      'Figma',
      'Git'
    ],
    imageUrl: turon,
    projectUrl: 'https://turonunuz.netlify.app/'
  },
  {
    id: 5,
    name: 'Sarvar SMM',
    description:
      'Sarvar-SMM website has a frontend section for posting on Instagram, Telegram, Youtube and similar platforms..',
    tags: [
      'Html',
      'Css',
      'JavaScript',
      'Bootstrap',
      'Figma',
      'Git'
    ],
    imageUrl: smm,
    projectUrl: 'https://sarvar-smm.netlify.app/'
  }
]
