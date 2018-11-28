import React, { Component } from 'react'
import Checkbox from 'rc-checkbox'
import PropTypes from 'prop-types'
import './reactCheckbox.scss'

class ReactCheckbox extends Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    //eslint-disable-next-line
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value.target.checked)
    }
  }

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topics
    if (this.props.onChange) {
      this.props.onBlur(this.props.name, true)
    }
  }

  render() {
    return (
      <div className={this.props.style}>
        <Checkbox
          name={this.props.name}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          checked={this.props.value}
        />
        <label
          htmlFor={this.props.name}
          onClick={() =>
            this.props.onChange
              ? this.props.onChange(this.props.name, !this.props.value)
              : null
          }
        >
          {this.props.label}
        </label>
      </div>
    )
  }
}

ReactCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
}

export default ReactCheckbox
