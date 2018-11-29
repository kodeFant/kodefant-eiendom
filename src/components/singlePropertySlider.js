import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/scss/swiper.scss'
import styles from './singlePropertySlider.module.scss'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

class SinglePropertySlider extends Component {
  goNext = () => {
    console.log(this.swiper)
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }
  render() {
    const nextButton = () => (
      <div className={styles.next} onClick={this.goNext}>
        <IconContext.Provider
          value={{ style: { verticalAlign: 'middle', height: '2rem' } }}
        >
          <FaAngleRight />
        </IconContext.Provider>
      </div>
    )
    const prevButton = () => (
      <div className={styles.prev} onClick={this.goPrev}>
        <IconContext.Provider
          value={{ style: { verticalAlign: 'middle', height: '2rem' } }}
        >
          <FaAngleLeft />
        </IconContext.Provider>
      </div>
    )
    const gallerySwiperParams = {
      navigation: {
        nextEl: styles.next,
        prevEl: styles.prev,
      },
      renderPrevButton: prevButton,
      renderNextButton: nextButton,
      loop: true,
      pagination: {
        el: `.swiper-pagination.${styles.pagination}`,
        clickable: true,
      },
    }
    return (
      <div className={styles.singlePropertySlider}>
        <Swiper
          {...gallerySwiperParams}
          ref={node => {
            if (node) this.swiper = node.swiper
          }}
        >
          <Img fluid={this.props.images[0].childImageSharp.fluid} />
          <Img fluid={this.props.images[1].childImageSharp.fluid} />
        </Swiper>
      </div>
    )
  }
}

SinglePropertySlider.propTypes = {
  images: PropTypes.array,
}

export default SinglePropertySlider
