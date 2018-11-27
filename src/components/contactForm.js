import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'

import styles from './contactForm.module.scss'
import * as yup from 'yup'

const contactSchema = yup.object().shape({
  name: yup.string().required('Navn er påkrevd'),
  email: yup
    .string()
    .required('En epost-adresse er påkrevd')
    .email('Oppgi en gyldig epost-adresse'),
  subject: yup.string().required('Emnefelt er påkrevd'),
  message: yup.string().required('Skriv en beskjed'),
})

const contactForm = () => (
  <div className={styles.contactForm}>
    <p className={styles.infoText}>
      Trenger din bedrift en profesjonell nettside? Ta kontakt med kodeFant for
      mer informasjon. Bruk gjerne kontaktskjemaet nedenfor eller besøk{' '}
      <a href="https://kodefant.no">kodefant.no</a>.
    </p>
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={contactSchema}
      render={({ isValid }) => (
        <form
          name="DinEiendom"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/suksess"
        >
          <div className={styles.contactGrid}>
            <div className={styles.contactCol}>
              <Field type="text" name="name" placeholder="Ditt navn" required />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className={styles.contactCol}>
              <Field
                type="email"
                name="email"
                placeholder="Din epost"
                required
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className={styles.contactCol}>
              <Field type="text" name="subject" placeholder="Emne" required />
              <ErrorMessage name="subject" component="div" />
            </div>
          </div>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="DinEiendom" required />
          <Field component="textarea" name="message" />
          <ErrorMessage name="message" component="div" />
          <div data-netlify-recaptcha />
          <button type="submit" disabled={!isValid}>
            Send forespørsel
          </button>
        </form>
      )}
    />
  </div>
)

export default contactForm
