const browserIcon = "<i class='fa-brands fa-chrome'></i>";
const appleIcon = "<i class='fa-brands fa-apple'></i>";
const googleIcon = "<i class='fa-brands fa-google-play'></i>";
const githubIcon = "<i class='fa-brands fa-github'></i>";

const projectsArray = [
  {
    img: "./img/msa-showcase.png",
    title: "My Salah App",
    text: "A prayer habit tracker built with React, used by 1000+ active users and rated 4.8★ across app stores. It works fully offline thanks to local SQLite storage and includes a custom-built calendar view to help users spot streaks and stay on track. I focused on a clean interface and smooth animations to keep the experience simple and engaging.",
    tech: [
      "ReactJS",
      "Typescript",
      "Tailwind CSS",
      "SQLite",
      "Ionic",
      "CapacitorJS",
    ],
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
    text: "A counter application built with React and used by 700+ active users, with a 4.9★ rating across app stores. Designed for offline use with daily reminders and auto-reset features to build consistent habits. I kept the interface clean and implemented end-to-end testing with Cypress.",
    tech: [
      "ReactJS",
      "Typescript",
      "Tailwind CSS",
      "SQLite",
      "Ionic",
      "CapacitorJS",
      "Cypress",
    ],
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
  {
    img: "./img/task-manager-showcase.png",
    title: "Task Manager",
    text: "A full-stack task manager built for a job interview assignment, designed to reflect real-world workflows like status updates and deadlines. I focused on clean UX and wrote unit tests with Jest, hitting 100% coverage on the backend and 97% on the frontend.",
    tech: [
      "ReactJS",
      "Express.js",
      "Typescript",
      "Tailwind CSS",
      "SQLite",
      "Jest",
    ],
    linksArray: [
      {
        link: "https://github.com/mpmua/task-manager",
        icon: githubIcon,
        text: "Source",
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
