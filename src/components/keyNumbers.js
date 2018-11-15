import React from 'react'
import { FaRegMap, FaRegBookmark, FaMoneyBillAlt } from 'react-icons/fa'

import styles from './keyNumbers.module.scss'

import HeroLayout from './layout/heroLayout'
import VerticalHeader from './verticalHeader'
import Icon from './icon'

const keyNumbers = () => (
  <HeroLayout className={styles.keyNumbers}>
    <div className={styles.container}>
      <VerticalHeader />
      <div className={styles.largeLetterDescription}>
        Flotte eiendommer for enhver smak og landets beste meglere.
      </div>

      <div className={styles.numbersGrid}>
        <div className={styles.keyFact}>
          <Icon icon={<FaRegMap />} />
          <div className={styles.keyFactText}>265 eiendommer</div>
        </div>
        <div className={styles.keyFact}>
          <Icon icon={<FaRegBookmark />} />
          <div className={styles.keyFactText}> 15 meglere</div>
        </div>
        <div className={styles.keyFact}>
          <Icon icon={<FaMoneyBillAlt />} />
          <div className={styles.keyFactText}>Snittpris: 2.5 millioner</div>
        </div>
      </div>
      <button>Bla i våre eiendommer</button>
    </div>
  </HeroLayout>
)

export default keyNumbers
