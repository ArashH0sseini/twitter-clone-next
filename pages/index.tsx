import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Siderbar from "../components/Siderbar";
import Widgets from "../components/Widgets";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
      </Head>

      <main>
        <Siderbar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
