import React from 'react'
import styles from './headerTop.module.scss'
import { IconContext } from 'react-icons'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'

const HeaderTop = () => (
  <div className={styles.border}>
    <div className={`container ${styles.topElements}`}>
      <IconContext.Provider value={{ className: styles.react_icons }}>
        <div className={styles.topLeft}>
          <div className={styles.child}>
            <FaMapMarkerAlt /> <span>Freserveien 39, 0195 Oslo</span>
          </div>
          <div className={styles.child}>
            <FaEnvelope />{' '}
            <span>
              <a href="mailto:dineiendom@kodefant.no">dineiendom@kodefant.no</a>
            </span>
          </div>
          <div className={styles.child}>
            <FaPhone /> <span>(+47) 413 999 420</span>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.child}>
            <a
              href="https://www.facebook.com/kodefant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className={styles.child}>
            <a
              href="https://twitter.com/larsparsfromage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <div className={styles.child}>
            <a
              href="https://github.com/kodeFant/kodefant-eiendom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  </div>
)
export default HeaderTop
