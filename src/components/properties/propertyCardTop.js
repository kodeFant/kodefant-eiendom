import React from 'react'
import PropTypes from 'prop-types'
import { decimalFix } from '../helperFunctions'

import { FaMapMarkerAlt } from 'react-icons/fa'

const propertyCardTop = props => (
  <div className={props.className}>
    <div>
      <FaMapMarkerAlt />{' '}
      <span style={{ verticalAlign: 'middle' }}>{props.address}</span>
    </div>
    <div>{decimalFix(props.price / 1000000)} millioner</div>
  </div>
)

propertyCardTop.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
}

export default propertyCardTop
