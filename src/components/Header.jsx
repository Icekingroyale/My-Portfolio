import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";





const Header = () => {
  return (
    <div className="w-full bg-blue-500 ">
      <nav className="flex justify-between">
        <NavLink to="/">
          <img src={logo} alt="site logo" className="h-14 " />
        </NavLink>
        <ul className="flex gap-2 my-4 mx-2">
          <NavLink to="/about"><li>About</li> </NavLink>
          <Link to="https://medium.com/@okehchimaobi" target="_blank">
          Articles</Link>
          <NavLink to="/contact"> <li>Contact</li></NavLink>
          <NavLink to="/resume"><li>Resume</li></NavLink>
        </ul>
           

      </nav>

    

    </div>
  );
};

export default Header;
