import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
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
    if (this.props.location.state) {
      this.setState({ queryString: this.props.location.state.queryString })
    }
  }

  render() {
    const data = this.state.data
    if (this.state.data === undefined) {
      return (
        <Layout>
          <div className="container">
            <p>
              Denne eiendommen ble ikke funnet. Bla gjerne videre i våre{' '}
              <Link to="eiendommer">eiendommer</Link> for å gjøre et nytt søk.
            </p>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <div className="container">
            {data ? (
              <SingleProperty
                data={data}
                historyQuery={
                  this.state.queryString ? this.state.queryString : ''
                }
              />
            ) : null}
          </div>
        </Layout>
      )
    }
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
