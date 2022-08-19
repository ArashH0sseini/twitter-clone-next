import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Siderbar from '../components/Siderbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
      </Head>

      <main>
        <Siderbar />
      </main>

    </div>
  )
}

export default Home
