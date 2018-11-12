import React from 'react'

import Layout from '../components/layout/layout'
import Jumbotron from '../components/jumbotron'
import SearchFilter from '../components/searchFilter'
import Services from '../components/services'

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <SearchFilter />
    <Services />
  </Layout>
)

export default IndexPage
