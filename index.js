const pageWrapElement = document.querySelector(".page-wrap");
const singleAppCard = document.querySelector(".single-app-card");
const cardsSectionWrap = document.querySelector(".cards-section-wrap");

// <span
//   class="project-technology border-solid border-2 border-sky-200 rounded-lg p-2 text-sm"
// >
//
// </span>

let isVisible = null;

let options = {
  root: pageWrapElement,
  rootMargin: "0px",
  threshold: 1.0,
};

const callback = (entries) => {
  isVisible = entries[0].isIntersecting;
  console.log(entries[0]);
  //   alert("Detected");
};

let observer = new IntersectionObserver(callback, options);

// observer.observe(singleAppCard);

cardsSectionWrap.innerHTML = projectsArray.map((item) => {
  const techStack = item.tech.map((item) => {
    const techSpan = document.createElement("span");
    techSpan.className =
      "project-technology border-solid border-2 border-sky-200 rounded-lg p-2 text-sm";
    techSpan.textContent = item;
    return techSpan.outerHTML;
  });

  return `<section class="single-app-card mb-24 bg-white shadow-2xl">
        <section class="app-img-and-text-wrap flex flex-col xl:flex-row mb-10">
          <div
            class="showcase-image flex items-center justify-center bg-slate-600 xl:w-1/2"
          >
            <img
              class="w-8/12 my-12"
              src=${item.img}
              alt=""
              srcset=""
            />
          </div>
          <div class="xl:w-1/2 p-5 show-text-wrap">
            <h1 class="text-4xl text-center xl:text-left mb-5">${
              item.title
            }</h1>
            <p class="mb-10">
             ${item.text}
            </p>
            <div class="tech-logos-wrap flex mb-10 gap-3 flex-wrap">
            ${techStack.join("")}
            </div>
            <div class="store-links-section">
              <ul class="store-links-ul flex gap-3 flex-wrap">
                <li class="store-link w-auto">
                  <a
                    href="https://pure-weather.netlify.app/settings.html"
                    target="_blank"
                  >
                    <span
                      class="px-4 py-3 flex justify-around items-center gap-2 bg-slate-500 rounded-md shadow-md text-white text-sm cursor-pointer"
                    >
                      <FaFirefoxBrowser />
                      <p>Live Demo</p>
                    </span>
                  </a>
                </li>
                <li class="source-code-link w-auto">
                  <a
                    href="https://github.com/mpmua/pure-weather/tree/main"
                    target="_blank"
                  >
                    <span
                      class="px-4 py-3 flex justify-around items-center gap-2 bg-slate-500 rounded-md shadow-md text-white text-sm cursor-pointer"
                    >
                      <FaGithub />
                      <p>Source Code</p>
                    </span>
                  </a>
                </li>

                <li class="store-link">
                  <a
                    href="https://play.google.com/store/apps/details/Pure_Weather?id=com.weatherapp.pure"
                    target="_blank"
                  >
                    <span
                      class="px-4 py-3 flex justify-around items-center gap-2 bg-slate-500 rounded-md shadow-md text-white text-sm cursor-pointer"
                    >
                      <FaPlay />
                      <p>Play Store</p>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>`;
});
