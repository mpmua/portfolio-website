// import './App.css'
import { useEffect, useState } from "react";
import { FaGithub, FaPlay, FaFirefoxBrowser, FaApple } from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";

function App() {
  const [showRoleText, setShowRoleText] = useState(false);
  const [showSkillsText, setShowSkillsText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRoleText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkillsText(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="page-wrap w-11/12 mx-auto">
      <section className="hero h-[80vh] flex items-center justify-center text-center mb-10 bg-slate-500 text-white">
        <div className="name-text text-4xl pl-10">
          <p>Hi, i'm</p>
          <h1 className="text-8xl mb-4">Mohammed</h1>
          <h1 className="text-6xl">Front End Web Developer</h1>
        </div>
      </section>
      <section className="projects-text text-4xl text-center pb-14">
        <h1>PROJECTS</h1>
      </section>
      <section className="single-app-info-section-wrap mb-32 bg-white shadow-2xl">
        <section className="app-img-and-text-wrap flex flex-col lg:flex-row mb-10">
          <div className="showcase-image flex items-center justify-center bg-slate-500">
            <img
              className="lg:w-10/12 w-8/12 my-9"
              src="/src/img/mta-showcase.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="lg:w-1/2 p-5 show-text-wrap">
            <h1 className="text-4xl text-center lg:text-left mb-5">
              My Tasbeeh App
            </h1>
            <p className="mb-10">
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

      <section className="single-app-info-section-wrap mb-32 bg-white shadow-2xl">
        <section className="app-img-and-text-wrap flex flex-col lg:flex-row mb-10">
          <div className="showcase-image flex items-center justify-center bg-slate-500">
            <img
              className="lg:w-10/12 w-8/12 my-12"
              src="/assets/img/pw-showcase.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="lg:w-1/2 p-5 show-text-wrap">
            <h1 className="text-4xl text-center lg:text-left mb-5">
              Pure Weather
            </h1>
            <p className="mb-10">
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
                Javascript
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

      <section className="single-app-info-section-wrap mb-32 bg-white shadow-2xl">
        <section className="app-img-and-text-wrap flex flex-col lg:flex-row mb-10">
          <div className="showcase-image flex items-center justify-center bg-slate-500">
            <img
              className="lg:w-10/12 w-8/12 my-12"
              src="/assets/img/mgc-showcase.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="lg:w-1/2 p-5 show-text-wrap">
            <h1 className="text-4xl text-center lg:text-left mb-5">
              Mini Games Collection
            </h1>
            <p className="mb-10">
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
                Javascript
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
    </section>
  );
}

export default App;
