import Layout from '../layout/layout'
import * as React from 'react'
import Seo from '../layout/seo'

import {StaticImage} from 'gatsby-plugin-image'

// import DishesA from '../assets/images/dishes-A.png'
// import DishesA_Mobile from '../assets/images/dishes-A-mobile.png'

const Home = () => (
  <Layout>
    <Seo title='Home' />
    <section className='hero'>
      <div className='inner'>
        <div className='content image'>
          <div className='dishes-A'>
            <StaticImage
              layout="fullWidth"
              quality={95}
              placeholder="none"
              src="../assets/images/dishes-A.png"
              alt=''
            />
          </div>
          <div className='dishes-A-mobile'>
            <StaticImage
              layout='fullWidth'
              placeholder="none"
              src="../assets/images/dishes-A-mobile.png"
              alt=''
            />
          </div>
        </div>
        <div className='content'>
          <div className='paragraph medium'> Health awaits.</div>
          <h1 className='header large'>
            Healthy and delicious meals all customized to your liking
          </h1>
          <form
            className='links'
            action=''
            style={{
              maxWidth: '530px',
              width: '100%',
            }}>
            <input
              type='text'
              placeholder='Your email address'
              className='paragraph small'
            />
            <button className='primary link small' style={{height: '65px'}}>
              Get Started
            </button>
          </form>
          <p className='paragraph small' style={{maxWidth: '544px'}}>
            Nunc nulla quis ipsum, eget faucibus quis. Arcu ut in augue amet.
            Tempus nascetur fringilla eget mi arcu morbi.
          </p>
        </div>
      </div>
    </section>
    <section className='steps'></section>
  </Layout>
)

export default Home
