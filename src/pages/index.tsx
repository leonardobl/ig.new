import { Header } from "../components/Header"
import Head from "next/head"

import styles from "./home.module.scss"
import { SubscribeButton } from "../components/SubscribeButton"
import { GetServerSideProps } from "next"
import { stripe } from "../components/services/stripe"

interface IHomeProps {
  product: {
    priceId: string;
    amount: number
  }
}


export default function Home(props: IHomeProps) {

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
            <span>for {props.product.amount} mouth</span></p>
          <SubscribeButton priceId={props.product.priceId} />
        </section>
        <img src="/images/Mulher.svg" alt="girls coding" />
      </main>
      
    </>
  )
    
}


export const getServerSideProps: GetServerSideProps = async () => {
  
  const price = await stripe.prices.retrieve("price_1KHXgzGlHKdn8QoaM5gtcScU", {
    expand: ["product"]
  })
  
  const product =  {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price.unit_amount / 100),
  }

    return (
    {props: {
      product
    }}
  )
}
