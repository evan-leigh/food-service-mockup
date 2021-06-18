import React from 'react'

import ValueOne from '../../assets/svg/values/value-1.svg'
import ValueTwo from '../../assets/svg/values/value-2.svg'
import ValueThree from '../../assets/svg/values/value-3.svg'

const Values = () => {
	return (
		<section className='values'>
			<div className='inner'>
				<div className='content values-list'>
					<div className='value fade-in'>
						<ValueOne />
						<h2 className='header'>
							Vegetarian <br /> Options
						</h2>
						<p className='paragraph'>
							Facilisis ipsum molestie felis risus nisl felis ac. Amet orci
							augue porta morbi in venenatis ultrices in.
						</p>
					</div>
					<div className ='value fade-in'>
						<ValueTwo />
						<h2 className='header'>
							High Quality <br /> Ingredients
						</h2>
						<p className='paragraph'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
							dolore itaque voluptates
						</p>
					</div>
					<div className='value fade-in '>
						<ValueThree />
						<h2 className='header'>
							Grass-fed <br /> Animals
						</h2>
						<p className='graph'>
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
