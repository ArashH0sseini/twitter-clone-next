import React, { useState } from "react";
import TweetBox from "./TweetBox";
import TweetComponents from "./Tweet";
import { RefreshIcon } from "@heroicons/react/outline";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");
    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success("Feed Updated!", {
      id: refreshToast,
    });
  };
  return (
    <div className="max-h-screen col-span-7 overflow-y-scroll scrollbar-hide lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="w-8 h-8 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-twitter hover:rotate-180 active:scale-125"
        />
      </div>
      <div>
        <TweetBox setTweets={setTweets} />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponents key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
