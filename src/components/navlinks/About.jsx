import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Footer from "../Footer";
import gym from "../../assets/gympic.jpg";
import prof from "../../assets/profpic.jpg";

const About = () => {
  return (
    <div className="h-screen ">
      <div
        className="bg-cover bg-center md:-repeat h-screen"
        style={{ backgroundImage: `url(${gym})` }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="site logo"
            className="sticky border-2 border-red-500 h-14 "
          />
        </Link>

        <p className="bg-slate-700 text-white w-2/3 p-5 mx-auto">
          I am a passionate and skilled full-stack web developer with a strong
          foundation in HTML, CSS, and JavaScript, and a growing expertise in
          PHP, particularly Laravel and WordPress. <br />
          <br />I hold a Software Engineering Certificate from NIIT, where I
          gained practical experience in web development and successfully built
          and deployed multiple web applications. Additionally, I am certified
          in computer science through Harvard University's CS50x, where
          I completed challenging projects that enhanced my coding and
          problem-solving abilities. <br />
          <br />
          Currently, I am honing my skills in modern technologies like Tailwind
          CSS and React, with a focus on creating efficient, scalable, and
          user-friendly solutions. My goal is to help businesses thrive by
          delivering high-quality websites and applications tailored to their
          unique needs.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
