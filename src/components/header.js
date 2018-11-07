import React from 'react'
import HeaderTop from './headerTop'
import HeaderBottom from './headerBottom'
import PropTypes from 'prop-types'

const Header = () => (
  <header
    style={{
      boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.75)',
    }}
  >
    <HeaderTop />
    <HeaderBottom />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
export default Header
