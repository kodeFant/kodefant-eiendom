import React from 'react'
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

import Logo from './logo'

const FooterArea1 = () => (
  <div className={styles.footerArea}>
    <Logo />
    <p>
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
  <div className={styles.footerArea}>
    <h2>Siste eiendommer</h2>
    <hr />
    <div className="lastProperties">
      <div className={styles.property}>
        <div className={styles.image} />
        <p>
          Vestvendt familieleilighet med utsikt mot havet.
          <span className={styles.price}>1,2 millioner</span>
        </p>
      </div>
      <div className={styles.property}>
        <div className={styles.image} />
        <p>
          Vestvendt familieleilighet med utsikt mot havet.
          <span className={styles.price}>1,2 millioner</span>
        </p>
      </div>
      <div className={styles.property}>
        <div className={styles.image} />
        <p>
          Vestvendt familieleilighet med utsikt mot havet.
          <span className={styles.price}>1,2 millioner</span>
        </p>
      </div>
    </div>
  </div>
)
const FooterArea3 = () => (
  <div className={styles.footerArea}>
    <h2>Galleri</h2>
    <hr />
    <div className={styles.galleryGrid}>
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
      <div className={styles.galleryImage} />
    </div>
  </div>
)
const FooterArea4 = () => (
  <div className={styles.footerArea}>
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
        <FooterArea3 />
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

export default Footer
