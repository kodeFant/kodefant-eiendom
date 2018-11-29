import React, { Component } from 'react'
import styles from './propertySearchResults.module.scss'
import PropTypes from 'prop-types'

import Card from './propertyCard'

class searchResults extends Component {
  render() {
    const propertyCards = this.props.data.map(property => (
      <Card
        key={property.node.id}
        data={property}
        images={property.node.images}
        queryString={this.props.queryString}
      />
    ))

    return (
      <div className={`${styles.searchResults} ${this.props.gridClass}`}>
        <header className={styles.headerClass}>
          <p>
            <span className="bold">{propertyCards.length}</span> av våre
            eiendommer treffer ditt søkekriterium
          </p>
        </header>
        {propertyCards}
      </div>
    )
  }
}

searchResults.propTypes = {
  gridClass: PropTypes.string,
  data: PropTypes.any,
  queryString: PropTypes.string,
}

export default searchResults
