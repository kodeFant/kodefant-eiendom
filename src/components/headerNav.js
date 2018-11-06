import React from 'react'
import { Link } from 'gatsby'
import styles from './headerNav.module.scss'

const NavLink = props => (
  <Link {...props} activeClassName={styles.active} className={styles.navLink}>
    {props.children}
  </Link>
)

const HeaderNav = () => (
  <nav>
    <NavLink to="/">Hjem</NavLink>
    <NavLink to="om">Om</NavLink>
    <NavLink to="eiendommer">Eiendommer</NavLink>
    <NavLink to="kontakt">Kontakt</NavLink>
  </nav>
)

export default HeaderNav
