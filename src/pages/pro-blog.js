import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Сторінка про блоґ</h1>
    <p>Ласкаво прошу до блоґу. Блоґ побудований на Gatsby і відповідно React.</p>
  </Layout>
)

export default SecondPage
