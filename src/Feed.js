import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"


export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
        profilePic="https://cdn.imgbin.com/22/21/17/imgbin-child-avatar-girl-woman-computer-icons-child-YRmdeQ69vmuFqvv1QBqmfWaTQ.jpg"
        message= "hello amigos"
        timestamp="This is 45/89/43"
        username="sandy87"
        image="https://images.huffingtonpost.com/2016-04-01-1459518013-7418300-IMG_4904-thumb.JPG"
      />
      <Post 
        profilePic="https://cdn.imgbin.com/22/21/17/imgbin-child-avatar-girl-woman-computer-icons-child-YRmdeQ69vmuFqvv1QBqmfWaTQ.jpg"
        message= "hello amigos"
        timestamp="This is 45/89/43"
        username="sandy87"
      />
      <Post />
    </div>
  )
}
