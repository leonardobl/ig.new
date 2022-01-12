import { Header } from "../components/Header"
import Head from "next/head"

import styles from "./home.module.scss"
import { SubscribeButton } from "../components/SubscribeButton"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.new</title>
      </Head>
      <Header />

      <main className={styles.contentCotainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>New about <br /> the <span>React </span>world</h1>
          <p>Get acess to all the publications <br />
            <span>for $9.90 mouth</span></p>
          <SubscribeButton />
        </section>
        <img src="/images/Mulher.svg" alt="girls coding" />
      </main>
      
    </>
  )
    
}
