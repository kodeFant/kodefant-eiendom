import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import styles from './searchFilter.module.scss'
import ReactSelect from './reactSelect'

class SearchFilter extends Component {
  render() {
    const reactFilterStyles = {
      dd__selectControl: styles.dd__selectControl,
      dd__list: styles.dd__list,
      dd__expandIcon: styles.dd__expandIcon,
    }
    const houseType = [
      { value: 'alle', label: 'Alle' },
      { value: 'enebolig', label: 'Enebolig' },
      { value: 'leilighet', label: 'Leilighet' },
      { value: 'rekkehus', label: 'Rekkehus' },
      { value: 'tomannsbolig', label: 'Tomannsbolig' },
    ]
    const ownerType = [
      { value: 'alle', label: 'Alle' },
      { value: 'andel', label: 'Enebolig' },
      { value: 'leilighet', label: 'Leilighet' },
      { value: 'rekkehus', label: 'Rekkehus' },
      { value: 'tomannsbolig', label: 'Tomannsbolig' },
    ]
    const bedrooms = [
      { value: '0', label: '0+' },
      { value: '1', label: '1+' },
      { value: '2', label: '2+' },
      { value: '3', label: '3+' },
      { value: '4', label: '4+' },
      { value: '5', label: '5+' },
    ]
    const bathrooms = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3+', label: '3+' },
    ]
    return (
      <Formik
        initialValues={{
          keyword: '',
          houseType: { value: 'alle', label: 'Alle' },
          ownerType: { value: 'alle', label: 'Alle' },
          place: '',
          bedrooms: { value: '0', label: '0+' },
          bathrooms: { value: '1', label: '1' },
          minSize: 0,
          maxSize: 1000,
          minPrice: 0,
          maxPrice: 10000000,
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
        render={props => (
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
                <ReactSelect
                  name="houseType"
                  onChange={props.setFieldValue}
                  onBlur={props.setFieldTouched}
                  value={props.values.houseType}
                  options={houseType}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="ownerType">Eierform</label>
                <ReactSelect
                  name="ownerType"
                  onChange={props.setFieldValue}
                  onBlur={props.setFieldTouched}
                  value={props.values.ownerType}
                  options={ownerType}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="place">Sted</label>
                <Field type="text" name="place" placeholder="Skriv inn sted" />
              </div>
              <div className={styles.col2}>
                <label htmlFor="bedrooms">Soverom</label>
                <ReactSelect
                  name="bedrooms"
                  onChange={props.setFieldValue}
                  onBlur={props.setFieldTouched}
                  value={props.values.bedrooms}
                  options={bedrooms}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="bathrooms">Bad</label>
                <ReactSelect
                  name="bathrooms"
                  onChange={props.setFieldValue}
                  onBlur={props.setFieldTouched}
                  value={props.values.bathrooms}
                  options={bathrooms}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="size">Areal</label>
                <div className={styles.twoFields}>
                  <Field type="number" name="minSize" placeholder="Minimum" />
                  <Field type="number" name="maxSize" placeholder="Maksimum" />
                </div>
                <label htmlFor="price">Pris</label>
                <div className={styles.twoFields}>
                  <Field type="number" name="minPrice" placeholder="Minimum" />
                  <Field type="number" name="maxPrice" placeholder="Maksimum" />
                </div>
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
            <div className={styles.searchButtonContainer}>
              <button type="submit">Finn din drømmebolig</button>
            </div>
          </Form>
        )}
      />
    )
  }
}

SearchFilter.propTypes = {
  setFieldValue: PropTypes.func,
  setFieldTouched: PropTypes.func,
}

export default SearchFilter
