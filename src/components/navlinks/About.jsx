import Footer from "../Footer";
import gym from "../../assets/gympic.jpg";
import Header from "../Header";


const About = () => {
  return (
    <>
        <Header />
      <div
        className="bg-cover bg-center lg:bg-right-top min-h-screen pt-16"
        style={{ backgroundImage: `url(${gym})`}}
      >
        {/* <Link to="/" >

            <img
              src={Logo}
              alt="site logo"
              className="sticky h-14 lg:invert inline-block"
            />
        </Link> */}

        <p className="bg-slate-700 text-white w-2/3 p-5 mx-auto opacity-85 lg:absolute lg:top-20 left-0 lg:w-1/4 rounded-lg leading-7 xl:leading-10 md:relative md:top-96 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio voluptatibus sunt et perspiciatis laborum? Eum earum, illum, eveniet ullam voluptas voluptatum officiis esse hic commodi doloremque veniam aspernatur! Enim.. <br />
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi fuga recusandae vero unde, dolores ipsum qui eius, consequatur facilis molestias facere totam tempora voluptatibus neque illum provident? Voluptas, mollitia. <br />
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel dicta consectetur ipsum quod ullam quo, fugiat dolores magnam culpa ad alias saepe enim ab soluta velit similique corrupti vero!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
