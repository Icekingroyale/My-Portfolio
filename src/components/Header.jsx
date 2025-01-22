import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";


const Header = () => {


  return (
    <header className="w-full bg-blue-500 ">
      <nav className="flex justify-between ">
        <NavLink to="/">
          <img src={logo} alt="site logo" className="h-14 " />
        </NavLink>
        <ul className="flex gap-2 mx-2 my-4">
          <NavLink to="/about"><li>About</li> </NavLink>
          <Link to="https://medium.com/@okehchimaobi" target="_blank">
          Articles</Link>
          <NavLink to="/contact"><li className="px-2 bg-green-500 border-2 border-gray-600 rounded-md hover:bg-green-800 hover:text-white">Contact</li></NavLink>
          
          <NavLink to="/resume"><li>Resume</li></NavLink>
        </ul>        
      </nav>

    </header>
  );
};

export default Header;
