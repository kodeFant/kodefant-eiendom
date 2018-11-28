import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './singleProperty.module.scss'
import PropertyCardTop from './propertyCardTop'
import PropertyCardBottom from './propertyCardBottom'
import ReactCheckbox from './reactCheckbox'
import PropTypes from 'prop-types'

class SingleProperty extends Component {
  render() {
    const data = this.props.data.node
    return (
      <div className={styles.singleProperty}>
        <Link to={`eiendommer/${this.props.queryString}`}>Tilbake til søk</Link>
        <Img fluid={data.images[0].childImageSharp.fluid} />
        <PropertyCardTop
          className={styles.cardTop}
          address={data.address}
          price={data.price}
        />
        <h1>{data.title}</h1>
        <PropertyCardBottom
          className={styles.cardFooter}
          size={data.size}
          bedrooms={data.bedrooms}
          bathrooms={data.bathrooms}
        />
        <p>
          Pinterest forage selfies DIY readymade kitsch Brooklyn Vice crucifix
          locavore cray Wes Anderson cred Williamsburg yr 8-bit fingerstache
          single-origin coffee master cleanse jean shorts Bushwick paleo
          distillery quinoa tofu Blue Bottle PBR&B twee post-ironic Portland
          pork belly fap.
        </p>
        <p>
          {' '}
          Chillwave heirloom letterpress 3 wolf moon selvage fanny pack
          gastropub wolf kogi sriracha bitters direct trade banh mi plaid
          bicycle rights stumptown ethical Schlitz mustache messenger bag
          McSweeneys farm-to-table retro put a bird on it Tonx typewriter Godard
          cornhole bespoke tousled mumblecore food truck flannel pickled
          asymmetrical Carles{' '}
        </p>
        <div className={styles.checkboxes}>
          <ReactCheckbox
            style={styles.checkbox}
            value={data.balcony}
            name="balcony"
            label="Balkong"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.parking}
            name="parking"
            label="Garasje/P-plass"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.elevator}
            name="elevator"
            label="Heis"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.noRedwellers}
            name="noRedwellers"
            label="Ingen gjenboere"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.swimmingpool}
            name="swimmingpool"
            label="Svømmebasseng"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.fireplace}
            name="fireplace"
            label="Peis/ildsted"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.beach}
            name="beach"
            label="Strandlinje"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.hiking}
            name="hiking"
            label="Turterreng"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.view}
            name="view"
            label="Utsikt"
          />
          <ReactCheckbox
            style={styles.checkbox}
            value={data.janitor}
            name="janitor"
            label="Vaktmester"
          />
        </div>
      </div>
    )
  }
}

SingleProperty.propTypes = {
  data: PropTypes.object,
  queryString: PropTypes.string,
}

export default SingleProperty
