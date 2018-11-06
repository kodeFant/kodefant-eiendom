import React from 'react'
import styles from './headerBottom.module.scss'
import Navigation from './headerNav'

const HeaderBottom = () => (
  <div className={styles.headerBottom}>
    <div className={styles.brand}>
      <span>Din</span>
      <br />
      Eiendomsbedrift
    </div>
    <div className={styles.nav}>
      <Navigation />
    </div>
  </div>
)

export default HeaderBottom
