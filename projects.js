const browserIcon = "<i class='fa-brands fa-chrome'></i>";
const appleIcon = "<i class='fa-brands fa-apple'></i>";
const googleIcon = "<i class='fa-brands fa-google-play'></i>";
const githubIcon = "<i class='fa-brands fa-github'></i>";

const projectsArray = [
  {
    img: "/img/pw-showcase.png",
    title: "Pure Weather",
    text: "An open source weather application that was built using HTML, CSS and Vanilla Javascript.",
    tech: ["HTML5", "CSS3", "Javascript", "Vite", "Capacitor"],
    linksArray: [
      {
        link: "https://pure-weather.netlify.app/",
        icon: browserIcon,
        text: "Live Demo",
      },
      {
        link: "https://github.com/mpmua/pure-weather",
        icon: githubIcon,
        text: "Source",
      },
      {
        link: "https://play.google.com/store/apps/details/Pure_Weather?id=com.weatherapp.pure",
        icon: googleIcon,
        text: "Play Store",
      },
    ],
  },
  {
    img: "/img/mta-showcase.png",
    title: "My Tasbeeh App",
    text: "An open source Tasbeeh app",
    tech: ["HTML5", "CSS3", "Javascript", "Vite", "Capacitor"],
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
        link: "https://apps.apple.com/in/app/my-tasbeeh-app/id6449438967",
        icon: appleIcon,
        text: "App Store",
      },
      {
        link: "https://apps.apple.com/in/app/my-tasbeeh-app/id6449438967",
        icon: googleIcon,
        text: "Play Store",
      },
    ],
  },
  {
    img: "/img/mgc-showcase.png",
    title: "Mini Games Collection",
    text: "Four mini games built using HTML, CSS and Vanilla Javascript.",
    tech: ["HTML5", "CSS3", "Javascript", "Vite", "Capacitor"],
    linksArray: [
      {
        link: "https://mini-games-collection.netlify.app/",
        icon: browserIcon,
        text: "Live Demo",
      },
      {
        link: "https://github.com/mpmua/mini-games-collection",
        icon: githubIcon,
        text: "Source",
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.minigames.myapp",
        icon: googleIcon,
        text: "Play Store",
      },
    ],
  },
];
