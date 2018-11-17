import React, { Component } from 'react'
import styles from './propertySearchFilter.module.scss'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import ReactSelect from './reactSelect'
import ReactCheckbox from './reactCheckbox'
import { navigate } from 'gatsby'

class searchFilter extends Component {
  state = {
    queryString: {},
  }

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
    const handleInputChange = event => {
      //eslint-disable-next-line
      this.setState({queryString: {...this.state.queryString, [event.target.name]: event.target.value}})
      /* navigate(`/eiendommer/?${event.target.name}=${event.target.value}`) */
    }
    return (
      <div className={` ${this.props.gridClass}`}>
        {' '}
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
          onSubmit={values => {
            //eslint-disable-next-line
            console.log(values)
          }}
          render={props => (
            <Form>
              <div className={styles.searchFilter}>
                <div className={styles.formikInput}>
                  <label htmlFor="keyword">Stikkord</label>
                  <Field
                    type="text"
                    name="keyword"
                    placeholder="Søk etter stikkord"
                    onBlur={event => {
                      handleInputChange(event)
                      props.setFieldTouched
                    }}
                  />
                </div>

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
                <div className={styles.formikInput}>
                  <label htmlFor="place">Sted</label>
                  <Field
                    type="text"
                    name="place"
                    placeholder="Skriv inn sted"
                    onBlur={event => {
                      handleInputChange(event)
                      props.setFieldTouched
                    }}
                  />
                </div>
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
                <div className={styles.checkboxContainer}>
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.balcony}
                    name="balcony"
                    label="Balkong"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.parking}
                    name="parking"
                    label="Garasje/P-plass"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.elevator}
                    name="elevator"
                    label="Heis"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.noRedwellers}
                    name="noRedwellers"
                    label="Ingen gjenboere"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.swimmingpool}
                    name="swimmingpool"
                    label="Svømmebasseng"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.fireplace}
                    name="fireplace"
                    label="Peis/ildsted"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.beach}
                    name="beach"
                    label="Strandlinje"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.hiking}
                    name="hiking"
                    label="Turterreng"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.view}
                    name="view"
                    label="Utsikt"
                  />
                  <ReactCheckbox
                    style={styles.checkbox}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    value={props.values.janitor}
                    name="janitor"
                    label="Vaktmester"
                  />
                </div>
              </div>
              <div className={styles.searchButtonContainer}>
                <button type="submit">Søk</button>
              </div>
            </Form>
          )}
        />
      </div>
    )
  }
}

searchFilter.propTypes = {
  gridClass: PropTypes.string,
}

export default searchFilter
