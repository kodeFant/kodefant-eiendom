import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './headerNav.module.scss'
import { HamburgerButton } from 'react-hamburger-button'
import Logo from './logo'

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
        <nav className={styles.nav}>
          <div
            className={`${styles.navbar} ${
              this.state.mobileMenuVisible ? styles.mobileMenuVisible : null
            }`}
          >
            <div className={styles.mobileBrand}>
              <Logo />
            </div>
            <NavLink to="/">Hjem</NavLink>
            <NavLink to="om">Om</NavLink>
            <NavLink to="eiendommer/?">Eiendommer</NavLink>
            <NavLink to="kontakt">Kontakt</NavLink>
          </div>
          <div
            className={`${styles.hamburger} ${
              this.state.mobileMenuVisible ? styles.inMenu : null
            }`}
          >
            {' '}
            <span
              style={this.state.mobileMenuVisible ? { display: 'none' } : null}
              className={styles.menuText}
              onClick={this.handleClick}
            >
              Meny
            </span>
            <HamburgerButton
              open={this.state.mobileMenuVisible}
              onClick={this.handleClick}
              width={this.state.mobileMenuVisible ? 40 : 18}
              height={this.state.mobileMenuVisible ? 30 : 15}
              strokeWidth={2}
              color="#212121"
              animationDuration={0.5}
            />
          </div>
        </nav>
      </>
    )
  }
}

export default HeaderNav
