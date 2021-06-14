import * as React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

const Testemonials = () => {
  return (
    <section className='testemonials'>
      <div className='inner'>
        <div className='content'>
          <p>
            For every dish <br className='break' /> theres a story.
          </p>
          <h2>Helping over 1,400 people maintain a healthy diet</h2>
        </div>
        <div className='content carousel desktop'>
          <Carousel
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            verticalSwipe={'natural'}
            showArrows={false}
            transitionTime={300}
            interval={5000}
            swipeScrollTolerance={50}
            centerSlidePercentage={80}
            centerMode={true}
            autoPlay={true}>
            <div className='testemonial'>
              <h1>one</h1>
            </div>
            <div className='testemonial'>
              <h1>two</h1>
            </div>
            <div className='testemonial'>
              <h1>three</h1>
            </div>
            <div className='testemonial'>
              <h1>four</h1>
            </div>
            <div className='testemonial'>
              <h1>five</h1>
            </div>
          </Carousel>
        </div>

        <div className='content carousel mobile'>
          <Carousel
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            verticalSwipe={'natural'}
            showArrows={false}
            transitionTime={300}
            interval={5000}
            swipeScrollTolerance={50}
            centerSlidePercentage={100}
            centerMode={false}
            autoPlay={true}>
            <div className='testemonial'>
              <h1>one</h1>
            </div>
            <div className='testemonial'>
              <h1>two</h1>
            </div>
            <div className='testemonial'>
              <h1>three</h1>
            </div>
            <div className='testemonial'>
              <h1>four</h1>
            </div>
            <div className='testemonial'>
              <h1>five</h1>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Testemonials
