import React from 'react'
import styles from './jumbotron.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaMapMarkerAlt } from 'react-icons/fa'

const JumbotronImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jumbotron.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ height: '100%' }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Jumbotron = () => (
  <div className={styles.jumbotron}>
    <JumbotronImage />
    <div className={styles.overlay}>
      <div className={styles.overlayBox}>
        <div className={styles.addressBox}>
          <div className={styles.verticalLine} />
          <div className="spacer" />
          <div className={styles.symbolBox}>
            <FaMapMarkerAlt />
          </div>
          <div className={styles.address}>Snorresgate 3, 7345 Rasvik</div>
        </div>
        <div className={styles.header}>Sameiet Rasvik Allè</div>
        <div className={styles.priceHeader}>Prisantydning:</div>
        <div className={styles.price}>3,2 millioner</div>
      </div>
    </div>
  </div>
)

export default Jumbotron
