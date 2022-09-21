import React from 'react'

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUsername">{user.username}</span>
    </li>
  )
}

export default Online