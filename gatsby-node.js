const path = require('path')

const postsPerPage = 10  // also defined in src/pages/blog.js

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

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Promise.all([
    makeBlogPosts({ graphql, actions }),
    paginate({ graphql, actions })
  ])
}

async function makeBlogPosts({ graphql, actions }) {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blogpost.js')

  // note: graphql returns a promise
  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        totalCount
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

  res.data.allMarkdownRemark.edges.forEach((edge, i) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}

async function paginate({ graphql, actions, limit }) {
  const blogTemplate = path.resolve('./src/pages/blog.js')
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        totalCount
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

  const totalCount = data.allMarkdownRemark.totalCount
  const pages = Math.ceil(totalCount / postsPerPage)

  Array.from({ length: pages }).forEach((_, i) => {
    // run createPages to create a new page with up to postsPerPage posts listed

    actions.createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        skip: i * postsPerPage,
        currentPage: i + 1,
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,  // fixes missing window object error
            use: loaders.null(),
          },
        ],
      },
    })
  }
}