import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import styles from './externalSearchFilter.module.scss'
import ReactSelect from '../reactSelect'
import ReactCheckbox from '../reactCheckbox'
import { navigate } from '@reach/router'
import { houseType, ownerType, bedrooms, bathrooms } from '../initialFilter'

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

    const toggleInput = (name, value, setFieldValue) => {
      setFieldValue(name, value)
      this.setState({
        options: {
          ...this.state.options,
          [name]: value,
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
    const Checkbox = ({ name, label, onChange }) => (
      <ReactCheckbox
        style={styles.checkbox}
        onChange={onChange}
        onBlur={this.props.setFieldTouched}
        value={this.state.options[name]}
        name={name}
        label={label}
      />
    )
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
        onSubmit={sendSearch}
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
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="balcony"
                  label="Balkong"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="parking"
                  label="Garasje/P-plass"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="elevator"
                  label="Heis"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="noRedwellers"
                  label="Ingen gjenboere"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="swimmingpool"
                  label="Svømmebasseng"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="fireplace"
                  label="Peis/ildsted"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="beach"
                  label="Strandlinje"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="hiking"
                  label="Turterreng"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="view"
                  label="Utsikt"
                />
                <Checkbox
                  onChange={(name, value) =>
                    toggleInput.call(this, name, value, props.setFieldValue)
                  }
                  name="janitor"
                  label="Vaktmester"
                />
              </div>
            </div>
            <div className={styles.searchButtonContainer}>
              <button className={styles.btn} type="submit">
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
