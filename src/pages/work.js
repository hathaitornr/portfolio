import React from "react"
import { Link, graphql } from "gatsby"
import { Image, TextWithImage, Button } from "../components"
import styles from "../styles/work.module.scss"

const Work = ({
  data: {
    allProjectYaml: { nodes },
  },
}) => {
  const { banner, general, sample } = nodes[0]
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <Image image={banner} />
        <br></br>
        <p className={styles.content}>
          <span>
            At Scholastic I’ve worked on various projects such as proof-of-concepts, usability studies, and surveys to
            ensure an ideal user experience for Scholastic customers.
          </span>
          <br />
          <br />
          <span>
            Being a design researcher in a small design research team (of 2! <span role='img'>😀</span>) within a multiple-disciplinary digital
            services division, I know how to communicate research findings in a concise and compelling narrative to
            designers, engineers, and marketers.
          </span>
          <br />
          <br />
          <span>
            If you are interested in my work and want to hear more, I’d be more than happy to hop on a video call or
            meet in person (if you are in NYC and the pandemic is over). <span role='img'>👋</span>
          </span>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.workInfo}>
        <TextWithImage image={general} reverse={true}>
          <p className={styles.generalInfo}>What I Do:</p>
          <p className={styles.content}>
            I work across the entire research spectrum from participant screening and recruitment to designing research
            plans and scripts, product design thinking workshops, remote user testing, and surveys. 
          </p>
          <br />
          <Button>
            <Link to="/skills">
              <strong>Read more</strong>
            </Link>
          </Button>
        </TextWithImage>
      </div>
      <div className={styles.workInfo}>
        <TextWithImage image={sample} reverse={true}>
          <p className={styles.generalInfo}>Work Sample:</p>
          <p className={styles.content}>
            The Learn at Home product is an online service that provides educational resources for parents and teachers.
            I worked to convert it from a free service into a subscription-based product, and to improve the overall
            user experience.
          </p>
          <br />
          <Button>
            <Link to="/">
              <strong>Read more</strong>
            </Link>
          </Button>
        </TextWithImage>
      </div>
    </div>
  )
}

export default Work

export const query = graphql`
  query {
    allProjectYaml(filter: { title: { eq: "work" } }) {
      nodes {
        ...basicInfo
        general {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sample {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
