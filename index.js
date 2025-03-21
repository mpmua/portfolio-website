const pageWrapElement = document.querySelector(".page-wrap");
const singleAppCard = document.querySelector(".single-app-card");
const cardsSectionWrap = document.querySelector(".cards-section-wrap");

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

cardsSectionWrap.innerHTML = projectsArray
  .map((item) => {
    const techStack = item.tech.map((item) => {
      const techSpan = document.createElement("span");
      techSpan.className =
        "p-2 text-sm border-2 border-solid rounded-lg project-technology border-sky-200";
      techSpan.textContent = item;
      return techSpan.outerHTML;
    });

    const links = item.linksArray.map((item) => {
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      const linkSpan = document.createElement("span");
      linkSpan.className =
        "flex items-center justify-around gap-2 px-4 py-3 text-sm text-white rounded-md shadow-md cursor-pointer bg-slate-500";
      link.appendChild(linkSpan);
      const icon = document.createElement("span");
      icon.innerHTML = item.icon;
      linkSpan.appendChild(icon);
      const linkText = document.createElement("p");
      linkText.textContent = item.text;
      linkSpan.appendChild(linkText);
      return link.outerHTML;
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
            <h1 class="text-slate-700 text-4xl text-center xl:text-left mb-5">${
              item.title
            }</h1>
            <p class="mb-10 text-slate-700">
             ${item.text}
            </p>
            <div class="tech-logos-wrap flex mb-10 gap-3 flex-wrap text-slate-700">
            ${techStack.join("")}
            </div>
            <div class="project-links-section">
              <ul class="project-links-ul flex gap-3 flex-wrap">
               ${links.join("")}
              </ul>
            </div>
          </div>
        </section>
      </section>`;
  })
  .join("");
