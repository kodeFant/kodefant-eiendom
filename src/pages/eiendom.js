import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SingleProperty from '../components/singleProperty'
import queryString from 'query-string'

class Property extends Component {
  state = {
    data: undefined,
  }
  data = () => {
    const id = queryString.parse(location.search).id
    return this.props.data.allPropertiesYaml.edges.find(property => {
      return property.node.id === id
    })
  }

  componentDidMount() {
    this.setState({ data: this.data() })
  }

  render() {
    const data = this.state.data
    return (
      <Layout>
        <div className="container">
          {data ? (
            <SingleProperty
              data={data}
              queryString={this.props.location.state.queryString}
            />
          ) : null}
        </div>
      </Layout>
    )
  }
}

export default Property

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
              fluid(maxWidth: 1600, maxHeight: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
