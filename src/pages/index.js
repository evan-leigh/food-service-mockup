import * as React from 'react'

import Layout from '../layout/layout'
import Seo from '../layout/seo'

import {StaticImage} from 'gatsby-plugin-image'
import ArrowForward from '../assets/svg/arrow-forward.svg'

import Button from '../components/button'

import WaveOne from '../assets/svg/waveOne.svg'

import One from '../assets/svg/steps/One.svg'
import Two from '../assets/svg/steps/Two.svg'
import Three from '../assets/svg/steps/Three.svg'
import Four from '../assets/svg/steps/Four.svg'

import ValueOne from '../assets/svg/valueOne.svg'
import ValueTwo from '../assets/svg/valueTwo.svg'
import ValueThree from '../assets/svg/valueThree.svg'

const Line = () => {
  return (
    <svg
      width='30%'
      height='2'
      preserveAspectRatio='false'
      className='line'
      viewBox='0 0 279 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 1L279 0.999976'
        stroke='#818181'
        stroke-width='2'
        stroke-dasharray='12 5'
      />
    </svg>
  )
}

const LineMobile = () => {
  return (
    <svg
      width='3'
      height='180'
      viewBox='0 0 3 180'
      fill='none'
      className='line-mobile'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.65045 0.764893L1.65046 179.182'
        stroke='#999999'
        stroke-width='2'
        strokeDasharray='12 4'
      />
    </svg>
  )
}

const Home = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <section className='hero'>
        <div className='inner'>
          <div className='content image'>
            <div className='dishes-A'>
              <StaticImage
                layout='fixed'
                width={900}
                quality={95}
                placeholder='none'
                src='../assets/images/dishes-A.png'
                alt='selection of food'
              />
            </div>
            <div className='dishes-A-mobile'>
              <StaticImage
                layout='fullWidth'
                placeholder='none'
                src='../assets/images/dishes-A-mobile.png'
                alt='selection of food'
              />
            </div>
          </div>
          <div className='content'>
            <div className='paragraph medium'> Health awaits.</div>
            <h1
              className='header large'
              style={{
                maxWidth: '530px',
              }}>
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
      <section className='steps'>
        <div className='inner'>
          <div
            className='content'
            style={{
              height: '180px',
            }}>
            <h2 className='header'>Just Four Simple Steps</h2>
          </div>
          <div className='content graph'>
            <div className='steps-graph'>
              <One />
              <Line />
              <LineMobile />
              <Two />
              <Line />
              <LineMobile />
              <Three />
              <Line />
              <LineMobile />
              <Four />
            </div>
            <div className='content steps-content'>
              <div>
                <h3>Customize</h3>
                <p className='paragraph small'>
                  Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
                </p>
              </div>
              <div>
                <h3>Order</h3>
                <p className='paragraph small'>
                  Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
                </p>
              </div>
              <div>
                <h3>Cook</h3>
                <p className='paragraph small'>
                  Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
                </p>
              </div>
              <div>
                <h3>Enjoy</h3>
                <p className='paragraph small'></p>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='selection'>
        <div className='inner'>
          <div
            className='content'
            style={{
              maxWidth: '500px',
            }}>
            <p>For every dish there is a story.</p>
            <h1>We have an ulimited selection of high quality dishes</h1>
            <p>
              Mattis tristique nunc, metus malesuada consequat, suspendisse. Nam
              vel quis proin diam egestas. Id massa sit tortor at quis.
            </p>
            <Button className='primary large' to='/'>
              See All Dishes <ArrowForward />
            </Button>
          </div>
          
          <div className='content'>
            <div className='dishes-B'>
              <StaticImage
                layout='fixed'
                width={900}
                quality={95}
                placeholder='none'
                src='../assets/images/dishes-B.png'
                alt='selection of food'
              />
            </div>
            
            <div className='dishes-B-mobile'>
              <StaticImage
                layout='fullWidth'
                placeholder='none'
                src='../assets/images/dishes-B-mobile.png'
                alt='selection of food'
              />
            </div>

            <WaveOne className='wave-one' />
          </div>
          <div
            className='headline'
            style={{
              textAlign: 'center',
              margin: '0 auto',
              width: '535px',
            }}>
            <h2>Our every dish is curated with the best ingredients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse bibendum id semper auctor molestie
            </p>
          </div>
        </div>
      </section>
      <section className='values'>
        <div className='inner'>
          <div className='content values-list'>
            <div>
              <ValueOne />
              <h2>
                Vegetarian <br /> Options
              </h2>
              <p>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
                augue porta morbi in venenatis ultrices in.
              </p>
            </div>
            <div>
              <ValueTwo />
              <h2>High Quality Ingredients</h2>
              <p>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
                augue porta morbi in venenatis ultrices in.
              </p>
            </div>
            <div>
              <ValueThree />
              <h2>
                Grass-fed <br /> Animals
              </h2>
              <p>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
                augue porta morbi in venenatis ultrices in.
              </p>
            </div>
          </div>
          <div>
            <p>For every dish theres a story.</p>
            <h2>Helping over 1,400 people maintain a healthy diet</h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
