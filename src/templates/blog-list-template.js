import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          {data.site.siteMetadata.title} - Posts
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}
            css={css`
              margin-bottom: 25px;
              background: #dadee5;
              transition: border 0.5s;
              border: solid 3px white;
              border-radius: 20px 20px 20px 20px;
              overflow: hidden;

              &:hover {
                border: solid 3px black;
              }
            `}
          >
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <img src={node.frontmatter.image} />
              <div
                css={css`
                  padding: 15px;
                `}
              >
                <h3
                  css={css`
                    color: black;
                    margin-bottom: ${rhythm(1 / 2)};
                  `}
                >
                  {node.frontmatter.title} 
                </h3>
                <div
                  css={css`
                    color: #606060;
                    margin-bottom: ${rhythm(1/2)};
                  `}
                >
                  {node.frontmatter.date}
                </div>              
                <p>{node.frontmatter.excerpt} <span css={css`
                  text-decoration: underline;
                `}>Read more...</span></p>
              </div>
            </Link>
          </div>
        ))}

        <div>
          {
            pageContext.currentPage !== 1 &&
            <Link
              to={
                pageContext.currentPage === 2 ? '/' : `/blog/${pageContext.currentPage - 1}`
              }
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <span>{"< Prev"}</span>
            </Link>
          }
          { " " }
          {
            pageContext.currentPage !== pageContext.numPages &&
            <Link
              to={ `/blog/${pageContext.currentPage + 1}` }
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <span>{"Next >"}</span>
            </Link>
          }
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql` 
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`