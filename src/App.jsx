import { useState } from "react";
// import './App.css'

function App() {
  return (
    <>
      <section className="page-wrap">
        <section className="py-24">Reserved for hero</section>

        <section className="single-app-info-section-wrap mb-32">
          <section className="app-img-and-text-wrap flex flex-row justify-between items-center max-w-screen-xl gap-11 mb-10">
            <div>
              <img
                width="2800"
                height="2600"
                src="/assets/img/reactjs-developer-221732.png"
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
            <img
              width="100"
              src="/assets/img/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png-removebg-preview.png"
              alt=""
              srcset=""
            />
            <img
              width="120"
              src="/assets/img/105104854-e5e42e80-5a67-11eb-8cb8-46fccb079062-removebg-preview.png"
              alt=""
              srcset=""
            />
            <img
              width="50"
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
          <section className="buttons-wrap flex justify-around">
            <button className="single-btn">btn</button>
            <button className="single-btn">btn</button>
            <button className="single-btn">btn</button>
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
          <section className="buttons-wrap flex justify-around">
            <button className="single-btn">btn</button>
            <button className="single-btn">btn</button>
            <button className="single-btn">btn</button>
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
          <section className="buttons-wrap flex justify-around">
            <button className="single-btn">btn</button>
            <button className="single-btn">btn</button>
            <button className="single-btn">btn</button>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
