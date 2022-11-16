import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="hidden col-span-2 px-2 mt-2 lg:inline">
      <div className="flex items-center p-3 mt-2 space-x-2 bg-gray-100 rounded-full">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="h-screen mt-5 overflow-y-scroll scrollbar-hide">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="arashh0sseini"
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
