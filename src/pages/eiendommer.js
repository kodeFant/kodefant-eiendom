import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout/layout'
import SearchFilter from '../components/propertySearchFilter'
import SearchResults from '../components/propertySearchResults'

import grid from './eiendommer.module.scss'

class PropertyPage extends Component {
  state = {
    data: { ...this.props.data },
  }
  render() {
    return (
      <Layout>
        <div className={grid.container}>
          <SearchFilter gridClass={grid.searchFilter} />
          <SearchResults
            gridClass={grid.searchResults}
            data={this.state.data}
          />
        </div>
      </Layout>
    )
  }
}

PropertyPage.propTypes = {
  data: PropTypes.any,
}

export default PropertyPage

export const query = graphql`
  query {
    allPropertiesYaml {
      edges {
        node {
          id
          title
          description
          address
          place
          postCode
          houseType
          ownerType
          bedrooms
          bathrooms
          size
          price
          balcony
          parking
          elevator
          noRedwellers
          swimmingpool
          fireplace
          hiking
          view
          janitor
          images {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
