import Head from "next/head"

import NavBar from "@/components/nav-bar"
import HighLights from "@/components/high-lights"
import Categories from "@/components/categories"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
      <HighLights />
      <Categories/>
      <Footer/>
    </>
  )
}