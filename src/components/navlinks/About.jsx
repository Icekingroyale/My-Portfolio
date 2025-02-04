import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Footer from "../Footer";
import gym from "../../assets/gympic.jpg";


const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-center md:-repeat h-screen"
        style={{ backgroundImage: `url(${gym})`}}
      >
        <Link to="/" >

            <img
              src={Logo}
              alt="site logo"
              className="sticky h-14 invert inline-block"
            />
        </Link>

        <p className="bg-slate-700 text-white w-2/3 p-5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio voluptatibus sunt et perspiciatis laborum? Eum earum, illum, eveniet ullam voluptas voluptatum officiis esse hic commodi doloremque veniam aspernatur! Enim.. <br />
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi fuga recusandae vero unde, dolores ipsum qui eius, consequatur facilis molestias facere totam tempora voluptatibus neque illum provident? Voluptas, mollitia. <br />
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel dicta consectetur ipsum quod ullam quo, fugiat dolores magnam culpa ad alias saepe enim ab soluta velit similique corrupti vero!
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet perferendis necessitatibus, laboriosam dignissimos fugit. Minima alias rerum perferendis? Non inventore exercitationem adipisci minus error officiis repellendus porro natus consectetur?
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
