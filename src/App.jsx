import { useState } from "react";
// import './App.css'
import { FaGithub, FaPlay, FaFirefoxBrowser, FaApple } from "react-icons/fa";

function App() {
  return (
    <section className="page-wrap">
      <section className="py-24">Reserved for hero</section>

      <section className="single-app-info-section-wrap mb-32 bg-white w-11/12 mx-auto shadow-2xl">
        <section className="app-img-and-text-wrap flex flex-row justify-around items-center max-w-screen-xl gap-11 mb-10 ">
          <div className="bg-slate-500">
            <img
              width="2000"
              // height="2600"
              src="/assets/img/mta-showcase.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h1 className="text-4xl mb-5">My Tasbeeh App</h1>
            <p className="pb-12">
              mi proin sed libero enim sed faucibus turpis in eu mi bibendum
              neque egestas congue quisque egestas diam in arcu cursus euismod
              quis viverra nibh cras pulvinar mattis nunc sed blandit libero
              volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut
              tristique et egestas quis ipsum suspendisse ultrices
            </p>
            <div className="tech-logos-wrap flex mb-10 gap-3 flex-wrap">
              <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-2">
                HTML5
              </span>
              <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-2">
                CSS3
              </span>
              <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-2">
                ReactJS
              </span>
              <span className="project-technology border-solid border-2 border-sky-200 rounded-lg p-2">
                Capacitor
              </span>
            </div>
            <div className="store-links-section">
              <ul className="store-links-ul flex gap-3 flex-wrap">
                <li className="store-link w-auto">
                  <a
                    href="https://apps.apple.com/us/app/my-tasbeeh-app/id6449438967"
                    target="_blank"
                  >
                    {" "}
                    <span
                      className="px-4 py-3 flex justify-around items-center gap-2 bg-slate-500 
                      rounded-md shadow-md text-white text-sm  cursor-pointer"
                    >
                      <FaFirefoxBrowser />
                      <p>Live Demo</p>
                    </span>
                  </a>
                </li>
                <li className="store-link w-auto">
                  <a
                    href="https://apps.apple.com/us/app/my-tasbeeh-app/id6449438967"
                    target="_blank"
                  >
                    {" "}
                    <span
                      className="px-4 py-3 flex justify-around items-center gap-2 bg-slate-500 
                      rounded-md shadow-md text-white text-sm cursor-pointer"
                    >
                      <FaGithub />
                      <p>Source Code</p>
                    </span>
                  </a>
                </li>
                <li className="store-link">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tasbeeh.my"
                    target="_blank"
                  >
                    <span
                      className="px-4 py-3 flex justify-around items-center gap-2 bg-slate-500 
                      rounded-md shadow-md text-white text-sm cursor-pointer"
                    >
                      <FaApple />
                      <p>App Store</p>
                    </span>
                  </a>
                </li>
                <li className="store-link">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tasbeeh.my"
                    target="_blank"
                  >
                    <span
                      className="px-4 py-3 flex justify-around items-center gap-2 bg-slate-500 
                      rounded-md shadow-md text-white text-sm cursor-pointer"
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
        <section className="tech-logos-wrap flex mb-10">
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
  );
}

export default App;
