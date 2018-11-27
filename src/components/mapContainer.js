import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.914116,
      lng: 10.752227,
    },
    zoom: 14,
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBd8BRwMKRgSHcdb-CSgZa8pM7fvWKj8a8',
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    )
  }
}

SimpleMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  text: PropTypes.string,
  styles: PropTypes.object,
}

export default SimpleMap
