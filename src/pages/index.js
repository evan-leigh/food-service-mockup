import * as React from "react"
import Layout from "../layout/layout"
import Seo from "../layout/seo"

import DishesA from "../assets/images/dishes.png"

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <section className="hero">  
      <div className="inner">
        <div className="content image">
          <div className="dishesA"><img src={DishesA} alt="" /></div>
        </div>
        <div className="content">
          <div className="paragraph medium"> Made with care in mind.</div>
          <div className="header large" style={{maxWidth: "524px"}}>
            Healthy and delicious meals all customized to your liking
          </div>
        <form action="" style={{width: "524px"}}>
            <input type="text" placeholder="Your email address" className='paragraph small' style={{width: "65%"}}/>
            <button className="primary link small" style={{width: "30%", height: "65px"}}>Get Started</button>
          </form>
          <div className="paragraph medium" style={{maxWidth: "544px"}}>Nunc nulla quis ipsum, eget faucibus quis. Arcu ut in augue amet. Tempus nascetur fringilla eget mi arcu morbi.</div>
        </div>
      </div>
    </section>
    <section className="steps">
      
    </section>
  </Layout>
)

export default Home
