import React from 'react'
import  {FaGithub} from "react-icons/fa"
import  {FiX} from "react-icons/fi"
import styles from "./styles.module.scss"

export const SignInButton = () => {
  const isuserLoggedIn = true
  
  
  return isuserLoggedIn ? ( 
    <button type="button"
    className={styles.signinButton}
    >
      <FaGithub color='#04d361' />
      Leonardo Lima
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>) 
    : 
    ( <button type="button"
    className={styles.signinButton}
    >
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>)  
  }
