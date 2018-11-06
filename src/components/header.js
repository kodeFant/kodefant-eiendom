import React from 'react'
import HeaderTop from './headerTop'
import HeaderBottom from './headerBottom'
import PropTypes from 'prop-types'

const Header = () => (
  <header>
    <HeaderTop />
    <HeaderBottom />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
export default Header
