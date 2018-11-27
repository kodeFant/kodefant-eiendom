import React from 'react'

import styles from './kontakt.module.scss'

import Layout from '../components/layout/layout'
import MapBox from '../components/contactMapBox'
import ContactForm from '../components/contactForm'

const ContactPage = () => (
  <Layout>
    <div className={styles.container}>
      <MapBox />
      <ContactForm />
    </div>
  </Layout>
)

export default ContactPage
