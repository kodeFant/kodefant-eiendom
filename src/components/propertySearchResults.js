import React, { Component } from 'react'
import styles from './propertySearchResults.module.scss'
import PropTypes from 'prop-types'

import Card from './propertyCard'

class searchResults extends Component {
  render() {
    const propertyCards = this.props.data.allPropertiesYaml.edges.map(
      property => (
        <Card
          key={property.node.id}
          data={property}
          images={property.node.images}
        />
      )
    )

    return (
      <div className={`${styles.searchResults} ${this.props.gridClass}`}>
        {propertyCards}
      </div>
    )
  }
}

searchResults.propTypes = {
  gridClass: PropTypes.string,
  data: PropTypes.any,
}

export default searchResults
