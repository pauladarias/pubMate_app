import { Avatar } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import React from 'react'
import "./Post.css"

export default function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar"/>
        <div className="post__topInfo">
        <h3>{username}</h3>
        <p>TimeStamp</p>
        </div>
      </div>

      <div className="post__bottom">
      <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt=""/>
      </div>

      <div className="post__options">
        <div className="post__option">
          <FavoriteIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>


    </div>
  )
}

