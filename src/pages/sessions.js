import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const UpcomingSession = ({ title, date, speaker }) => (
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
        speaker && <span> - Speaker: {speaker}</span>
      }
    </div>              
  
    <p>
      <em>Details soon!</em>
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
      date={"May 28th"}
      title={"Romance and Technology"}
    />
    
    <UpcomingSession
      date={"June 12th"}
      title={"Bias in Adaptive Systems"}
      speaker={"Stella Lee"}
    />
    
    <UpcomingSession
      date={"June 25th"}
      title={"Tech + Culture Preservation"}
      speaker={"David Lacho"}
    />

    <UpcomingSession
      date={"July 9th"}
      title={"Topic TBD"}
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
