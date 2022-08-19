import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SiderBarRow from "./SiderBarRow";

function Siderbar() {
  return (
    <div className="flex flex-col col-span-2 items-center px-4
    md:items-start">
      <img
        className="w-10 h-10 m-3"
        alt="logo"
        src="https://links.papareact.com/drq"
      />
      <SiderBarRow Icon={HomeIcon} title="Home" />
      <SiderBarRow Icon={HashtagIcon} title="Explore" />
      <SiderBarRow Icon={BellIcon} title="Notifiction" />
      <SiderBarRow Icon={MailIcon} title="Messages" />
      <SiderBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SiderBarRow Icon={CollectionIcon} title="Lists" />
      <SiderBarRow Icon={UserIcon} title="Sign In" />
      <SiderBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default Siderbar;
