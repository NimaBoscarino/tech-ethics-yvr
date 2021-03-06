import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

import Search from "./Search"

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
        float: right;
        margin-left: ${rhythm(1/4)};
      `}
      >
        About
      </Link>
      <Link
        to={`/resources/`}
        css={css`
        float: right;
        margin-left: ${rhythm(1/4)};
      `}
      >
        Resources
      </Link>
      <Link
          to={`/sessions/`}
          css={css`
          float: right;
          margin-left: ${rhythm(1/4)};
        `}
        >
          Sessions
      </Link>
      <div css={css`
        display: inline-block;
        float: right;  
      `}>
        <Search collapse indices={searchIndices} />
      </div>
      {children}
    </div>
  )
}