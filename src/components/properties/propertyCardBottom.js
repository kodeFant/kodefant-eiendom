import React from 'react'
import PropTypes from 'prop-types'
import { FaBookmark, FaBed, FaBath } from 'react-icons/fa'

const propertyCardBottom = props => (
  <footer className={props.className}>
    <div>
      <FaBookmark /> {props.size} m2
    </div>
    <div>
      <FaBed /> {props.bedrooms} soverom
    </div>
    <div>
      <FaBath />
      {props.bathrooms} bad
    </div>
  </footer>
)

propertyCardBottom.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
}

export default propertyCardBottom
