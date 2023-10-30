const pageWrapElement = document.querySelector(".page-wrap");
const singleAppCard = document.querySelector(".single-app-card");

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

observer.observe(singleAppCard);
