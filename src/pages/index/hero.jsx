import * as React from 'react'

import {StaticImage} from "gatsby-plugin-image"

import Button from "../../components/button"

const Hero = () => {
  return (
    <section className='hero'>
      <div className='inner'>
        <div className='content image'>
          <div className='dishes-A'>
            <StaticImage
              layout='fixed'
              width={900}
              quality={95}
              placeholder='none'
              src='../../assets/images/dishes-A.png'
              alt='selection of food'
            />
          </div>
          <div className='dishes-A-mobile'>
            <StaticImage
              layout='fullWidth'
              placeholder='none'
              src='../../assets/images/dishes-A-mobile.png'
              alt='selection of food'
            />
          </div>
        </div>
        <div className='content'>
          <div className='paragraph'>Health awaits.</div>
          <h1
            className='header'
            style={{
              maxWidth: '360px',
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
              className='link small'
            />
            <Button className='primary link small' to='/'>
              Get Started
            </Button>
          </form>
          <p className='small' style={{maxWidth: '544px'}}>
            Nunc nulla quis ipsum, eget faucibus quis. Arcu ut in augue amet.
            Tempus nascetur fringilla eget mi arcu morbi.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
