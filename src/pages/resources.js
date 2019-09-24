import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const Resource = ({ link, id, title }) => (
  <a href={link} target="_blank"><p key={id}>{title}</p></a>
)

const ResourceList = ({ edges, medium }) => {
  return (
    edges.filter(edge => edge.node.medium === medium).map(edge => {
      return <Resource id={edge.node.id} link={edge.node.link} title={edge.node.title}/>
    })
  )
}

export default ({ data }) => (
  <Layout>
    <h1>Resources</h1>
    
    <hr></hr>
    <h2>Books</h2>
    <ResourceList edges={data.allResourcesJson.edges} medium={"book"}/>

    <hr></hr>
    <h2>Podcasts</h2>
    <ResourceList edges={data.allResourcesJson.edges} medium={"podcasts"}/>
  
    <hr></hr>
    <h2>Websites</h2>
    <ResourceList edges={data.allResourcesJson.edges} medium={"website"}/>

    <hr></hr>
    <h2>Articles</h2>
    <ResourceList edges={data.allResourcesJson.edges} medium={"article"}/>

  </Layout>
)


export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }

  allResourcesJson {
    edges {
      node {
        title
        medium
        link
      }
    }
  }
}`
