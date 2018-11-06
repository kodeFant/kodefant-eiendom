import React from 'react'
import HeaderTop from './headerTop'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header>
    <HeaderTop />
    <div className="container">{siteTitle}</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
export default Header
