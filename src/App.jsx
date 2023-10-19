import { useState } from "react";
// import './App.css'

function App() {
  return (
    <>
      <section className="page-wrap">
        <section className="py-24">Reserved for hero</section>

        <section className="single-app-info-section-wrap mb-32 bg-white w-11/12 mx-auto shadow-2xl">
          <section className="app-img-and-text-wrap flex flex-row justify-between items-center max-w-screen-xl gap-11 mb-10">
            <div>
              <img
                width="2800"
                height="2600"
                src="/assets/img/mta-showcase.png"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <h1 className="text-4xl mb-5">My Tasbeeh App</h1>
              <p>
                mi proin sed libero enim sed faucibus turpis in eu mi bibendum
                neque egestas congue quisque egestas diam in arcu cursus euismod
                quis viverra nibh cras pulvinar mattis nunc sed blandit libero
                volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut
                tristique et egestas quis ipsum suspendisse ultrices
              </p>
            </div>
          </section>
          <section className="tech-logos-wrap flex justify-around mb-10">
            <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-1">
              HTML5
            </span>
            <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-1">
              CSS3
            </span>
            <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-1">
              ReactJS
            </span>
            <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-1">
              Capacitor
            </span>
          </section>
          <section className="store-links-section">
            <ul className="store-links-ul flex justify-end">
              <li className="store-link w-auto">
                <a
                  href="https://apps.apple.com/us/app/my-tasbeeh-app/id6449438967"
                  target="_blank"
                >
                  <img
                    width="40%"
                    src="/assets/img/app-store-icon.webp"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li className="store-link">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tasbeeh.my"
                  target="_blank"
                >
                  <img
                    width="40%"
                    src="/assets/img/google-play-icon.webp"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section className="single-app-info-section-wrap mb-32">
          <section className="app-img-and-text-wrap flex flex-row justify-between items-center flex-row-reverse max-w-screen-xl gap-11 mb-10">
            <div>
              <img
                width="2800"
                height="2600"
                src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <h1 className="text-4xl mb-5">Pure Weather</h1>
              <p>
                mi proin sed libero enim sed faucibus turpis in eu mi bibendum
                neque egestas congue quisque egestas diam in arcu cursus euismod
                quis viverra nibh cras pulvinar mattis nunc sed blandit libero
                volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut
                tristique et egestas quis ipsum suspendisse ultrices
              </p>
            </div>
          </section>
          <section className="tech-logos-wrap flex justify-around mb-10">
            <img
              width="50"
              height="60"
              src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
              alt=""
              srcset=""
            />
            <img
              width="50"
              height="60"
              src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
              alt=""
              srcset=""
            />
            <img
              width="50"
              height="60"
              src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
              alt=""
              srcset=""
            />
          </section>
          <section className="store-links-section">
            <ul className="store-links-ul flex justify-around">
              <li className="store-link">
                <a
                  href="https://apps.apple.com/us/app/my-tasbeeh-app/id6449438967"
                  target="_blank"
                >
                  <img
                    width="40%"
                    src="/assets/img/app-store-icon.webp"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li className="store-link">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tasbeeh.my"
                  target="_blank"
                >
                  <img
                    width="40%"
                    src="/assets/img/google-play-icon.webp"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section className="single-app-info-section-wrap mb-32">
          <section className="app-img-and-text-wrap flex flex-row justify-between items-center max-w-screen-xl gap-11 mb-10">
            <div>
              <img
                width="2800"
                height="2600"
                src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <h1 className="text-4xl mb-5">Mini Games Collection</h1>
              <p>
                mi proin sed libero enim sed faucibus turpis in eu mi bibendum
                neque egestas congue quisque egestas diam in arcu cursus euismod
                quis viverra nibh cras pulvinar mattis nunc sed blandit libero
                volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut
                tristique et egestas quis ipsum suspendisse ultrices
              </p>
            </div>
          </section>
          <section className="tech-logos-wrap flex justify-around mb-10">
            <img
              width="50"
              height="60"
              src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
              alt=""
              srcset=""
            />
            <img
              width="50"
              height="60"
              src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
              alt=""
              srcset=""
            />
            <img
              width="50"
              height="60"
              src="https://res.infoq.com/news/2020/07/capacitor-2-auth-cors/en/headerimage/IONIC-capacitor-1596113791077.jpg"
              alt=""
              srcset=""
            />
          </section>
          <section className="store-links-section">
            <ul className="store-links-ul flex justify-around">
              <li className="store-link">
                <a
                  href="https://apps.apple.com/us/app/my-tasbeeh-app/id6449438967"
                  target="_blank"
                >
                  <img
                    width="40%"
                    src="/assets/img/app-store-icon.webp"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li className="store-link">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tasbeeh.my"
                  target="_blank"
                >
                  <img
                    width="40%"
                    src="/assets/img/google-play-icon.webp"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
