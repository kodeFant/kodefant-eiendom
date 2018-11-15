import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styles from './ourAgents.module.scss'
import { FaUser } from 'react-icons/fa'

import HeroLayout from './layout/heroLayout'
import HorizontalHeader from './horizontalHeader'

const AgentBox = props => (
  <div className={styles.agentBox}>
    <div className={styles.img}>{props.children}</div>
    <div className={styles.agentName}>{props.name}</div>
  </div>
)
AgentBox.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

const gatsbyImageStyle = {
  height: '100%',
}

const imgStyle = {
  objectFit: 'cover',
}

const OurAgents = ({ data }) => (
  <HeroLayout className={styles.ourAgents}>
    <HorizontalHeader
      icon={<FaUser />}
      title="Våre eiendomsmeglere"
      description="Din Eiendoms proffmeglere strekker seg langt for at du skal få solgt boligen til den prisen du fortjener."
    />
    <div className={styles.container}>
      <div className={styles.agentGrid}>
        <AgentBox name="Ola Jensen">
          <Img
            style={gatsbyImageStyle}
            imgStyle={imgStyle}
            fluid={data.imageOne.childImageSharp.fluid}
          />
        </AgentBox>
        <AgentBox name="Jens Ulltveit">
          <Img
            style={gatsbyImageStyle}
            imgStyle={imgStyle}
            fluid={data.imageTwo.childImageSharp.fluid}
          />
        </AgentBox>
        <AgentBox name="Silje Arnesen">
          <Img
            style={gatsbyImageStyle}
            imgStyle={imgStyle}
            fluid={data.imageThree.childImageSharp.fluid}
          />
        </AgentBox>
      </div>
    </div>
  </HeroLayout>
)

OurAgents.propTypes = {
  data: PropTypes.any,
}

const ourAgentswithQuery = props => (
  <StaticQuery
    query={graphql`
      fragment fluidImage on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      query {
        imageOne: file(relativePath: { eq: "agents/agent1.jpg" }) {
          ...fluidImage
        }
        imageTwo: file(relativePath: { eq: "agents/agent2.jpg" }) {
          ...fluidImage
        }
        imageThree: file(relativePath: { eq: "agents/agent3.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={data => <OurAgents data={data} {...props} />}
  />
)

export default ourAgentswithQuery
