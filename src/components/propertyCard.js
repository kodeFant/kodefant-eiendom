import React from 'react'
import styles from './propertyCard.module.scss'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const propertyCard = props => {
  const data = props.data.node
  const price = data.price / 1000000
  return (
    <div className={styles.propertyCard}>
      <div className={styles.image}>
        <Img
          style={{ height: '100%' }}
          fluid={data.images[0].childImageSharp.fluid}
        />
      </div>
      <div className={styles.cardInfoContainer}>
        <div className={styles.cardInfo}>
          <div className={styles.cardTop}>
            <div>{data.address}</div>
            <div>{price} millioner</div>
          </div>
          <header className={styles.cardHeader}>
            <h2>{data.title}</h2>
            <div className={styles.cardDescription}>{data.description}</div>
          </header>
          <footer className={styles.cardFooter}>
            <div>{data.size} m2</div>
            <div>{data.bedrooms} soverom</div>
            <div>{data.bathrooms} bad</div>
          </footer>
        </div>
      </div>
    </div>
  )
}

propertyCard.propTypes = {
  data: PropTypes.any,
  images: PropTypes.any,
}

export default propertyCard
