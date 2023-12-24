import {AiOutlineInbox} from "react-icons/ai";
import {TbBook, TbBook2} from "react-icons/tb";
import {FiBox, FiStar} from "react-icons/fi";
import Left from "../components/Left";
import Overwiew from "../components/Overwiew";

function Profile() {
  return (
    <div className="profile">
       <nav>
        <div className="profileIcon">
            <TbBook />
            <h2>Overwiew</h2>
        </div>
        <div className="profileIcon">
            <TbBook2 />
            <h2>Respositories</h2>
        </div>
        <div className="profileIcon">
            <AiOutlineInbox />
            <h2>Projects</h2>
        </div>
        <div className="profileIcon">
            <FiBox />
            <h2>Packages</h2>
        </div>
        <div className="profileIcon">
            <FiStar />
            <h2>Stars</h2>
        </div>
       </nav>

       <div className="lineFour" />

       <div className="sectionCenter">
          <Left />
          <Overwiew />
       </div>
    </div>
  )
}

export default Profile