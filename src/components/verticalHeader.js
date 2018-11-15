import React from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'
import styles from './verticalHeader.module.scss'

const verticalHeader = () => (
  <>
    <div className={styles.iconContainer}>
      <div className={styles.verticalLine} />
      <div className={styles.iconBox}>
        <FaMapMarkerAlt />
      </div>
    </div>
    <div className={styles.headerContent}>
      <h2>Leter du etter eiendom?</h2>
      <p>Vi er der for at boligkjøpere skal være fornøyd med sitt kjøp.</p>
    </div>
  </>
)

export default verticalHeader
