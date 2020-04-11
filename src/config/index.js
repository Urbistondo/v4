module.exports = {
  siteTitle: 'Javier Urbistondo | Software Engineer',
  siteDescription:
    'Javier Urbistondo is a software engineer based in Madrid, Spain who specializes in back-end engineering and distributed systems.',
  siteKeywords:
    'Javier Urbistondo, Javier, Urbistondo, javiurbistondo, software engineer, back-end engineer, web developer, LMU, Deusto',
  siteUrl: 'https://javierurbistondo.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Javier Urbistondo',
  location: 'Madrid, Spain',
  email: 'urbistondo.javier@gmail.com',
  github: 'https://github.com/Urbistondo',
  twitterHandle: '@JaviUrbistondo',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Urbistondo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/javierurbistondo',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/javiurbistondo',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/JaviUrbistondo',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
