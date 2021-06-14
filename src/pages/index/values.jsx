import React from 'react'

import ValueOne from '../../assets/svg/valueOne.svg'
import ValueTwo from '../../assets/svg/valueTwo.svg'
import ValueThree from '../../assets/svg/valueThree.svg'

const Values = () => {
	return (
		<section className='values'>
			<div className='inner'>
				<div className='content values-list fade-in'>
					<div className='value'>
						<ValueOne />
						<h2 className='header'>
							Vegetarian <br /> Options
						</h2>
						<p className='paragraph'>
							Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
							augue porta morbi in venenatis ultrices in.
						</p>
					</div>
					<div className='value'>
						<ValueTwo />
						<h2 className='header'>
							High Quality <br /> Ingredients
						</h2>
						<p className='paragraph'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							dolore itaque voluptates
						</p>
					</div>
					<div className='value'>
						<ValueThree />
						<h2 className='header'>
							Grass-fed <br /> Animals
						</h2>
						<p className='paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
							a, cum iusto itaque, optio repellat eius impedit
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Values
