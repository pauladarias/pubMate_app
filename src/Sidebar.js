import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People'
import Profile from './profile_pic.png'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src={Profile} title="Tim Graham" />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Updates" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Trips"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={MessageIcon} title="Messages"/>

    </div>
  )
}
