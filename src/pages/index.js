import * as React from "react"
import Layout from "../layout/layout"
import Seo from "../layout/seo"

const Home = () => (
  <Layout>
    <Seo title="Home" />

      <h1 className="header large"> Heading Large </h1>

      <h2 className="header medium"> Heading Medium </h2>
      
      <h3 className="header small"> Heading Small </h3>
      
      <p className="paragraph large"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exrcitationem accusamus sed voluptatibus obcaecati aliquam quaerat, iste perspiciati dicta voluptates excepturi dolorem non fugiat provident, nostrum nemo nisi, inventore mollitia illum explicabo eaque sequi. Vitae quis voluptatum, veritatis vero et voluptate?</p>
      
      <p className="paragraph medium"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exrcitationem accusamus sed voluptatibus obcaecati aliquam quaerat, iste perspiciati dicta voluptates excepturi dolorem non fugiat provident, nostrum nemo nisi, inventore mollitia illum explicabo eaque sequi. Vitae quis voluptatum, veritatis vero et voluptate?</p>

      <p className="paragraph small"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exrcitationem accusamus sed voluptatibus obcaecati aliquam quaerat, iste perspiciati dicta voluptates excepturi dolorem non fugiat provident, nostrum nemo nisi, inventore mollitia illum explicabo eaque sequi. Vitae quis voluptatum, veritatis vero et voluptate?</p>

      <a href="/" className="link large">Link Large</a>
      
      <a href="/" className="link medium">Link Medium</a>

      <a href="/" className="link small">Link Small</a>
  </Layout>
)

export default Home
