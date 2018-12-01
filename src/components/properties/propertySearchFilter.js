import React, { PureComponent } from 'react'
import { navigate } from 'gatsby'
import { Formik, Form, Field } from 'formik'
import queryString from 'query-string'
import PropTypes from 'prop-types'

import ReactSelect from '../reactSelect'
import ReactCheckbox from '../reactCheckbox'
import { houseType, ownerType, bedrooms, bathrooms } from '../initialFilter'

import styles from './propertySearchFilter.module.scss'

class searchFilter extends PureComponent {
  render() {
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
          render={props => {
            return (
              <FormikForm
                {...props}
                setState={this.props.setState}
                state={this.props.state}
                fieldValue={this.props.fieldValue}
                dataFilter={this.props.dataFilter}
              />
            )
          }}
        />
      </div>
    )
  }
}

class FormikForm extends PureComponent {
  state = {
    options: {},
    queryString: '',
  }

  componentDidUpdate(prevProps) {
    if (this.props.state.options !== prevProps.state.options) {
      const options = this.props.state.options
      let queryString = ''
      for (const option in options) {
        queryString === '' ? (queryString += '?') : (queryString += '&')
        if (typeof options[option] === 'object') {
          queryString += `${option}=${options[option].value}`
        } else {
          queryString += `${option}=${options[option]}`
        }
        this.props.setFieldValue(option, options[option])
      }
      this.props.setState({ queryString: queryString })
      this.props.dataFilter()
      navigate(`/eiendommer/${queryString}`)
    }
  }

  componentDidMount() {
    this.queryStringToOptions()
    window.scrollTo(250, 250)
  }

  queryStringToOptions = () => {
    const parsedQueryString = queryString.parse(location.search)
    this.props.setState({
      options: parsedQueryString,
    })
  }

  handleInputChange = event => {
    this.props.setState({
      options: {
        ...this.props.state.options,
        [event.target.name]: event.target.value,
      },
    })
    this.props.setFieldTouched(event.target.name)
  }

  toggleInput = (name, value) => {
    this.props.setFieldValue(name, value)
    this.props.setState({
      options: {
        ...this.props.state.options,
        [name]: value,
      },
    })
  }

  handleSelect = (name, prop) => {
    this.props.setFieldValue(name, prop)
    this.props.setState({
      options: {
        ...this.props.state.options,
        [name]: prop.value,
      },
    })
  }

  render() {
    const reactFilterStyles = {
      dd__selectControl: styles.dd__selectControl,
      dd__list: styles.dd__list,
      dd__expandIcon: styles.dd__expandIcon,
      dd__option: styles.dd__option,
    }

    const queryStringToBoolean = input => {
      if (typeof string !== 'boolean') {
        if (input === 'true') {
          return true
        }
        if (input === 'false') {
          return false
        }
      }
      return input
    }
    const Checkbox = ({ name, label }) => (
      <ReactCheckbox
        style={styles.checkbox}
        onChange={(name, value) => {
          this.toggleInput(name, value)
        }}
        onBlur={this.props.setFieldTouched}
        value={queryStringToBoolean(this.props.values[name])}
        name={name}
        label={label}
      />
    )
    return (
      <Form>
        <div className={styles.searchFilter}>
          <div className={styles.formikInput}>
            <label htmlFor="keyword">Stikkord</label>
            <Field
              type="text"
              name="keyword"
              placeholder="Søk etter stikkord"
              onBlur={event => {
                this.handleInputChange(event)
              }}
            />
          </div>

          <label htmlFor="houseType">Boligtype</label>
          <ReactSelect
            name="houseType"
            onChange={(name, label) => this.handleSelect(name, label)}
            onBlur={this.props.setFieldTouched}
            value={this.props.values.houseType}
            options={houseType}
            classNames={reactFilterStyles}
          />

          <label htmlFor="ownerType">Eierform</label>
          <ReactSelect
            name="ownerType"
            onChange={(name, label) => this.handleSelect(name, label)}
            onBlur={this.props.setFieldTouched}
            value={this.props.values.ownerType}
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
                this.handleInputChange(event)
              }}
            />
          </div>
          <label htmlFor="bedrooms">Soverom</label>
          <ReactSelect
            name="bedrooms"
            onChange={(name, label) => this.handleSelect(name, label)}
            onBlur={this.props.setFieldTouched}
            value={this.props.values.bedrooms}
            options={bedrooms}
            classNames={reactFilterStyles}
          />
          <label htmlFor="bathrooms">Bad</label>
          <ReactSelect
            name="bathrooms"
            onChange={(name, label) => this.handleSelect(name, label)}
            onBlur={this.props.setFieldTouched}
            value={this.props.values.bathrooms}
            options={bathrooms}
            classNames={reactFilterStyles}
          />
          <label htmlFor="size">Areal</label>
          <div className={styles.twoFields}>
            <Field
              type="number"
              name="minSize"
              placeholder="Minimum"
              onBlur={event => {
                this.handleInputChange(event)
              }}
            />
            <Field
              type="number"
              name="maxSize"
              placeholder="Maksimum"
              onBlur={event => {
                this.handleInputChange(event)
              }}
            />
          </div>
          <label htmlFor="price">Pris</label>
          <div className={styles.twoFields}>
            <Field
              type="number"
              name="minPrice"
              placeholder="Minimum"
              onBlur={event => {
                this.handleInputChange(event)
              }}
            />
            <Field
              type="number"
              name="maxPrice"
              placeholder="Maksimum"
              onBlur={event => {
                this.handleInputChange(event)
              }}
            />
          </div>
          <div className={styles.searchButtonContainer}>
            <button
              type="submit"
              onClick={() => navigate('eiendommer')}
              className={styles.resetButton}
            >
              Tilbakestill søk
            </button>
          </div>
          <div className={styles.checkboxContainer}>
            <Checkbox name="balcony" label="Balkong" />
            <Checkbox name="parking" label="Garasje/P-plass" />
            <Checkbox name="elevator" label="Heis" />
            <Checkbox name="noRedwellers" label="Ingen gjenboere" />
            <Checkbox name="swimmingpool" label="Svømmebasseng" />
            <Checkbox name="fireplace" label="Peis/ildsted" />
            <Checkbox name="beach" label="Strandlinje" />
            <Checkbox name="hiking" label="Turterreng" />
            <Checkbox name="view" label="Utsikt" />
            <Checkbox name="janitor" label="Vaktmester" />
          </div>
        </div>
      </Form>
    )
  }
}

FormikForm.propTypes = {
  values: PropTypes.object,
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func,
  setState: PropTypes.func,
  dataFilter: PropTypes.func,
  fieldValue: PropTypes.func,
  state: PropTypes.object,
}

searchFilter.propTypes = {
  gridClass: PropTypes.string,
  setState: PropTypes.func,
}

export default searchFilter
