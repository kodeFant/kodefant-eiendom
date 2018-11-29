import React from 'react'
import styles from './jumbotron.module.scss'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { decimalFix } from '../helperFunctions'
import { FaMapMarkerAlt } from 'react-icons/fa'

const JumbotronContent = () => (
  <StaticQuery
    query={graphql`
      query {
        allPropertiesYaml(
          filter: { id: { eq: "c585a423-13d7-55db-9e29-0a5c59d3188e" } }
        ) {
          edges {
            node {
              id
              title
              address
              price
              images {
                childImageSharp {
                  fluid(maxWidth: 2560, maxHeight: 1440) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const propertyData = data.allPropertiesYaml.edges[0].node
        ? data.allPropertiesYaml.edges[0].node
        : null
      return (
        <>
          <Img
            style={{ height: '100%' }}
            fluid={propertyData.images[0].childImageSharp.fluid}
          />
          <div className={styles.overlay}>
            <Link
              to={`/eiendom/?id=${propertyData.id}`}
              className={styles.overlayBox}
            >
              <div className={styles.addressBox}>
                <div className={styles.verticalLine} />
                <div className="spacer" />
                <div className={styles.symbolBox}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.address}>{propertyData.address}</div>
              </div>
              <div className={styles.header}>{propertyData.title}</div>
              <div className={styles.priceHeader}>Prisantydning:</div>
              <div className={styles.price}>
                {decimalFix(propertyData.price / 1000000)} millioner kroner
              </div>
            </Link>
          </div>
        </>
      )
    }}
  />
)

const Jumbotron = () => (
  <div className={styles.jumbotron}>
    <JumbotronContent />
  </div>
)

export default Jumbotron
