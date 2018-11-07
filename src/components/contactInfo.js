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

export const Address = () => (
  <Link to="kontakt">
    <FaMapMarkerAlt /> <span>Freserveien 39, 0195 Oslo</span>
  </Link>
)

export const Email = () => (
  <a href="mailto:dineiendom@kodefant.no">
    <FaEnvelope /> <span>dineiendom@kodefant.no</span>
  </a>
)

export const Phone = () => (
  <Link to="kontakt">
    <FaPhone /> <span>(+47) 413 999 420</span>
  </Link>
)

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
