import React from 'react'
import styles from './jumbotron.module.scss'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { decimalFix } from '../helperFunctions'
import { FaMapMarkerAlt } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Jumbotron = ({ data }) => {
  const propertyData = data.allPropertiesYaml.edges[0].node

  return (
    <>
      {propertyData ? (
        <div className={styles.jumbotron}>
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
        </div>
      ) : null}
    </>
  )
}

Jumbotron.propTypes = {
  data: PropTypes.object,
}

const JumbotronQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allPropertiesYaml(filter: { pID: { eq: 2 } }) {
          edges {
            node {
              pID
              id
              title
              address
              price
              images {
                childImageSharp {
                  fluid(maxWidth: 1600, maxHeight: 900) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Jumbotron data={data} />}
  />
)

export default JumbotronQuery
