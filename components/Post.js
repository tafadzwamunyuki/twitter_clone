import { BsBarChartLineFill, BsChatDots, BsFillShareFill, BsFillSuitHeartFill, BsRecycle, BsThreeDots } from "react-icons/bs";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
        <img className="h-11 w-11 rounded-full mr-4" src={post.userImg} width={50} height={50} alt="" />
      {/* right side */}
      <div className="">

        {/* Header */}
        <div className="flex items-center justify-between">
            {/* Post user info */}
            <div className="flex items-center space-x-1 whitespace-nowrap">
                <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
            </div>

            {/* dot icon */}
            <BsThreeDots className="w-5 h-5 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500"/>
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">{post.text}</p>

        {/* post image */}
        <img className="rounded-2xl mr-2" src={post.img} alt=""/>

        {/* icons */}

        <div className="flex justify-between text-gray-500 p-2">
            <BsChatDots className="h-9 h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            <BsRecycle className="h-9 h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-sky-100" />
            <BsFillSuitHeartFill className="h-9 h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-sky-100" />
            <BsFillShareFill className="h-9 h-9 w-9 hoverEffect p-2 hover:text-green-500 hover:bg-sky-100" />
            <BsBarChartLineFill className="h-9 h-9 w-9 hoverEffect p-2 hover:text-blue-900 hover:bg-sky-100" />
        </div>

      </div>
    </div>
  )
}
