import React from 'react'
import styles from './propertyCard.module.scss'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { FaMapMarkerAlt, FaBookmark, FaBed, FaBath } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const propertyCard = props => {
  const data = props.data.node
  const price = data.price / 1000000
  return (
    <IconContext.Provider
      value={{ style: { verticalAlign: 'middle', height: '0.6rem' } }}
    >
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
              <div>
                <FaMapMarkerAlt />{' '}
                <span style={{ verticalAlign: 'middle' }}>{data.address}</span>
              </div>
              <div>{price} millioner</div>
            </div>
            <header className={styles.cardHeader}>
              <h2>{data.title}</h2>
              <div className={styles.cardDescription}>{data.description}</div>
            </header>
            <footer className={styles.cardFooter}>
              <div>
                <FaBookmark /> {data.size} m2
              </div>
              <div>
                <FaBed /> {data.bedrooms} soverom
              </div>
              <div>
                <FaBath />
                {data.bathrooms} bad
              </div>
            </footer>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

propertyCard.propTypes = {
  data: PropTypes.any,
  images: PropTypes.any,
}

export default propertyCard
