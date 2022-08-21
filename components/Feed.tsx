import React, { useState } from "react";
import TweetBox from "./TweetBox";
import TweetComponents from "./Tweet";
import { RefreshIcon } from "@heroicons/react/outline";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  console.log(tweets)

  const handleRefresh = async () => {
    const tweets = await fetchTweets()
    setTweets(tweets)
  }
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
        onClick={handleRefresh}
          className="mt-5 mr-5 h-8 w-8 cursor-pointer 
        text-twitter transition-all 
        duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        {tweets.map(tweet => (
          <TweetComponents key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
