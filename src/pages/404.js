import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Сторінку не знайдено" />
    <div  class="special-page">
      <h1>Сторінку не знайшли</h1>
      <p>Ви зайшли на веб-адресу сайту <b>bebyx</b>, під якою нема сторінки.
        Можливо сторінка видалена. Або не створена.</p>
      <p>Спробуйте пошукати, що вам треба, звідси:</p>
      <ul>
        <li><Link to="/">Фасад</Link></li>
        <li><Link to="/pro-blog">Про блоґ</Link></li>
      </ul>
    </div>
  </Layout>
)

export default NotFoundPage
