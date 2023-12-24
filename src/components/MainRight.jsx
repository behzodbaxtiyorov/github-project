import { IoBulbOutline} from "react-icons/io5";
import { MdRssFeed} from "react-icons/md";
import img1 from "../images/img1.png";
import { Link } from "react-router-dom";
function MainRight() {
  return (
    <div className="mainRight">
       <div className="mainRightContainer">
        <div className="mainRightText">
          <h2>Following</h2>
          <h2>For you</h2>
        </div>
        <div className="lineTwo" />

        <div className="box">
          <h2>
            Welcome ... this 
          </h2>
          <p>
            Follow me on <span><a href="https://www.instagram.com/bekhzodbakhtiyorov/">Instagram</a></span>, <span>Twitter</span> and <span>You Tube</span>
          </p>
          <button className="btn">
            <Link to="/profile">GitHub</Link>
          </button>
        </div>
        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit necessitatibus veritatis suscipit amet error?</p>
          </div>
          <div className="boxCenterFirst">
            <MdRssFeed />
            <p>Subscribe to the channel, to stray updated </p>
          </div>
        </div>

        {/* */}
        <div className="footer">
          <div className="footerFirst">
            <img src={img1} alt="" />
            <h4>GitHub Clone</h4>
          </div>
          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>GitHub Clone</h4>
              <h4>Pricing</h4>
            </div>
            <div className="footerSecondInside">
              <h4>API</h4>
              <h4>Training</h4>
              <h4>Status</h4>
              <h4>Security</h4>
            </div>
            <div className="footerSecondInside">
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
            </div>
          </div>
        </div>
        <div className="lineTwo" />
       </div>

    </div>
  )
}

export default MainRight