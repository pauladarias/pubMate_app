import React from 'react'
import Story from "./Story"
import "./StoryReel.css"


export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://www.officialirishpub.es/sites/irishpub/files/styles/panopoly_image_original/public/beggin-local-oip.jpg?itok=hJoQPsAp"
        profileSrc="https://azflis.com/wp-content/uploads/2018/08/asl-interpreter-profiles.png"
        title="Lena Smith"
      />
      <Story 
        image="https://billetto.co.uk/blog/wp-content/uploads/2020/02/d_twwr0p9ve-1024x683.jpg"
        profileSrc="https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl.png"
        title="Grace Stevens"
      />
      <Story 
        image="https://www.dukeofkent.co.uk/-/media/sites/microsites/d/the-duke-of-kent-_-p045/images/2018-refurb-rm/garden-sheds-1.ashx?w=1024"
        profileSrc="https://cdn.nohat.cc/thumb/f/350/4768618252337152.jpg"
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
