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
import Icon from '../icon'
import HorizontalHeader from '../horizontalHeader'

import styles from './services.module.scss'

const services = () => (
  <div className={styles.services}>
    <HorizontalHeader
      title="Presenter dine tjenester"
      description="Ved hjelp av grafiske elementer kan du gi boligkjøpere et kjapt overblikk over dine tjenester."
      icon={<FaStar />}
    />
    <div className={styles.container}>
      <div className={styles.serviceGrid}>
        <div className={styles.service}>
          <Icon icon={<FaMap />} />
          <h3>Eiendomssøk</h3>
          <p>Finn de beste boligene i ditt nærområde med vårt søk.</p>
        </div>
        <div className={styles.service}>
          <Icon icon={<FaMoneyBillAlt />} />

          <h3>Verdivurdering</h3>
          <p>
            Vi foretar kostnadsfri verdivurdering av din nåværende bolig uten
            forpliktelser.
          </p>
        </div>
        <div className={styles.service}>
          <Icon icon={<FaRegChartBar />} />

          <h3>Markedsanalyse</h3>
          <p>
            Interessert i et overblikk over boligmarkedet? La oss hjelpe deg med
            å vurdere eiendomsmarkedet.
          </p>
        </div>
        <div className={styles.service}>
          <Icon icon={<FaLandmark />} />

          <h3>Eierskifteforsikring</h3>
          <p>En forsikring som dekker boligselgers økonomiske ansvar.</p>
        </div>
        <div className={styles.service}>
          <Icon icon={<FaArchive />} />
          <h3>Eiendomsarkiv</h3>
          <p>Du kan bla i vårt arkiv for tidligere solgte boliger.</p>
        </div>
        <div className={styles.service}>
          <Icon icon={<FaFlag />} />
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
