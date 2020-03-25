exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`query {
    allProjectYaml {
        nodes {
            title
            path
        }
    }
  }`)
  
  res.data.allProjectYaml.nodes.forEach(element => {
    const { path, title } = element;
    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: {
        title
      },
    })
  })
}