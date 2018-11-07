import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './headerNav.module.scss'
import { HamburgerButton } from 'react-hamburger-button'

const NavLink = props => (
  <Link {...props} activeClassName={styles.active} className={styles.navLink}>
    {props.children}
  </Link>
)

class HeaderNav extends Component {
  state = {
    mobileMenuVisible: false,
  }

  handleClick = () => {
    this.setState({
      mobileMenuVisible: !this.state.mobileMenuVisible,
    })
  }

  render() {
    return (
      <>
        <nav
          className={`${styles.navbar} ${
            this.state.mobileMenuVisible ? styles.mobileMenuVisible : null
          }`}
        >
          <NavLink to="/">Hjem</NavLink>
          <NavLink to="om">Om</NavLink>
          <NavLink to="eiendommer">Eiendommer</NavLink>
          <NavLink to="kontakt">Kontakt</NavLink>
        </nav>
        <div className={styles.hamburger}>
          {' '}
          <span className={styles.menuText} onClick={this.handleClick}>
            Meny
          </span>
          <HamburgerButton
            open={this.state.mobileMenuVisible}
            onClick={this.handleClick}
            width={18}
            height={15}
            strokeWidth={2}
            color="#212121"
            animationDuration={0.5}
          />
        </div>
      </>
    )
  }
}

export default HeaderNav
