import React from 'react'
import { Link } from 'gatsby'
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
  <div className={styles.headerTop}>
    <div className={`${styles.topContainer} ${styles.topElements}`}>
      <IconContext.Provider value={{ className: styles.react_icons }}>
        <div className={styles.topLeft}>
          <div className={styles.child}>
            <Link to="kontakt">
              <FaMapMarkerAlt /> <span>Freserveien 39, 0195 Oslo</span>
            </Link>
          </div>
          <div className={styles.child}>
            <a href="mailto:dineiendom@kodefant.no">
              <FaEnvelope /> <span>dineiendom@kodefant.no</span>
            </a>
          </div>
          <div className={styles.child}>
            <Link to="kontakt">
              <FaPhone /> <span>(+47) 413 999 420</span>
            </Link>
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
