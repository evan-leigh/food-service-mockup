import React, {useEffect} from 'react'
import {gsap, ScrollTrigger} from 'gsap/all'

import Layout from '../layout/layout'
import Seo from '../layout/seo'
import Hero from './index/hero'
import Steps from './index/steps'
import Selection from './index/selection'
import Values from './index/values'
import Testemonials from './index/testemonials'

const Index = () => {
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		const fadeIn = gsap.utils.toArray('.fade-in')
		fadeIn.forEach((element) => {
			gsap.to(element, {
				y: -10,
				duration: 0.4,
				ease: 'Power3.out',
				opacity: '1',
				delay: 0.2,

				scrollTrigger: {
					trigger: element,
					start: 'bottom 80%',
				},
			})
		})
	})

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
