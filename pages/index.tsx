import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Siderbar from '../components/Siderbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
      </Head>

      <main>
        <Siderbar />
        <Feed />
      </main>

    </div>
  )
}

export default Home
