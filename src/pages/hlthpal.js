import React from "react"
import { graphql } from "gatsby"
import { Image, Sidebar } from "../components"
import { Introduction, Research, Design, Testing, Final, Conclusion } from "../modules/Hlthpal"
import styles from "../styles/project.module.scss"

const Hlthpal = ({
  data: {
    allProjectYaml: { nodes },
  },
}) => {
  const { banner } = nodes[0]
  return (
    <div className={styles.container}>
      <Image image={banner} alt="Banner" />
      <div className={styles.stickyWrapper}>
        <Sidebar />
        <div className={styles.contentWrapper}>
          <Introduction />
          <Research />
          <Design />
          <Testing />
          <Final />
          <Conclusion />
        </div>
      </div>
    </div>
  )
}

export default Hlthpal

export const query = graphql`
  query {
    allProjectYaml(filter: { title: { eq: "hlthpal" } }) {
      nodes {
        ...basicInfo
      }
    }
  }
`
