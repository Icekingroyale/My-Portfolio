
import React from 'react';
import { useState, useEffect } from 'react';
import aboutpic from "../assets/icon.jpg";


const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased flex justify-center items-start pt-20 p-4 sm:p-8">
      <div className="container mx-auto max-w-7xl sm:mt-0">
        <AboutMeSection />
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const profilePic = "https://placehold.co/400x500/E8E8E8/333333?text=Your+Photo";
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
      
      {/* Image Section - Left on desktop, Top on mobile */}
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mb-8 md:mb-0 mt-6 sm:mt-0">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={aboutpic}
            alt="A professional headshot of Alex"
            className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      
      {/* Content Section - Right on desktop, Bottom on mobile */}
      <div className="w-full md:w-1/2 lg:w-3/5 xl:w-2/3">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          About Me
        </h1>
        <h2 className="text-xl sm:text-2xl font-light text-neutral-500 mb-8">
          I'm a certified software engineer...
        </h2>
        <p className="leading-relaxed text-base sm:text-lg text-neutral-700 mb-6">
          From the first time I saw the <span className="text-blue-600 font-medium">Johny Castaway screensaver</span> on my dad's old Windows PC, I was hooked. That quirky animation sparked a deep curiosity about computers and planted the seed for my journey into tech.
        </p>
        <p className="leading-relaxed text-base sm:text-lg text-neutral-700 mb-6">
          Today, I focus on <span className="text-blue-600 font-medium">web development</span> but remain drawn to other areas like mobile apps, game development, and beyond. Each project is both a challenge and an opportunity to explore, experiment, and expand my skills. The rise of <span className="text-blue-600 font-medium">AI</span> has only fueled this drive—working with AI as a coding partner lets me move faster, think bigger, and push past limits.
        </p>
        <p className="leading-relaxed text-base sm:text-lg text-neutral-700">
          That same spirit of curiosity and innovation led me to create <span className="text-blue-600 font-bold">ICEKING LABS</span>, my personal tech brand inspired by Bell Labs.
        </p>
        
        {/* Social Links/Connect Button */}
        <div className="mt-8 flex items-center gap-4">
          <a href='mailto:okehchimaobi@gmail.com' className="px-6 py-3 rounded-full bg-neutral-900 text-white font-medium text-sm sm:text-base hover:bg-neutral-800 transition-colors duration-200">
            Let's Connect
          </a>
          {/* Example icons - you can replace with real links */}
          <a href="https://www.linkedin.com/in/chimaobiokeh" aria-label="LinkedIn" className="text-neutral-500 hover:text-blue-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.791 7 2.502v6.733z"/>
            </svg>
          </a>
          <a href="https://wa.link/dfkzgj" aria-label="WhatsApp" className="text-neutral-500 hover:text-green-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.915 18.067l-.744.225-2.256-.615.111-2.348-.145-.238c-1.353-2.196-.95-5.118 1.157-6.427 1.258-.78 2.893-.974 4.359-.475.25.086.5.184.74.293l.21.096c.214.098.428.197.63.303.22.115.426.234.62.361.16.105.313.218.46.338.253.208.484.425.688.665.176.208.337.426.491.65.14.2.27.41.385.626.11.206.213.418.307.63l.16.33c.083.176.155.356.219.539l.298.81c.075.21.139.426.195.645.05.195.093.393.129.593.033.18.058.361.077.543.018.188.026.377.026.568.016.326-.051.65-.198.96-.289.605-.722 1.144-1.343 1.547-.565.364-1.206.56-1.879.56-1.026 0-2.029-.444-2.723-1.125-.138-.135-.268-.277-.393-.42l-.244-.288c-.126-.149-.25-.299-.374-.45l-.234-.298c-.104-.132-.206-.264-.306-.398-.124-.167-.245-.333-.36-.502-.123-.179-.241-.358-.351-.539-.115-.194-.225-.386-.327-.577-.09-.17-.174-.343-.245-.515-.072-.172-.137-.346-.195-.516-.059-.173-.112-.345-.16-.516-.048-.172-.089-.344-.122-.516-.032-.17-.058-.342-.078-.514-.02-.17-.03-.34-.03-.512 0-.256.008-.512.024-.768l-.004-.002zm-1.616-5.87l.004-.002c.03-.497.168-.97.411-1.383.568-.949 1.764-1.42 2.923-1.42.493 0 .973.084 1.429.252l.142.046c.456.168.887.415 1.28.73.498.398.922.898 1.258 1.458.349.562.585 1.178.697 1.838.106.602.105 1.217.025 1.815-.084.62-.272 1.206-.566 1.737-.294.532-.67 1.01-1.119 1.417-.468.42-1.01.766-1.613.992-.489.176-.98.29-1.469.349l-.54.062c-.489.059-.979.05-1.468-.027-.373-.06-.734-.158-1.077-.294-.342-.136-.66-.308-.952-.517-1.159-.838-1.728-2.228-1.579-3.784z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
