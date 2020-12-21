import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"


export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  )
}
