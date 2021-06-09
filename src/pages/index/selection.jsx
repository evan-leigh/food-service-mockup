import * as React from 'react'

import {StaticImage} from "gatsby-plugin-image"

import Button from "../../components/button"
import WaveOne from '../../assets/svg/waveOne.svg'
import ArrowForward from '../../assets/svg/arrow-forward.svg'

const Selection = () => {
     return (
        <section className='selection'>
        <div className='inner'>
          <div
            className='content'
            style={{
              maxWidth: '500px',
            }}>
            <p>
              For every dish <br className='break' /> there is a story.
            </p>
            <h1 className='header'>
              We have <br className='break' /> an ulimited selection of high
              quality dishes
            </h1>
            <p>
              Mattis tristique nunc, metus malesuada consequat, suspendisse. Nam
              vel quis proin diam egestas. Id massa sit tortor at quis.
            </p>
            <Button className='primary large' to='/'>
              See All Dishes <ArrowForward />
            </Button>
          </div>

          <div className='content dishes-container'>
            <div className='dishes-B'>
              <StaticImage
                layout='fixed'
                width={900}
                quality={95}
                placeholder='none'
                src='../../assets/images/dishes-B.png'
                alt='selection of food'
              />
            </div>

            <div className='dishes-B-mobile'>
              <StaticImage
                layout='fullWidth'
                placeholder='none'
                src='../../assets/images/dishes-B-mobile.png'
                alt='selection of food'
              />
            </div>

            <WaveOne className='wave-one' />
          </div>
        </div>
        <div
          className='headline'
          style={{
            textAlign: 'center',
            maxWidth: '535px',
          }}>
          <h2>Our every dish is curated with the best ingredients</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum id semper auctor molestie
          </p>
        </div>
      </section>
    )
}

export default Selection