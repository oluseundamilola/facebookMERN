import { Bookmark, Event, Group, HelpOutline, Message, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@material-ui/icons"
import "./sidebar.css"
import { Users } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"
import { publicRequest } from "../../requestMethod";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [allUsers, setAllUsers] = useState([])

  useEffect( () => {
    const getAllUsers = async () => {
      try{
        const allMyUsers = await publicRequest.get("users/all")
        setAllUsers(allMyUsers.data)
        
      }catch(err){
        console.log(err)
      }
    }
    getAllUsers()

  }, [] )

  console.log(allUsers)


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {allUsers.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Sidebar