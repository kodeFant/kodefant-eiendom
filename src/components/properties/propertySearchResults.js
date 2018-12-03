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
    const properties = [...this.props.data]

    // The Filter Logic
    if (this.state.sortBy !== '') {
      switch (this.state.sortBy) {
        case 'priceHighToLow':
          properties.sort((a, b) => {
            return b.node.price - a.node.price
          })
          break
        case 'priceLowToHigh':
          properties.sort((a, b) => {
            return a.node.price - b.node.price
          })
          break
        case 'sizeHighToLow':
          properties.sort((a, b) => {
            return b.node.size - a.node.size
          })
          break
        case 'sizeLowToHigh':
          properties.sort((a, b) => {
            return a.node.size - b.node.size
          })
          break
        case 'areaPriceHighToLow':
          properties.sort((a, b) => {
            return b.node.price / b.node.size - a.node.price / a.node.size
          })
          break
        case 'areaPriceLowToHigh':
          properties.sort((a, b) => {
            return a.node.price / a.node.size - b.node.price / b.node.size
          })
          break
      }
    }

    const sortingOptions = [
      { value: '', label: 'Publisert' },
      { value: 'priceLowToHigh', label: 'Prisantydning lav-høy' },
      { value: 'priceHighToLow', label: 'Prisantydning høy-lav' },
      { value: 'sizeLowToHigh', label: 'Areal lav-høy' },
      { value: 'sizeHighToLow', label: 'Areal høy-lav' },
      {
        value: 'areaPriceLowToHigh',
        label: 'm2-pris lav-høy',
      },
      {
        value: 'areaPriceHighToLow',
        label: 'm2-pris høy-lav',
      },
    ]

    const propertyCards = properties.map(property => (
      <Card
        key={property.node.id}
        data={property}
        images={property.node.images}
        queryString={this.props.queryString}
      />
    ))

    const selectClassNames = {
      dd__selectedItem: styles.dd__selectedItem,
      dd__selectControl: styles.dd__selectControl,
    }

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
            classNames={selectClassNames}
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
