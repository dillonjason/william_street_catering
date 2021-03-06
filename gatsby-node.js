/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityTestimonial {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  result.data.allSanityTestimonial.nodes
    .filter(node => node.slug)
    .forEach(node => {
      createPage({
        path: `/reviews/${node.slug.current}`,
        component: path.resolve("./src/templates/review.js"),
        context: {
          slug: node.slug.current,
        },
      })
    })
}
