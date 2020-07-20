import React, { useMemo } from "react"
import { Link, graphql } from "gatsby"
import styles from "../styles/portfolio.module.scss"

import { Image, ProjectCaption } from "../components"

const Portfolio = ({
  data: {
    allFile: { nodes },
  },
}) => {
  const data = useMemo(() => {
    const res = {}
    nodes.forEach(node => {
      if (node.childImageSharp.original.src.includes("geri")) {
        res.geri = node
      } else if (node.childImageSharp.original.src.includes("hlthpal")) {
        res.hlthpal = node
      } else if (node.childImageSharp.original.src.includes("contentor")) {
        res.contentor = node
      } else if (node.childImageSharp.original.src.includes("space")) {
        res.space = node
      }
    })
    return res
  }, [nodes])
  return (
    <div className={styles.container}>
      <div id="portfolio-headline" className={styles.intro}>
        <p>Portfolio</p>
      </div>
      <div id="item-container" className={styles.itemContainer}>
        <ProjectCaption className={styles.projectBox} path='hlthpal' summary='Summary for Hlthpal'>
          <Image image={data.hlthpal} alt="Hlthpal" />
        </ProjectCaption>
        <ProjectCaption className={styles.projectBox} path='contentor' summary='Summary for Contentor'>
          <Image image={data.contentor} alt="Contentor" />
        </ProjectCaption>
        <ProjectCaption className={styles.projectBox} path='geri' summary='Summary for Geri'>
          <Image image={data.geri} alt="Geri" />
        </ProjectCaption>
        <ProjectCaption className={styles.projectBox} summary='Summary for Space'>
          <Image image={data.space} alt="Space" />
        </ProjectCaption>
      </div>
    </div>
  )
}

export default Portfolio

export const query = graphql`
  query MyQuery {
    allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
      nodes {
        childImageSharp {
          original {
            src
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
