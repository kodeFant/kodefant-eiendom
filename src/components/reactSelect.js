import React, { Component } from 'react'
import Select from 'react-select-me'
import PropTypes from 'prop-types'
import 'react-select-me/lib/ReactSelectMe.css'

class ReactSelect extends Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange(this.props.name, value)
  }

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur(this.props.name, true)
  }

  render() {
    return (
      <Select
        name={this.props.name}
        options={this.props.options}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={this.props.value}
        placeholder={this.props.placeholder}
        s={this.props.classNames}
      />
    )
  }
}

ReactSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  classNames: PropTypes.object,
}

export default ReactSelect
