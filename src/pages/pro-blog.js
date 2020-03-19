import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Про блоґ" description="Про блоґ Артема Бебика." />
    <article>
      <h1>Про блоґ</h1>
      <p>Давно мріяв створити блоґа своїми руками — і зробив це.</p>

      <p>Мене звати <b>Артем Бебик</b>.</p>

      <p>Блоґ особистий. Тут в одному місці я збираю як свої важливі
        онлайн-публікації за попередні роки, що розкидані по всіх усюдах,
        так і публікую нові тексти та інші напрацювання.</p>

      <h2>Тематика блоґу</h2>

      <p>Тематика вільна. Пишу про все, що мене цікавить.
        Наразі спадає на те, що мої інтереси це переважно:</p>

      <ul>
        <li>література</li>
        <li>веб-розробка</li>
        <li><Link to="/tags/linux">Лінукс</Link> і <Link to="/tags/bsd">БСД</Link></li>
        <li>комікси</li>
        <li>українська мова</li>
      </ul>

      <h2>Підписатися на оновлення блоґу</h2>

      <p>Підписатися на оновлення можна кількома способами.</p>

      <p>Найкращий, що я його рекомендую: <Link to="/rss.xml">RSS</Link>.</p>
      <p>(Не пошкодуйте трохи часу розібратися, технологія дуже проста у використанні,
         проте набагато зручніша за соцмережі, де ви не контролюєте свою стрічку оновлень
          + повсякчасні відволікання + зонди + багато іншого нехорошого.</p>

      <p>Щоб читати RSS-стрічки, я користуюся RSS-читалкою <i>Inoreader</i> —
        але ви можете вибрати будь-яку на ваш смак.)</p>

      <p>Якщо все ж надаєте перевагу соцмережам:
        то найперше я присутній у Твітері —{" "}
        <a href="https://twitter.com/artem_bebyk" target="_blank"
        rel="noopener noreferrer">@artem_bebyk</a>.</p>

      <p>Оновлення по розробницьких проектах — <a href="https://github.com/bebyx"
        target="_blank" rel="noopener noreferrer">github.com/bebyx</a>.</p>

      <p>А про інтернет-маркетинг (яким професійно займаюся)
         я пишу на іншому блозі — <a href="https://artemis.in.ua"
         target="_blank" rel="noopener noreferrer">Artemis.in.ua</a>.</p>

      <h2>Про автора блоґу</h2>

      <p>Народився в Миколаєві (Південному), живу у Львові.</p>

      <h2>Зв'язатися з автором блоґу</h2>

      <p>Зв'язатися зі мною можна по Телеграму — <a href="https://t.me/bebyk"
        target="_blank" rel="noopener noreferrer">@bebyk</a>.</p>

      <p>Або по емейлу: <i>bebyx равлик protonmail.com</i>.</p>

    </article>
  </Layout>
)

export default SecondPage
