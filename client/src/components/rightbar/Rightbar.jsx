import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

const Rightbar = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ploa Foster</b> and <b>4 other friends</b> got their birthday today!
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          { Users.map(u => (
            <Online key={u.id} user={u} />
          )) }
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
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
          <div className="rightbarFollowing">
            <img src={`${PF}/persons/1.jpg`} alt="" className="rightarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/persons/2.jpg`} alt="" className="rightarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/persons/4.jpg`} alt="" className="rightarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/persons/6.jpg`} alt="" className="rightarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/persons/1.jpg`} alt="" className="rightarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}/persons/1.jpg`} alt="" className="rightarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
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