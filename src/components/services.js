import React from 'react'
import {
  FaMap,
  FaMoneyBillAlt,
  FaRegChartBar,
  FaLandmark,
  FaArchive,
  FaFlag,
  FaStar,
} from 'react-icons/fa/'

import styles from './services.module.scss'

const services = () => (
  <div className={styles.services}>
    <div className={styles.serviceHeader}>
      <div className={styles.horizontalDecoration}>
        <div className={styles.lineContainer}>
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.headerIcon}>
          <FaStar />
        </div>
      </div>

      <div className={styles.serviceHeaderContent}>
        <h2>Presenter dine tjenester enkelt</h2>
        <p>
          Ved hjelp av simple grafiske elementer kan du gi boligkjøpere et kjapt
          overblikk over dine tjenester.
        </p>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.serviceGrid}>
        <div className={styles.service}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaMap />
            </div>
          </div>
          <h3>Eiendomssøk</h3>
          <p>Finn de beste boligene i ditt nærområde med vårt søk.</p>
        </div>
        <div className={styles.service}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaMoneyBillAlt />
            </div>
          </div>
          <h3>Verdivurdering</h3>
          <p>
            Vi foretar kostnadsfri verdivurdering av din nåværende bolig uten
            forpliktelser.
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaRegChartBar />
            </div>
          </div>
          <h3>Markedsanalyse</h3>
          <p>
            Interessert i et overblikk over boligmarkedet? La oss hjelpe deg med
            å vurdere eiendomsmarkedet.
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaLandmark />
            </div>
          </div>
          <h3>Eierskifteforsikring</h3>
          <p>En forsikring som dekker boligselgers økonomiske ansvar.</p>
        </div>
        <div className={styles.service}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaArchive />
            </div>
          </div>
          <h3>Eiendomsarkiv</h3>
          <p>Du kan bla i vårt arkiv for tidligere solgte boliger.</p>
        </div>
        <div className={styles.service}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaFlag />
            </div>
          </div>
          <h3>Setter deg på kartet</h3>
          <p>
            Vi sørger for at de som leter etter bolig i ditt nærområde lett
            finner deg.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default services
