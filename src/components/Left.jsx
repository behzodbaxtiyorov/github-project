import { MdInsertEmoticon } from "react-icons/md"


function Left() {
  return ( <div className="left">
    <div className="image">
      <img src="https://avatars.githubusercontent.com/u/133630500?v=4" alt="" />
      <div className="emonIconBox">
        <MdInsertEmoticon className="emoticon"/>
      </div>
    </div>

    <div className="leftDetailes">
        <h2>behzodbaxtiyorov</h2>
        <button>Edit profile</button>
    </div>
  </div>
    
  )
}

export default Left