import React from "react";
import react from "../assets/react.svg";
import laravel from "../assets/laravel.svg";
import wordpress from "../assets/wordpress.png";
import tailwind from "../assets/tailwind.svg";





const Stack = () => {
  return (
    <div className="min-h-screen">
      <h2 className="py-5 font-medium text-center"> My Tech Stack </h2>
      <div className="grid justify-center grid-cols-1 gap-10 md:grid-cols-2 sm:grid-cols-2">


        <figure className="flex gap-10 mx-10 bg-slate-500 rounded-xl max-h-28">
          <img src={laravel} alt="laravel logo" className="h-20 m-2 " />
          <figcaption>
            <h3>Laravel</h3>
            <p>
              I develop full-stack application with Laravel (blade & inertia)

            </p>
          </figcaption>
        </figure>
        <figure className="flex gap-10 mx-10 bg-slate-500 rounded-xl">
          <img src={react} alt="reactjs logo" className="h-20 m-2" />
          <figcaption>
            <h3>React</h3>
            <p>
              ReactJs was my intro to scalable front-end UI components
            </p>
          </figcaption>
        </figure>
        <figure className="flex gap-10 mx-10 bg-slate-500 rounded-xl">
          <img src={wordpress} alt="wordpress logo" className="h-20 m-2" />
          <figcaption>
            <h3>WordPress</h3>
            <p>
              I develop custom wordpress themes and plugins to enable me create CRM for my clients.
            </p>
          </figcaption>
        </figure>
        <figure className="flex gap-10 mx-10 bg-slate-500 h- rounded-xl">
          <img src={tailwind} alt="tailwindcss logo" className="h-20 m-2" />
          <figcaption>
            <h3>Tailwind CSS</h3>
            <p>
              I use TailWind Css to quickly give my front-end UI a unique styling.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Stack;
