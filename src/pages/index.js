import React from 'react'

import Layout from '../components/layout/layout'
import Jumbotron from '../components/jumbotron'
import SearchFilter from '../components/searchFilter'
import Services from '../components/services'
import KeyNumbers from '../components/keyNumbers'
import OurAgents from '../components/ourAgents'

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <SearchFilter />
    <Services />
    <KeyNumbers />
    <OurAgents />
  </Layout>
)

export default IndexPage
