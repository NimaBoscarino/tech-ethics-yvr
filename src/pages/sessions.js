import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const UpcomingSession = ({ title, date, speaker, details, meetup }) => (
  <div>
    <h2>
      { title }
    </h2>
    <div
      css={css`
        color: #606060;
        margin-bottom: ${rhythm(1/2)};
      `}
    >
      {date}
      {
        speaker && <span> - Speaker: {speaker} - </span>
      }
      {
        meetup && <a href={meetup} target="_blank">RSVP on Meetup.com</a>
      }
    </div>              
  
    <p>
      {
        details || <em>Details soon!</em>
      }
    </p>  
    <hr></hr>
  </div>
)

export default ({ data }) => (
  <Layout>
    <h1>Upcoming Sessions</h1>

    <p>
      Sessions are scheduled for every other week at 6pm in Vancouver. The location is <span css={css`
        font-weight: bold;
      `}>401 West Georgia.</span> Meetup registration links will be posted a few weeks before the events.
    </p>
    
    <UpcomingSession
      date={"June 12th"}
      title={"Bias in Adaptive Systems"}
      speaker={"Stella Lee"}
      meetup={"https://www.meetup.com/DevhubVancouver/events/262100728/"}
      details={"In this week's session we'll learn about adaptive learning systems with the amazing Dr. Stella Lee! We’ll demystify “Artificial Intelligence”, and learn about how cutting-edge machine learning techniques are being used to power e-learning platforms."}
    />
    
    <UpcomingSession
      date={"July 9th"}
      title={"Tradition, Transmission, Transparency"}
      speaker={"David Lacho"}
      details={"This talk will focus on the collaborative process of working with communities and relationship building. David Lacho will problematize common-held notions of tradition, transmission, and “preservation” while talking to the idea of being transparent and accountable in the dev process."}
    />

    <UpcomingSession
      date={"July 23rd"}
      title={"TBD"}
    />


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
