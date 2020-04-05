import { graphql } from 'gatsby'

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
        overview {
            approach {
                members
                tools
                research
                design
                testing
            }
            headline
            problem {
                content
                headline
            }
            solution {
                content
                headline
                feature1 {
                    content
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    reverse
                }
                feature2 {
                    content
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    reverse
                }
                feature3 {
                    content
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    reverse
                }
            }
        }
    }
`