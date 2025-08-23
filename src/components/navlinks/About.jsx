import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Footer from "../Footer";
import gym from "../../assets/gympic.jpg";
import Header from "../Header";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isFullpageWidth = useMediaQuery({ minWidth: 1024, maxWidth: 1920 });

  useEffect(() => {
    if (!isFullpageWidth) return;

    // Initialize fullpage
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      scrollOverflow: true,
      fitToSection: false,
      scrollingSpeed: 700,
      credits: { enabled: false }, // remove 'made with fullpage.js' watermark
      responsiveWidth: 1024,
      responsiveHeight: 600,

      afterRender() {
        if (window.fullpage_api?.reBuild) window.fullpage_api.reBuild();
      },
      afterResize() {
        if (window.fullpage_api?.reBuild) window.fullpage_api.reBuild();
      },
    });

    const onResize = () => window.fullpage_api?.reBuild?.();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.fullpage_api?.destroy('all');
    };
  }, [isFullpageWidth]);

  return isFullpageWidth ? (
    <div id="fullpage">
      <div className="section">
        <Header hasScrollableContent={false} />
        <div className="bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] bg-yellow-700 flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] p-4 lg:p-8 gap-8">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <div className="bg-slate-700 text-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
              <p className="leading-relaxed text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio voluptatibus sunt et perspiciatis laborum? Eum earum, illum, eveniet ullam voluptas voluptatum officiis esse hic commodi doloremque veniam aspernatur! Enim.. <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi fuga recusandae vero unde, dolores ipsum qui eius, consequatur facilis molestias facere totam tempora voluptatibus neque illum provident? Voluptas, mollitia. <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel dicta consectetur ipsum quod ullam quo, fugiat dolores magnam culpa ad alias saepe enim ab soluta velit similique corrupti vero!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <img 
              src={gym} 
              alt="about me" 
              className="rounded-lg shadow-xl w-full max-w-2xl h-auto mt-14 object-cover"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  ) :
    <>
      <Header hasScrollableContent={false} />
      <div className="min-h-[calc(100vh-4rem)] bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] bg-yellow-700 pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="bg-slate-700 text-white p-6 rounded-lg shadow-lg w-full">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio voluptatibus sunt et perspiciatis laborum? Eum earum, illum, eveniet ullam voluptas voluptatum officiis esse hic commodi doloremque veniam aspernatur! Enim.. <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi fuga recusandae vero unde, dolores ipsum qui eius, consequatur facilis molestias facere totam tempora voluptatibus neque illum provident? Voluptas, mollitia. <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel dicta consectetur ipsum quod ullam quo, fugiat dolores magnam culpa ad alias saepe enim ab soluta velit similique corrupti vero!
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img 
              src={gym} 
              alt="about me" 
              className="rounded-lg shadow-lg w-full max-w-2xl h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
};

export default About;
