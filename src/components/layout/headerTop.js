import React from 'react'
import styles from './headerTop.module.scss'
import { IconContext } from 'react-icons'

import {
  Address,
  Email,
  Phone,
  Facebook,
  Twitter,
  Github,
} from '../contactInfo'

const HeaderTop = () => (
  <div className={styles.headerTop}>
    <div className={`${styles.topContainer} ${styles.topElements}`}>
      <IconContext.Provider value={{ className: styles.react_icons }}>
        <div className={styles.topLeft}>
          <div className={styles.child}>
            <Address />
          </div>
          <div className={styles.child}>
            <Email />
          </div>
          <div className={styles.child}>
            <Phone />
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.child}>
            <Facebook />
          </div>
          <div className={styles.child}>
            <Twitter />
          </div>
          <div className={styles.child}>
            <Github />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  </div>
)
export default HeaderTop
