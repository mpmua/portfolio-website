const browserIcon = "<i class='fa-brands fa-chrome'></i>";
const appleIcon = "<i class='fa-brands fa-apple'></i>";
const googleIcon = "<i class='fa-brands fa-google-play'></i>";
const githubIcon = "<i class='fa-brands fa-github'></i>";

const projectsArray = [
  {
    img: "./img/msa-showcase.png",
    title: "My Salah App",
    text: "A React app with 500+ active users and a 4.8★ rating, designed to help users track and improve their daily prayer habits. Built for fast, offline use with local SQLite storage, it features a custom calendar analytics dashboard to visualize habit streaks and user consistency. Focused on clean UX and smooth animations to boost engagement and retention.",
    tech: ["ReactJS", "Typescript", "Tailwind CSS", "SQLite", "CapacitorJS"],
    linksArray: [
      {
        link: "https://mysalahapp.netlify.app/",
        icon: browserIcon,
        text: "Live Demo",
      },
      {
        link: "https://github.com/My-Ummah-Apps/My-Salah-App",
        icon: githubIcon,
        text: "Source",
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.mysalahapp.app&hl=en-US",
        icon: googleIcon,
        text: "Play Store",
      },
      {
        link: "https://apps.apple.com/gb/app/my-salah-app/id6478277078",
        icon: appleIcon,
        text: "App Store",
      },
    ],
  },
  {
    img: "./img/mta-showcase.png",
    title: "My Tasbeeh App",
    text: "A React counter app with 500+ active users and a 4.9★ rating, engineered for a smooth, distraction-free experience. Features include offline persistence, daily reminders, and automatic counter resets to encourage consistent use. Built with clean UI design and validated by comprehensive Cypress E2E tests to ensure reliability.",
    tech: ["ReactJS", "Typescript", "CapacitorJS", "Cypress"],
    linksArray: [
      {
        link: "https://mytasbeehapp.netlify.app/",
        icon: browserIcon,
        text: "Live Demo",
      },
      {
        link: "https://github.com/My-Ummah-Apps/my-tasbeeh-app",
        icon: githubIcon,
        text: "Source",
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.tasbeeh.my&hl=en-US",
        icon: googleIcon,
        text: "Play Store",
      },
      {
        link: "https://apps.apple.com/in/app/my-tasbeeh-app/id6449438967",
        icon: appleIcon,
        text: "App Store",
      },
    ],
  },
  // {
  //   img: "./img/pw-showcase.png",
  //   title: "Pure Weather",
  //   text: "An open source weather application which offers daily / hourly weather forecasts, weather alerts and dynamic theme changes based on live weather. it utilizes the OpenWeatherMap API.",
  //   tech: ["HTML5", "CSS3", "Javascript", "CapacitorJS"],
  //   linksArray: [
  //     {
  //       link: "https://pure-weather.netlify.app/",
  //       icon: browserIcon,
  //       text: "Live Demo",
  //     },
  //     {
  //       link: "https://github.com/mpmua/pure-weather",
  //       icon: githubIcon,
  //       text: "Source",
  //     },
  //   ],
  // },
  // {
  //   img: "./img/mgc-showcase.png",
  //   title: "Mini Games Collection",
  //   text: "An application featuring four mini-games, storing user scores locally and updating high scores when required.",
  //   tech: ["HTML5", "CSS3", "Javascript", "CapacitorJS"],
  //   linksArray: [
  //     {
  //       link: "https://mini-games-collection.netlify.app/",
  //       icon: browserIcon,
  //       text: "Live Demo",
  //     },
  //     {
  //       link: "https://github.com/mpmua/mini-games-collection",
  //       icon: githubIcon,
  //       text: "Source",
  //     },
  //   ],
  // },
  {
    img: "./img/portfolio-showcase.png",
    title: "Portfolio",
    text: "This page! Responsive website built with HTML, CSS and Javascript. Each project is stored as an an individual object within a seperate javascript file and then auto-generated into html for easy maintenance.",
    tech: ["HTML5", "CSS3", "Javascript"],
    linksArray: [
      {
        link: "https://github.com/mpmua/portfolio-website",
        icon: githubIcon,
        text: "Source",
      },
    ],
  },
];
