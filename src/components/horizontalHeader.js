import React from 'react'
import PropTypes from 'prop-types'
import styles from './horizontalHeader.module.scss'

const horizontalHeader = props => (
  <div className={styles.horizontalDecoration}>
    <div className={styles.horizontalLine} />

    <div className={styles.iconContainer}>
      <div className={styles.headerIcon}>{props.iconComponent()}</div>
    </div>

    <div className={styles.serviceHeaderContent}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>

    <div className={styles.containerMargin} />
  </div>
)

horizontalHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iconComponent: PropTypes.func,
}

export default horizontalHeader
