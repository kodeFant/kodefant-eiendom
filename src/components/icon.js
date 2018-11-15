import React from 'react'
import styles from './icon.module.scss'
import PropTypes from 'prop-types'

const icon = props => (
  <div className={styles.iconContainer}>
    <div className={styles.icon}>{props.icon}</div>
  </div>
)

icon.propTypes = {
  icon: PropTypes.element,
}

export default icon
