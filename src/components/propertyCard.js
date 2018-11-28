import React from 'react'
import { Link } from 'gatsby'
import styles from './propertyCard.module.scss'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import PropertyCardTop from './propertyCardTop'
import PropertyCardBottom from './propertyCardBottom'

const propertyCard = props => {
  const data = props.data.node
  return (
    <IconContext.Provider
      value={{ style: { verticalAlign: 'middle', height: '0.6rem' } }}
    >
      <Link
        to={`eiendom/?id=${data.id}`}
        state={{ queryString: props.queryString }}
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
              <PropertyCardTop
                className={styles.cardTop}
                address={data.address}
                price={data.price}
              />
              <header className={styles.cardHeader}>
                <h2>{data.title}</h2>
                <div className={styles.cardDescription}>{data.description}</div>
              </header>
              <PropertyCardBottom
                className={styles.cardFooter}
                size={data.size}
                bedrooms={data.bedrooms}
                bathrooms={data.bathrooms}
              />
            </div>
          </div>
        </div>
      </Link>
    </IconContext.Provider>
  )
}

propertyCard.propTypes = {
  data: PropTypes.any,
  images: PropTypes.any,
}

export default propertyCard
