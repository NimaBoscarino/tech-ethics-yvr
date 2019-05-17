import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      Ethical Tech YVR is a meetup series presented by Nima Boscarino, a Lead Instructor for the web dev bootcamp at <a target="_blank" href="https://lighthouselabs.com">Lighthouse Labs</a>.
    </p>

    <h2>What is the goal of this meetup?</h2>
    <ol>
      <li>To become better informed on the ways that different technologies affect our lives, the lives of the people around us, and the lives of those that <em>aren’t</em> immediately around us.</li>
      <li>To work together in making ethical technology.</li>
      <li>To promote a positive and inclusive tech culture in Vancouver, and beyond.</li>
    </ol>

    <p>With new tech entering the zeitgeist faster than ever, it’s important for consumers and developers of tech alike to be aware of the subtle effects that different technologies have in our society. In this meetup series we’ll look at some of the surprising ways that technology and ethics bump into each other, and and then come up with some guidelines and practices that developers can use to promote an ethical tech sector.</p>

    <p>Details for upcoming sessions can be found on the <a target="_blank" href="https://www.meetup.com/DevhubVancouver">Devhub Vancouver Meetup page</a>.</p>

    <p>These sessions are hosted in Vancouver by me, Nima Boscarino!</p>

    <h2>About Nima</h2>
    <p>
      I'm a lead instructor at <a target="_blank" href="https://lighthouselabs.com">Lighthouse Labs</a>. My background is in computer science and education.
    </p>
    <h3>Contact</h3>
    <p>
      You can read more about me on <a target="_blank" href="https://nimaboscarino.github.io">my personal page</a>, or connect with me through:
    </p>
    <ul>
      <li>
        Email: <a href="mailto:nima@lighthouselabs.com">nima@lighthouselabs.com</a>
      </li>
      <li>
        Twitter: <a href="https://twitter.com/NimaBoscarino">@NimaBoscarino</a>
      </li>
      <li>
        GitHub: <a href="https://github.com/NimaBoscarino">NimaBoscarino</a>
      </li>
      <li>
        LinkedIn: <a href="https://linkedin.com/in/nima-boscarino">nima-boscarino</a>
      </li>
    </ul>

    <p>
      Please reach out if you're interested in attending, presenting, or just want to learn more!
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
