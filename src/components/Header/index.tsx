import React from 'react'
import styles from "./styles.module.scss"
import { SignInButton } from '../SignInButton'


export const Header = () => {


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <img src="/images/ig.news.svg" alt='Logo ignew' />
        <nav>
          <a className={styles.active} href="#">Home</a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton/>
      </div>
    </header>
    )
  }
  
