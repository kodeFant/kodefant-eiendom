import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './footer.module.scss'
import PropTypes from 'prop-types'
import {
  Address,
  Email,
  Phone,
  Facebook,
  Twitter,
  Github,
} from '../contactInfo'
import { IconContext } from 'react-icons'
import { decimalFix } from '../helperFunctions'

import Logo from './logo'

const FooterArea1 = () => (
  <div className={`${styles.footerArea} ${styles.area1}`}>
    <Logo />
    <p className={styles.footerDescription}>
      Din eiendomsbedrift bør presenteres så godt som mulig. Å bruke en
      webutvikler er en smart investering i det lange løp.
    </p>
    <div className={styles.contactInfo}>
      <IconContext.Provider value={{ className: styles.react_icons }}>
        <Address />
        <Email />
        <Phone />
      </IconContext.Provider>
    </div>
    <div className={styles.socialMedia}>
      <IconContext.Provider value={{ size: '1.1rem' }}>
        <Facebook />
        <Twitter />
        <Github />
      </IconContext.Provider>
    </div>
  </div>
)

const FooterArea2 = () => (
  <div className={`${styles.footerArea} ${styles.area2}`}>
    <h2>Siste eiendommer</h2>
    <hr />

    <div className="lastProperties">
      <LastPropertiesWithData />
    </div>
  </div>
)

const FooterArea4 = () => (
  <div className={`${styles.footerArea} ${styles.area4}`}>
    <h2>Nyhetsbrev</h2>
    <hr />
    <p>
      Et nyhetsbrev krever litt innsats, men lar deg holde kontakt med
      boliginteresserte over tid.
    </p>
    <form>
      <input type="email" placeholder="Din epost" />
      <button className={styles.btn} onClick={e => e.preventDefault()}>
        Abonnér
      </button>
    </form>
    (Kun for demonstrasjon. Det skjer ingen ting om du melder deg på dette
    nyhetsbrevet)
  </div>
)

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <FooterArea1 />
        <FooterArea2 />
        <FooterArea4 />
      </div>
    </footer>
    <div className={styles.copyright}>
      <div className="container">
        Alle rettigheter 2018 &copy; Lars Lillo Ulvestad /{' '}
        <a href="https://kodefant.no">kodeFant</a>
      </div>
    </div>
  </>
)
Footer.propTypes = {
  siteTitle: PropTypes.string,
}

const LastPropertiesWithData = props => (
  <StaticQuery
    query={graphql`
      query {
        allPropertiesYaml(limit: 3) {
          edges {
            node {
              id
              description
              price
              images {
                childImageSharp {
                  fixed(width: 80, height: 80) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <LastProperties data={data} {...props} />}
  />
)

const LastProperties = ({ data }) => {
  return data.allPropertiesYaml.edges.map(property => (
    <div key={property.node.id} className={styles.property}>
      <Link
        className={styles.lastPropertiesImage}
        to={`eiendom/?id=${property.node.id}`}
      >
        <Img fixed={property.node.images[0].childImageSharp.fixed} />
      </Link>
      <p>
        {property.node.description}
        <br />
        <span className={styles.price}>
          {decimalFix(property.node.price / 1000000)} millioner
        </span>
      </p>
    </div>
  ))
}

export default Footer
