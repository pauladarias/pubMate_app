import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import Profile from './profile_pic.png'
import VideocamIcon from '@material-ui/icons/Videocam'
import LocalDrinkIcon from '@material-ui/icons/LocalDrink'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'


export default function MessageSender() {

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    setInput("");
    setImageUrl("");
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={Profile}/>
        <form>
          <input
            value= {input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input" placeholder="Where are you at?"/>
          <input 
            value= {imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL"/>
          <button onClick={handleSubmit}  type="submit">Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }}/>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }}/>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <LocalDrinkIcon style={{ color: "orange" }}/>
          <h3>Rating</h3>
        </div>
      </div>
    </div>
  )
}
