import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Siderbar from "../components/Siderbar";
import Widgets from "../components/Widgets";

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
      </Head>

      <main className="grid grid-cols-9">
        <Siderbar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
