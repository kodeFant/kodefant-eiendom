import React from 'react'

import styles from './kontakt.module.scss'

import Layout from '../components/layout/layout'

const ContactPage = () => (
  <Layout>
    <div className={styles.container}>
      <p>
        Tusen takk for din henvendelse 😊 Jeg svarer deg så fort jeg har
        mulighet.
      </p>
      <p>
        I mellomtiden kan du gjerne ta en titt på{' '}
        <a href="https://kodefant.no">kodeFant.no</a> eller se andre prosjekter
        i min <a href="https://lillo.tech">utvikler-portefølje</a>.
      </p>
    </div>
  </Layout>
)

export default ContactPage
