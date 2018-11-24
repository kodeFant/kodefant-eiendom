import React from 'react'

import Layout from '../components/layout/layout'
import Jumbotron from '../components/heroes/jumbotron'
import SearchFilter from '../components/heroes/externalSearchFilter'

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron />
      <SearchFilter />
    </Layout>
  )
}

export default IndexPage
