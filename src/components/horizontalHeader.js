import React from 'react'
import PropTypes from 'prop-types'
import styles from './horizontalHeader.module.scss'

const horizontalHeader = props => (
  <div className={styles.horizontalDecoration}>
    <div className={styles.horizontalLine} />

    <div className={styles.iconContainer}>
      <span>
        <div className={styles.headerIcon}>{props.icon}</div>
      </span>
    </div>

    <div className={styles.serviceHeaderContent}>
      <h2 className={styles.header}>{props.title}</h2>
      <p className={styles.paragraph}>{props.description}</p>
    </div>

    <div className={styles.containerMargin} />
  </div>
)

horizontalHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.element,
}

export default horizontalHeader
