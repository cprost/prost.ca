const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    
    createNodeField({
      node: node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blogpost.js')

  // note: graphql returns a promise
  const res = await graphql(`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"  }}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}