import React, { Component } from 'react'
import { Link } from 'gatsby'

import styles from './singleProperty.module.scss'
import PropertyCardTop from './properties/propertyCardTop'
import PropertyCardBottom from './properties/propertyCardBottom'
import ReactCheckbox from './reactCheckbox'
import PropTypes from 'prop-types'
import SinglePropertySlider from './singlePropertySlider'

import { FaSearchLocation } from 'react-icons/fa'

class SingleProperty extends Component {
  render() {
    const data = this.props.data.node
    const Checkbox = props => (
      <ReactCheckbox
        style={styles.checkbox}
        value={data[name]}
        name={props.name}
        label={props.label}
      />
    )
    return (
      <div className={styles.singleProperty}>
        <div className={styles.backlink}>
          <Link
            to={`eiendommer/${
              this.props.historyQuery ? this.props.historyQuery : ''
            }`}
          >
            <FaSearchLocation /> Tilbake til søket
          </Link>
        </div>
        <SinglePropertySlider images={data.images} />
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
          <Checkbox name="balcony" label="Balkong" />
          <Checkbox name="parking" label="Garasje/P-plass" />
          <Checkbox name="elevator" label="Heis" />
          <Checkbox name="noRedwellers" label="Ingen gjenboere" />
          <Checkbox name="swimmingpool" label="Svømmebasseng" />
          <Checkbox name="fireplace" label="Peis/ildsted" />
          <Checkbox name="beach" label="Strandlinje" />
          <Checkbox name="hiking" label="Turterreng" />
          <Checkbox name="view" label="Utsikt" />
          <Checkbox name="janitor" label="Vaktmester" />
        </div>
      </div>
    )
  }
}

SingleProperty.propTypes = {
  data: PropTypes.object,
  historyQuery: PropTypes.string,
}

export default SingleProperty
