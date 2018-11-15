import React from 'react'
import PropTypes from 'prop-types'

import styles from './heroLayout.module.scss'

const heroLayout = ({ children, className }) => (
  <div className={`${styles.heroLayout} ${className} `}>{children}</div>
)

heroLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default heroLayout
