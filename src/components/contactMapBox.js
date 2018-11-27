import React from 'react'
import styles from './contactMapBox.module.scss'
import { Address, Email, Phone } from './contactInfo'
import { IconContext } from 'react-icons'

import MapContainer from './mapContainer'

const mapBox = () => (
  <>
    <div className={styles.map}>
      <MapContainer />
    </div>
    <IconContext.Provider value={{ className: styles.icon, size: '1.2rem' }}>
      <div className={styles.contactInfo}>
        <div className={styles.contactColumn}>
          <Address nolink nocursor />
        </div>
        <div className={styles.contactColumn}>
          <Phone nolink nocursor />
        </div>
        <div className={styles.contactColumn}>
          <Email />
        </div>
      </div>
    </IconContext.Provider>
  </>
)

export default mapBox
