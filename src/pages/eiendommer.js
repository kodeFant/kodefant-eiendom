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

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'filteredData',
      this.state.filteredData.map(property => property)
    )
    console.log(
      'rawData',
      this.state.data.allPropertiesYaml.edges.map(property => property)
    )
  }

  changeStateHandler = state => {
    this.setState(state)
  }

  dataFilter = () => {
    let filteredData = this.state.data.allPropertiesYaml.edges
    console.log('dataFilter()', filteredData)
    if (filteredData[0].node !== undefined) {
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

      // HouseType-filter
      if (this.state.options.houseType) {
        filteredData = filteredData.filter(property => {
          return (
            property.node.houseType.includes(
              this.state.options.houseType.value
            ) || this.state.options.houseType.value === 'alle'
          )
        })
      }

      // OwnerType-filter
      if (this.state.options.ownerType) {
        filteredData = filteredData.filter(property => {
          return (
            property.node.ownerType.includes(
              this.state.options.ownerType.value
            ) || this.state.options.ownerType.value === 'alle'
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

      // Bedroom Filter
      if (this.state.options.bedrooms) {
        filteredData = filteredData.filter(property => {
          return property.node.bedrooms >= this.state.options.bedrooms.value
        })
      }
      // Bathroom Filter
      if (this.state.options.bathrooms) {
        filteredData = filteredData.filter(property => {
          return property.node.bathrooms >= this.state.options.bathrooms.value
        })
      }
      // MinSize Filter
      if (this.state.options.minSize) {
        filteredData = filteredData.filter(property => {
          return property.node.size >= this.state.options.minSize
        })
      }
      // MaxSize Filter
      if (this.state.options.maxSize) {
        filteredData = filteredData.filter(property => {
          return property.node.size <= this.state.options.maxSize
        })
      }
      // MinPrice Filter
      if (this.state.options.minPrice) {
        filteredData = filteredData.filter(property => {
          return property.node.price >= this.state.options.minPrice
        })
      }
      // MaxPrice Filter
      if (this.state.options.maxPrice) {
        filteredData = filteredData.filter(property => {
          return property.node.price <= this.state.options.maxPrice
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
