import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import styles from './externalSearchFilter.module.scss'
import ReactSelect from '../reactSelect'
import ReactCheckbox from '../reactCheckbox'
import { navigate } from '@reach/router'

class SearchFilter extends Component {
  state = {
    options: {},
  }

  render() {
    const handleInputChange = (event, setFieldValue) => {
      this.setState({
        options: {
          ...this.state.options,
          [event.target.name]: event.target.value,
        },
      })
      setFieldValue(event.target.name, event.target.value)
    }

    const handleSelect = (name, prop, setFieldValue) => {
      setFieldValue(name, prop)
      this.setState({
        options: {
          ...this.state.options,
          [name]: prop.value,
        },
      })
    }

    const sendSearch = () => {
      const options = this.state.options
      let queryString = ''
      for (const option in options) {
        queryString === '' ? (queryString += '?') : (queryString += '&')
        if (typeof options[option] === 'object') {
          queryString += `${option}=${options[option].value}`
        } else {
          queryString += `${option}=${options[option]}`
        }
      }
      navigate(`/eiendommer/${queryString}`)
    }

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
      { value: 'borettslag', label: 'Borettslag' },
      { value: 'selveier', label: 'Selveier' },
      { value: 'andel', label: 'Andel' },
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
                  onChange={event =>
                    handleInputChange.call(this, event, props.setFieldValue)
                  }
                />
                <label htmlFor="houseType">Boligtype</label>
                <ReactSelect
                  name="houseType"
                  onChange={(name, label) =>
                    handleSelect.call(this, name, label, props.setFieldValue)
                  }
                  onBlur={props.setFieldTouched}
                  value={props.values.houseType}
                  options={houseType}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="ownerType">Eierform</label>
                <ReactSelect
                  name="ownerType"
                  onChange={(name, label) =>
                    handleSelect.call(this, name, label, props.setFieldValue)
                  }
                  onBlur={props.setFieldTouched}
                  value={props.values.ownerType}
                  options={ownerType}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="place">Sted</label>
                <Field
                  type="text"
                  name="place"
                  placeholder="Skriv inn sted"
                  onChange={event =>
                    handleInputChange.call(this, event, props.setFieldValue)
                  }
                />
              </div>
              <div className={styles.col2}>
                <label htmlFor="bedrooms">Soverom</label>
                <ReactSelect
                  name="bedrooms"
                  onChange={(name, label) =>
                    handleSelect.call(this, name, label, props.setFieldValue)
                  }
                  onBlur={props.setFieldTouched}
                  value={props.values.bedrooms}
                  options={bedrooms}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="bathrooms">Bad</label>
                <ReactSelect
                  name="bathrooms"
                  onChange={(name, label) =>
                    handleSelect.call(this, name, label, props.setFieldValue)
                  }
                  onBlur={props.setFieldTouched}
                  value={props.values.bathrooms}
                  options={bathrooms}
                  classNames={reactFilterStyles}
                />
                <label htmlFor="size">Areal</label>
                <div className={styles.twoFields}>
                  <Field
                    type="number"
                    name="minSize"
                    placeholder="Minimum"
                    onChange={event =>
                      handleInputChange.call(this, event, props.setFieldValue)
                    }
                  />
                  <Field
                    type="number"
                    name="maxSize"
                    placeholder="Maksimum"
                    onChange={event =>
                      handleInputChange.call(this, event, props.setFieldValue)
                    }
                  />
                </div>
                <label htmlFor="price">Pris</label>
                <div className={styles.twoFields}>
                  <Field
                    type="number"
                    name="minPrice"
                    placeholder="Minimum"
                    onChange={event =>
                      handleInputChange.call(this, event, props.setFieldValue)
                    }
                  />
                  <Field
                    type="number"
                    name="maxPrice"
                    placeholder="Maksimum"
                    onChange={event =>
                      handleInputChange.call(this, event, props.setFieldValue)
                    }
                  />
                </div>
              </div>
              <div className={styles.col3}>
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
              <button type="submit" onClick={sendSearch}>
                Finn din drømmebolig
              </button>
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
