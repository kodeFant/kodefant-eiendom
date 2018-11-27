import React from 'react'
import { Link } from 'gatsby'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'
import PropTypes from 'prop-types'

const nolink = (e, bool) => {
  bool ? e.preventDefault() : null
}

const nocursor = { cursor: 'default' }

export const Address = props => (
  <Link
    to="kontakt"
    onClick={e => nolink(e, props.nolink)}
    style={props.nocursor ? nocursor : null}
  >
    <FaMapMarkerAlt /> <span>Freserveien 39, 0195 Oslo</span>
  </Link>
)

export const Email = props => (
  <a
    onClick={e => nolink(e, props.nolink)}
    style={props.nocursor ? nocursor : null}
    href="mailto:dineiendom@kodefant.no"
  >
    <FaEnvelope /> <span>dineiendom@kodefant.no</span>
  </a>
)

export const Phone = props => (
  <Link
    onClick={e => nolink(e, props.nolink)}
    style={props.nocursor ? nocursor : null}
    to="kontakt"
  >
    <FaPhone /> <span>(+47) 413 999 420</span>
  </Link>
)

const sharedPropTypes = {
  nolink: PropTypes.bool,
  nocursor: PropTypes.bool,
}

Address.propTypes = sharedPropTypes
Email.propTypes = sharedPropTypes
Phone.propTypes = sharedPropTypes

export const Facebook = () => (
  <a
    href="https://www.facebook.com/kodefant/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>
)

export const Twitter = () => (
  <a
    href="https://twitter.com/larsparsfromage"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter />
  </a>
)

export const Github = () => (
  <a
    href="https://github.com/kodeFant/kodefant-eiendom"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>
)
