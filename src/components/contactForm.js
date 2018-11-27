import React from 'react'
import { Formik, Field } from 'formik'

import styles from './contactForm.module.scss'

const contactForm = () => (
  <div className={styles.contactForm}>
    <p className={styles.infoText}>
      Trenger din bedrift en profesjonell nettside? Ta kontakt med kodeFant for
      mer informasjon. Bruk gjerne kontaktskjemaet nedenfor eller besøk{' '}
      <a href="https://kodefant.no">kodefant.no</a>.
    </p>
    <Formik
      initialValues={{
        name: 'Temp name',
        email: 'temp@name.com',
        subject: 'You temp!',
        message: "I'm also temp",
      }}
      render={() => (
        <form name="contact" method="POST" netlify="true">
          <div className={styles.contactGrid}>
            <Field type="text" name="name" placeholder="Ditt navn" />
            <Field type="email" name="email" placeholder="Din epost" />
            <Field type="text" name="subject" placeholder="Emne" />
          </div>
          <Field component="textarea" name="message" />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
)

export default contactForm
