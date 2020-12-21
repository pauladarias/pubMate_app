import React from 'react'
import Story from "./Story"
import "./StoryReel.css"
import Profile from './profile_pic.png'

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://www.officialirishpub.es/sites/irishpub/files/styles/panopoly_image_original/public/beggin-local-oip.jpg?itok=hJoQPsAp"
        profileSrc="https://banner2.cleanpng.com/20180804/quk/kisspng-vector-graphics-avatar-mobile-app-website-user-staff-members-my-healing-bridge-5b6613c11da524.6593813815334163851214.jpg"
        title="Lena Smith"
      />
      <Story 
        image="https://billetto.co.uk/blog/wp-content/uploads/2020/02/d_twwr0p9ve-1024x683.jpg"
        profileSrc="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
        title="Grace Stevens"
      />
      <Story 
        image="https://www.dukeofkent.co.uk/-/media/sites/microsites/d/the-duke-of-kent-_-p045/images/2018-refurb-rm/garden-sheds-1.ashx?w=1024"
        profileSrc="https://www.clipartmax.com/png/middle/248-2487966_matthew-man-avatar-icon-png.png"
        title="James Singer"
      />
      <Story 
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/burger_and_chips-52b87cc.jpg?quality=90&resize=960,872"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9_uSCxm4Ms_t8_tS58wGdA2JtLWsoSkBRg&usqp=CAU"
        title="Kate Mills"
      />
    </div>
  )
}
