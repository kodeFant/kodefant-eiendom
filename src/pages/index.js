import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Jumbotron from '../components/heroes/jumbotron'
import SearchFilter from '../components/heroes/externalSearchFilter'
import Services from '../components/heroes/services'
import KeyNumbers from '../components/heroes/keyNumbers'
import OurAgents from '../components/heroes/ourAgents'

const IndexPage = ({ data }) => (
  <Layout>
    <Jumbotron />
    <SearchFilter />
    <Services />
    <KeyNumbers />
    <OurAgents />
  </Layout>
)

export default IndexPage
