// import { useState } from "react";
import styles from './header.module.css'
import headerImg from '../../assets/images/homeImg.png'
import Navigation from '../Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textBox}>
        <h1 className={styles.title}>Hello, <br/> Friends</h1>
        <h4 className={styles.text}>Dobin's Convenience Pick!</h4>
      </div>
      <p className={styles.img}>
        <img src={headerImg} alt="header img" />
      </p>
    </header>
  )
}

export default Header