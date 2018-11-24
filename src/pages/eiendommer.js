import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout/layout'
import SearchFilter from '../components/propertySearchFilter'
import SearchResults from '../components/propertySearchResults'

import grid from './eiendommer.module.scss'

class PropertyPage extends PureComponent {
  state = {
    data: { ...this.props.data },
    filteredData: [],
    options: {},
    queryString: '',
  }

  changeStateHandler = state => {
    this.setState(state)
  }

  dataFilter = () => {
    let filteredData = this.state.data.allPropertiesYaml.edges

    const filter = (type, filterCheck, value) => {
      const option = this.state.options[filterCheck]
      let filterValue
      if (!value) {
        filterValue = filterCheck
      } else {
        filterValue = value
      }
      if (option) {
        switch (type) {
          case 'type':
            filteredData = filteredData.filter(property => {
              return (
                property.node[filterCheck].includes(option) || option === 'alle'
              )
            })
            break
          case 'min':
            filteredData = filteredData.filter(property => {
              return (
                property.node[filterValue] >= this.state.options[filterCheck]
              )
            })
            break
          case 'max':
            filteredData = filteredData.filter(property => {
              return (
                property.node[filterValue] <= this.state.options[filterCheck]
              )
            })
            break
        }
      }
    }

    if (filteredData[0].node !== undefined) {
      filter('type', 'houseType')
      filter('type', 'ownerType')
      filter('min', 'bedrooms')
      filter('min', 'bathrooms')
      filter('min', 'minPrice', 'price')
      filter('max', 'maxPrice', 'price')
      filter('min', 'minSize', 'size')
      filter('min', 'maxSize', 'size')

      // Keyword Filter
      if (this.state.options.keyword) {
        filteredData = filteredData.filter(property => {
          return (
            property.node.description
              .toLowerCase()
              .includes(this.state.options.keyword.toLowerCase()) ||
            property.node.address
              .toLowerCase()
              .includes(this.state.options.keyword.toLowerCase()) ||
            property.node.title
              .toLowerCase()
              .includes(this.state.options.keyword.toLowerCase()) ||
            property.node.place
              .toLowerCase()
              .includes(this.state.options.keyword.toLowerCase())
          )
        })
      }

      // Place Filter
      if (this.state.options.place) {
        filteredData = filteredData.filter(property => {
          return property.node.place
            .toLowerCase()
            .includes(this.state.options.place.toLowerCase())
        })
      }
    }
    this.setState({ filteredData: filteredData })
  }

  render() {
    return (
      <Layout>
        <div className={grid.container}>
          <SearchFilter
            gridClass={grid.searchFilter}
            setState={this.changeStateHandler}
            state={this.state}
            fieldValue={this.setFieldValue}
            dataFilter={this.dataFilter}
          />
          <SearchResults
            gridClass={grid.searchResults}
            data={this.state.filteredData}
            state={this.state}
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
