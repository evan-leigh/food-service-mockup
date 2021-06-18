import * as React from 'react'

import One from '../../assets/svg/steps/step-1.svg'
import Two from '../../assets/svg/steps/step-2.svg'
import Three from '../../assets/svg/steps/step-3.svg'
import Four from '../../assets/svg/steps/step-4.svg'

const Line = () => {
  return (
    <svg
      width='30%'
      height='3'
      preserveAspectRatio='none'
      className='line'
      viewBox='0 0 279 3'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 1L279 2'
        stroke='#818181'
        strokeWidth='3'
        strokeDasharray='12 5'
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
        strokeWidth='2'
        strokeDasharray='12 4'
      />
    </svg>
  )
}

const Steps = () => {
  return (
    <section className='steps'>
      <div className='inner'>
        <div className='header-container content'>
          <h2 className='header fade-in'>
            Just Four <br /> Simple Steps
          </h2>
        </div>
        <div className='content graph'>
          <div className='counter'>
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
            <div className='step fade-in'>
              <h3>Customize</h3>
              <p className='small'>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
              </p>
            </div>
            <div className='step fade-in'>
              <h3>Order</h3>
              <p className='small'>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
              </p>
            </div>
            <div className='step fade-in'>
              <h3>Cook</h3>
              <p className='small'>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
              </p>
            </div>
            <div className='step fade-in'>
              <h3>Enjoy</h3>
              <p className='small'>
                Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
