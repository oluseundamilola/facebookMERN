import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import "./topbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

const Topbar = () => {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Damisocial</span>
        </Link>
        
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friends, post or video" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="toparIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="toparIconItem">
            <Chat />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="toparIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF+user.profilePicture : `${PF}persons/noAvater.jpg`} alt="" className="topbarImg" />
        </Link>
      </div>

    </div>
  )
}

export default Topbar