import React from 'react'

import {StaticImage} from 'gatsby-plugin-image'

import Button from '../../components/button'
import Inner from '../../components/inner'
import Content from '../../components/content'

const Hero = () => {
	return (
		<section id='hero'>
			<div className='backdrop'>
				<StaticImage
					className='backdrop-image'
					layout='fullWidth'
					placeholder='blurred'
					src='../../assets/images/backdrop.png'
					alt='selection of food'
					quality={90}
				/>
			</div>
			<Inner>
				<Content className='image fade-in'>
					<div className='dishes-A'>
						<StaticImage
							layout='fixed'
							width={900}
							quality={50}
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
				</Content>
				<Content>
					<p className='paragraph fade-in'>Made with care in mind.</p>
					<h1 className='header fade-in'>
						Healthy {'&'} delicious meals all customized to your liking
					</h1>

					<form className='links fade-in'>
						<input
							type='text'
							placeholder='Your email address'
							className='link small'
						/>
						<Button className='primary link small' to='/'>
							Get Started
						</Button>
					</form>

					<p className='paragraph fade-in'>
						Nunc nulla quis ipsum, eget faucibus quis. Arcu ut in augue amet.
						Tempus nascetur fringilla eget mi arcu morbi.
					</p>
				</Content>
			</Inner>
		</section>
	)
}

export default Hero
