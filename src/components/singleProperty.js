import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './singleProperty.module.scss'
import PropertyCardTop from './properties/propertyCardTop'
import PropertyCardBottom from './properties/propertyCardBottom'
import ReactCheckbox from './reactCheckbox'
import PropTypes from 'prop-types'
import SinglePropertySlider from './singlePropertySlider'

import { FaSearchLocation, FaRegEnvelope, FaFolderOpen } from 'react-icons/fa'

class SingleProperty extends Component {
  render() {
    const data = this.props.data.node
    const Checkbox = props => (
      <ReactCheckbox
        style={styles.checkbox}
        value={data[props.name]}
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
        <div className={styles.grid}>
          <div className={styles.content}>
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
              Pinterest forage selfies DIY readymade kitsch Brooklyn Vice
              crucifix locavore cray Wes Anderson cred Williamsburg yr 8-bit
              fingerstache single-origin coffee master cleanse jean shorts
              Bushwick paleo distillery quinoa tofu Blue Bottle PBR&B twee
              post-ironic Portland pork belly fap.
            </p>
            <p>
              {' '}
              Chillwave heirloom letterpress 3 wolf moon selvage fanny pack
              gastropub wolf kogi sriracha bitters direct trade banh mi plaid
              bicycle rights stumptown ethical Schlitz mustache messenger bag
              McSweeneys farm-to-table retro put a bird on it Tonx typewriter
              Godard cornhole bespoke tousled mumblecore food truck flannel
              pickled asymmetrical Carles{' '}
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
          <div className={styles.sidebar}>
            <h3 className={styles.brokerHeader}>Kontakt din webutvikler</h3>
            <div className={styles.brokerImageContainer}>
              <BrokerImage />
            </div>
            <p>
              Har du penger å tjene og en bedrift å drive? Da har du andre ting
              å gjøre enn å lage nettside selv.
            </p>
            <p>
              Jeg heter Lars Lillo Ulvestad og lager flotte nettsider til en
              pris vi avtaler på forhånd.
            </p>
            <div className={styles.contact}>
              <Link to="kontakt">
                <FaRegEnvelope /> Ta kontakt
              </Link>

              <a href="https://lillo.tech">
                <FaFolderOpen /> Se min portefølje
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const BrokerImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "lillo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
)

SingleProperty.propTypes = {
  data: PropTypes.object,
  historyQuery: PropTypes.string,
}

export default SingleProperty
