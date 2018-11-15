import React from 'react'
import styles from './headerBottom.module.scss'
import Navigation from './headerNav'
import Logo from './logo'

const HeaderBottom = () => (
  <div className={styles.headerBottom}>
    <Logo />
    <div className={styles.nav}>
      <Navigation />
    </div>
  </div>
)

export default HeaderBottom
