import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './ourAgents.module.scss'
import { FaUser } from 'react-icons/fa'

import HeroLayout from './layout/heroLayout'
import HorizontalHeader from './horizontalHeader'

const AgentBox = props => (
  <div className={styles.agentBox}>
    <div className={styles.img} />
    <div>{props.name}</div>
  </div>
)
AgentBox.propTypes = {
  name: PropTypes.string,
}

const ourAgents = () => (
  <HeroLayout className={styles.ourAgents}>
    <HorizontalHeader
      icon={<FaUser />}
      title="Våre eiendomsmeglere"
      description="Din Eiendoms proffmeglere strekker seg langt for at du skal få solgt boligen til den prisen du fortjener."
    />
    <div className={styles.container}>
      <div className={styles.agentGrid}>
        <AgentBox name="Ola Jensen" />
        <AgentBox name="Siv Ulltveit" />
        <AgentBox name="Silje Arnesen" />
      </div>
    </div>
  </HeroLayout>
)

export default ourAgents

export const query = graphql`
  query {
    agent1: file(relativePath: { eq: "agents/agent1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
