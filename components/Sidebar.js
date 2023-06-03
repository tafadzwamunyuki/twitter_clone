// import React from 'react'
import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
// import { DotsHorizontalIcon } from "@heroicons/react/outline"
import { HiDotsHorizontal, HiHome, HiOutlineUser } from "react-icons/Hi"
import { BsHash, BsBell, BsEnvelope, BsBookmark } from "react-icons/bs"
import { CiViewList, CiCircleMore } from "react-icons/Ci"




export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image 
            width="50" 
            height="50" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png"></Image>
        </div>

      {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HiHome} active/>
            <SidebarMenuItem text="Explore" Icon={BsHash}/> 
            <SidebarMenuItem text="Notifications" Icon={BsBell}/>
            <SidebarMenuItem text="Messages" Icon={BsEnvelope}/>
            <SidebarMenuItem text="Lists" Icon={CiViewList}/>
            <SidebarMenuItem text="Bookmarks" Icon={BsBookmark}/>
            <SidebarMenuItem text="Profile" Icon={HiOutlineUser}/>
            <SidebarMenuItem text="More" Icon={CiCircleMore}/>
        </div>

      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img src="https://avatars.githubusercontent.com/u/35223331?v=4"
        className="h-10 w-10 rounded-full xl:mr-2"
        alt="" />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Tafadzwa Munyuki</h4>
          <p className="text-gray-500">@tafadzwa1twit</p>
        </div>
        <HiDotsHorizontal className="h-5 xl:ml-8"/>
       {/* <DotsHorizontalIcon className="h-5 xl:ml-8" /> */}
      </div>

    </div>
  )
}
