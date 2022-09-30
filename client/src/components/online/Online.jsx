import React from 'react'
import { Link } from 'react-router-dom';

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(user)
  return (
    <li className="rightbarFriend">
       <Link to={`profile/${user.username}`}>
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture ? PF+user.profilePicture : PF+"persons/noAvater.jpg"} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
        </Link>
            <span className="rightUsername">{user.username}</span>
    </li>
  )
}

export default Online