import React from 'react'

import Layout from '../components/layout/layout'
import OurAgents from '../components/heroes/ourAgents'
import KeyNumbers from '../components/heroes/keyNumbers'
import Services from '../components/heroes/services'

const AboutPage = () => (
  <Layout>
    <OurAgents />
    <KeyNumbers />
    <Services />
  </Layout>
)

export default AboutPage
