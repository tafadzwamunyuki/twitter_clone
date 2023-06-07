// import React from 'react'
import Post from "./Post";
import { HiSparkles } from "react-icons/Hi";
import Input from "./Input";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Tafadzwa Munyuki",
            username: "tafadzwa1twit",
            userImg: "https://avatars.githubusercontent.com/u/35223331?v=4",
            img: "https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            text: "welcome home",
            timestamp: "2 hours ago!"
        },
        {
            id: "2",
            name: "Tafadzwa Munyuki",
            username: "tafadzwa1twit",
            userImg: "https://avatars.githubusercontent.com/u/35223331?v=4",
            img: "https://images.unsplash.com/photo-1685469145069-145d625ae9bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            text: "waterfall thrill",
            timestamp: "2 days ago!"
        },
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200"> 
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center  ml-auto w-9 h-9">
            <HiSparkles className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post)=>(
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
