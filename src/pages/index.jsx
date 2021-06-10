import * as React from 'react'

import Layout from '../layout/layout'
import Seo from '../layout/seo'
import Hero from './index/hero'
import Steps from './index/steps'
import Selection from './index/selection'
import Values from './index/values'
import Testemonials from './index/testemonials'

const Index = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Hero />
      <Steps />
      <Selection />
      <Values />
      <Testemonials />
    </Layout>
  )
}

export default Index
