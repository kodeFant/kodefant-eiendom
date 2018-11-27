import React from 'react'
import { Formik, Field, Form } from 'formik'
import mg from './mg'

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
      /*  onSubmit={({ subject, message }) => {
        mg.messages
          .create('mg.kodefant.no', {
            from: `DinEiendom-henvendelse <postmaster@mg.kodefant.no>`,
            to: ['lillo@kodefant.no'],
            subject: subject,
            text: message,
          })
          .then((
            msg // eslint-disable-next-line no-console
          ) => console.log('msg', msg))
          .catch((
            err // eslint-disable-next-line no-console
          ) => console.log('err', err))
      }} */
      render={() => (
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className={styles.contactGrid}>
            <Field type="text" name="name" placeholder="Ditt navn" />
            <Field type="email" name="email" placeholder="Din epost" />
            <Field type="text" name="subject" placeholder="Emne" />
          </div>
          <Field component="textarea" name="message" />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
)

export default contactForm
