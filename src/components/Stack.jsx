import React from "react";
import react from "../assets/react.svg";
import laravel from "../assets/laravel.svg";
import wordpress from "../assets/wordpress.png";
import tailwind from "../assets/tailwind.svg";

const Stack = () => {
  return (
    <div className="h-screen bg-red-500">
      <h2 className="font-medium text-center py-5"> My Tech Stack </h2>
      <div className="grid grid-cols-1 gap-10 justify-center md:grid-cols-2 sm:grid-cols-2">
        <figure className="bg-slate-500 mx-10 flex gap-10 rounded-xl">
          <img src={laravel} alt="laravel logo" className="h-20 m-2" />
          <figcaption>
            <h3>Laravel</h3>
            <p>
              I develop full-stack application with Laravel (blade & inertia)

            </p>
          </figcaption>
        </figure>
        <figure className="bg-slate-500 mx-10 flex gap-10 rounded-xl">
          <img src={react} alt="reactjs logo" className="h-20 m-2" />
          <figcaption>
            <h3>React</h3>
            <p>
              ReactJs was my intro to scalable front-end UI components
            </p>
          </figcaption>
        </figure>
        <figure className="bg-slate-500 mx-10 flex gap-10 rounded-xl">
          <img src={wordpress} alt="wordpress logo" className="h-20 m-2" />
          <figcaption>
            <h3>WordPress</h3>
            <p>
              I develop custom wordpress themes and plugins to enable me create CRM for my clients.
            </p>
          </figcaption>
        </figure>
        <figure className="bg-slate-500 mx-10 h- flex gap-10 rounded-xl">
          <img src={tailwind} alt="tailwindcss logo" className="h-20 m-2" />
          <figcaption>
            <h3>Tailwind CSS</h3>
            <p>
              I use TailWind Css to quickly give my front-end UI unique a styling.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Stack;
