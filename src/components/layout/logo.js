import React from 'react'
import styles from './logo.module.scss'
import PropTypes from 'prop-types'

const Logo = props => (
  <div className={styles.brand} style={props.style}>
    <span>Din</span>
    <br />
    Eiendomsbedrift
  </div>
)

Logo.propTypes = {
  style: PropTypes.object,
}

export default Logo
