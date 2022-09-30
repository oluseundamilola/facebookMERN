import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
import { useContext, useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

const Rightbar = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([])
  const {user:currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentUser.following.includes(user?._id))
  const [allFriends, setAllFriends] = useState([])
  console.log(currentUser.following)



  useEffect( () => {
    const getFriends = async () => {
      try{
        const friendList = await publicRequest.get("users/friends/"+user._id)
        setFriends(friendList.data)
      }catch(err){
        console.log(err)
      }
    }

    const getAllMyFriends = async () => {
      try{
        const allMyFriends = await publicRequest.get("users/all")
        setAllFriends(allMyFriends.data)
      }catch(err){
        console.log(err)
      }
    }
    
    getFriends()
    getAllMyFriends()
  },[user] )

const handleClick = async () => {
  try{
    if(followed){
      await publicRequest.put("/users/"+user._id+"/unfollow",{userId:currentUser._id})
      dispatch({ type:"UNFOLLOW", payload:user._id })
    }else{
      await publicRequest.put("/users/"+user._id+"/follow" ,{userId:currentUser._id})
      dispatch({ type:"FOLLOW", payload:user._id })


    }

  }catch(err){
    console.log(err)
  }
  setFollowed(!followed)
}



  const HomeRightar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ploa Foster</b> and <b>4 other friends</b> got their birthday today!
          </span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">All Users</h4>
        <ul className="rightbarFriendList">
          { allFriends.map(u => (
            <Online key={u.id} user={u} />
          )) }
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    const [followed, setFollowed] = useState(currentUser.following.includes(user?._id))
    return(
      <>
        {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          { followed ? "Unfollow" : "Follow" }
          { followed ? <Remove/> : <Add/> }
        </button>
      )}
        <h4 className="rightarTitle">User Information</h4>
        <div className="rightarInfo">
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">City:</span>
            <span className="rightbarInforValue">{user.city}</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">From:</span>
            <span className="rightbarInforValue">{user.from}</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">Relationship:</span>
            <span className="rightbarInforValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          { friends.map(friend=>(
            <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
            <div className="rightbarFollowing">
              <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"persons/noAvater.jpg"} alt="" className="rightarFollowingImg" />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
            </Link>
          )) }
          
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user? <ProfileRightBar /> : <HomeRightar />}
      </div>
    </div>
  )
}

export default Rightbar