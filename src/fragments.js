import { graphql } from "gatsby"

export const overview = graphql`
  fragment basicInfo on ProjectYaml {
    title
    path
    banner {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
