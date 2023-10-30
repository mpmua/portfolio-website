const pageWrapElement = document.querySelector(".page-wrap");
const singleAppCard = document.querySelector(".single-app-card");

let options = {
  root: pageWrapElement,
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
