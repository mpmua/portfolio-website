const pageContainer = document.querySelector(".page-wrap");
const projectsContainer = document.querySelector(".projects-container");

let isVisible = null;

let options = {
  root: pageContainer,
  rootMargin: "0px",
  threshold: 1.0,
};

projectsContainer.innerHTML = projectsArray
  .map((item) => {
    const techStack = item.tech.map((item) => {
      const techSpan = document.createElement("span");
      techSpan.className = "tech-span";
      techSpan.textContent = item;
      return techSpan.outerHTML;
    });

    const links = item.linksArray.map((item) => {
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      const linkSpan = document.createElement("span");
      linkSpan.className = "project-link";
      link.appendChild(linkSpan);
      const icon = document.createElement("span");
      icon.innerHTML = item.icon;
      linkSpan.appendChild(icon);
      const linkText = document.createElement("p");
      linkText.textContent = item.text;
      linkSpan.appendChild(linkText);
      return link.outerHTML;
    });

    return `<section class="project-card">

          <div
            class="project-image-container"
          >
            <img
              src=${item.img}
              alt=""
              srcset=""
            />
          </div>
          <div class="project-content-container">
            <h3>${item.title}</h3>
            <p>
             ${item.text}
            </p>
             <div class="project-skills">${techStack.join("")}</div>
            <div class="project-links">
              <ul>
               ${links.join("")}
              </ul>
            </div>
          </div>
      </section>`;
  })
  .join("");
