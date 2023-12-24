import { useState } from "react";
import img1 from "../images/img1.png";
import {FiBell, FiPlus} from "react-icons/fi";
import {IoMdArrowDown} from "react-icons/io";
import { Link } from "react-router-dom";
import Menu from "./Menu";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return <nav className="navbar">
      {/* Left */}
      <div className="navLeft">
        <Link to="/">
        <img src={img1} alt="" />
        </Link>

        <div>
            <input type="text" placeholder="Search or jump to " />
        </div>
      </div>

      {/* Center */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>

      {/* Right */}
      <div className="navRight">
        <FiBell />
        <div className="navRightIcons">
            <FiPlus />
            <IoMdArrowDown />
        </div>
        <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
            <img src="https://avatars.githubusercontent.com/u/133630500?v=4" alt="" />
            <IoMdArrowDown/>
        </div>
      </div>
      {showMenu && <Menu />}
  </nav>
}

export default Navbar