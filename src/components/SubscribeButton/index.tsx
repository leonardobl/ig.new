import React from 'react'
import styles from "./styles.module.scss"

interface ISubscribeProps {
  priceId: string
}

export const SubscribeButton = ({priceId} : ISubscribeProps) => {
  return (
    <button className={styles.subscribeButton} type='button'>Subscribe now</button>
  )
}
