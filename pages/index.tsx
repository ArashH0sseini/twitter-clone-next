import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Feed from "../components/Feed";
import Siderbar from "../components/Siderbar";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
      </Head>
      <Toaster />

      <main className="grid grid-cols-9">
        <Siderbar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps:GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return { props: { tweets } };
};