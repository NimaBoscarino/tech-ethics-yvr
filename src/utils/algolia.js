const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/pages/" },
      frontmatter: {purpose: {eq: "page"}}
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          permalink
          date(formatString: "MMM DD, YYYY")
          tags
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [

  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries