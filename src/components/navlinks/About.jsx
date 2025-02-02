import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Footer from "../Footer";
import gym from "../../assets/gympic.jpg";
import prof from "../../assets/profpic.jpg";

const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-center md:-repeat min-h-screen"
        style={{ backgroundImage: `url(${gym})` }}
      >
        <Link to="/" >

            <img
              src={logo}
              alt="site logo"
              className="sticky h-14"
            />
        </Link>

        <p className="bg-slate-700 text-white w-2/3 p-5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio voluptatibus sunt et perspiciatis laborum? Eum earum, illum, eveniet ullam voluptas voluptatum officiis esse hic commodi doloremque veniam aspernatur! Enim.. <br />
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi fuga recusandae vero unde, dolores ipsum qui eius, consequatur facilis molestias facere totam tempora voluptatibus neque illum provident? Voluptas, mollitia. <br />
          <br />
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
