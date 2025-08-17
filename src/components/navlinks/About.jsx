import Footer from "../Footer";
import gym from "../../assets/gympic.jpg";
import Header from "../Header";
import { useMediaQuery } from "react-responsive"; //to conditional render the Fullpage slide for large screens
import Fullpage, { FullpageSection, FullPageSections, FullpageNavigation } from "@ap.cx/react-fullpage";



const About = () => {

  const isLargeScreen = useMediaQuery({ minWidth: 1024 })

  return isLargeScreen ? (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection>
          <Header />
          <div className=" bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] bg-yellow-700 flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] p-4 lg:p-8 gap-8">
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
        </FullpageSection>
        <FullpageSection>
          <Footer />
        </FullpageSection>
      </FullPageSections>  
    </Fullpage>
  ) :
    <>
      <Header />
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
