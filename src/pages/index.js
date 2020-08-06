import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styles from "../styles/about.module.scss"
import { SEO } from "../components"

const IndexPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* <SEO title="About Me" /> */}
      <div className={styles.introContainer}>
        <p className={styles.intro}>Hi, I'm Mew! <span role='img'>👋</span></p>
      </div>
      <div id="about-container" className={styles.aboutContainer}>
        <div id="img-section" className={styles.imgSection}>
          <Img fluid={data.file.childImageSharp.fluid} alt="Profile" />
        </div>
        <div id="about-section" className={styles.aboutSection}>
          <p className={styles.content}>
            I am an avid UX/Design Researcher with 4+ years experience in design and research, and a passion in shaping
            interactive experiences that promote usability and creating meaningful impact for users. I received a Master's
            degree from Cornell Tech in Information Science and Applied Information Systems with a HCI Specialization. 
            <br />
            <br />
            I am currently a Design Researcher at Scholastic Inc., where I conduct research on parents and teachers to
            better serve Scholastic’s customers in children education.
            <br />
            <br />
            With a background in HCI and data science, I’m well-versed in both Qualitative and Quantitative aspects of
            user research. And with experience working in multi-disciplinary teams, and as a former engineer myself, I know
            how to translate and communicate research findings into high quality actionable recommendations.
            <br />
            <br />
            <span>Feel free to stop by and say hello on </span>
            <a className={styles.link} href="https://www.linkedin.com/in/hrojnirun/">
              LinkedIn
            </a>
            <span role='img'> 🙋‍♀️</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const data = graphql`
  query {
    file(relativePath: { eq: "photo.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
