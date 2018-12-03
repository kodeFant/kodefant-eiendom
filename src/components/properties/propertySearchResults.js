import React, { Component } from 'react'
import styles from './propertySearchResults.module.scss'
import PropTypes from 'prop-types'
import ReactSelect from '../reactSelect'

import Card from './propertyCard'

class searchResults extends Component {
  state = {
    sortBy: '',
  }

  handleSelect = (event, option) => {
    this.setState({
      ...this.state,
      [event]: option.value,
    })
  }

  render() {
    let properties = this.props.data
    console.log('properties', properties)

    const propertyCards = properties.map(property => (
      <Card
        key={property.node.id}
        data={property}
        images={property.node.images}
        queryString={this.props.queryString}
      />
    ))

    const sortingOptions = [
      { value: '', label: 'Publisert' },
      { value: 'priceLowToHigh', label: 'Prisant lav-høy' },
      { value: 'priceHighToLow', label: 'Prisant høy-lav' },
      { value: 'areaLowToHigh', label: 'Areal lav-høy' },
      { value: 'areaHighToLow', label: 'Areal høy-lav' },
      {
        value: 'areaPriceLowToHigh',
        label: 'm2-pris lav-høy',
      },
      {
        value: 'areaPriceHighToLow',
        label: 'm2-pris høy-lav',
      },
    ]

    return (
      <div className={`${styles.searchResults} ${this.props.gridClass}`}>
        <header className={styles.headerClass}>
          <p>
            <span className="bold">{propertyCards.length}</span> av våre
            eiendommer treffer ditt søkekriterium
          </p>
          <ReactSelect
            name="sortBy"
            options={sortingOptions}
            value={this.state.sortBy}
            onChange={this.handleSelect}
          />
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
