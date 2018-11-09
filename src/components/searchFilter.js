import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'

import styles from './searchFilter.module.scss'

class SearchFilter extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          keyword: '',
          houseType: '',
          ownerType: '',
          place: '',
          bedrooms: 0,
          bathrooms: 1,
          size: '',
          price: '',
          balcony: false,
          parking: false,
          elevator: false,
          noRedwellers: false,
          svimmingpool: false,
          fireplace: false,
          beach: false,
          hiking: false,
          view: false,
          janitor: false,
        }}
      >
        <Form>
          <div className={styles.filterGrid}>
            <div className={styles.col1}>
              <label htmlFor="keyword">Stikkord</label>
              <Field
                type="text"
                name="keyword"
                placeholder="Søk etter stikkord"
              />
              <label htmlFor="houseType">Boligtype</label>
              <Field component="select" name="houseType">
                <option value="enebolig">Enebolig</option>
                <option value="leilighet">Leilighet</option>
                <option value="rekkehus">Rekkehus</option>
                <option value="tomannsbolig">Tomannsbolig</option>
              </Field>
              <label htmlFor="ownerType">Eierform</label>
              <Field component="select" name="ownerType">
                <option value="aksje">Aksje</option>
                <option value="andel">Andel</option>
                <option value="borettslag">Borettslag</option>
                <option value="tomannsbolig">Obligasjon</option>
              </Field>
              <label htmlFor="place">Sted</label>
              <Field type="text" name="place" placeholder="Skriv inn sted" />
            </div>
            <div className={styles.col2}>
              <label htmlFor="bedrooms">Soverom</label>
              <Field component="select" name="bedrooms">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Field>
              <label htmlFor="bathrooms">Bad</label>
              <Field component="select" name="bathrooms">
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
              </Field>
              <label htmlFor="size">Areal</label>
              <Field type="range" name="size" min="1" max="100" value="50" />
              <label htmlFor="price">Pris</label>
              <Field type="range" name="price" min="1" max="100" value="50" />
            </div>
            <div className={styles.col3}>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="balcony" />
                <label htmlFor="balcony">Balkong</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="parking" />
                <label htmlFor="parking">Garasje/P-plass</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="elevator" />
                <label htmlFor="elevator">Heis</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="noRedwellers" />
                <label htmlFor="noRedwellers">Ingen gjenboere</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="swimmingpool" />
                <label htmlFor="swimmingpool">Svømmebasseng</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="fireplace" />
                <label htmlFor="fireplace">Peis/Ildsted</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="beach" />
                <label htmlFor="beach">Strandlinje</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="hiking" />
                <label htmlFor="hiking">Turterreng</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="view" />
                <label htmlFor="view">Utsikt</label>
              </div>
              <div className={styles.checkbox}>
                <Field type="checkbox" name="janitor" />
                <label htmlFor="janitor">Vaktmester</label>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    )
  }
}

export default SearchFilter
