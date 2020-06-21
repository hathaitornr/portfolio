import React from "react"
import { graphql } from "gatsby"
import { Image, Sidebar } from "../components"
import { Introduction, Research, Design, Testing, Final, Conclusion } from "../modules/Geri"
import styles from "../styles/project.module.scss"

const Geri = ({
  data: {
    allProjectYaml: { nodes },
  },
}) => {
  const { banner } = nodes[0]
  return (
    <div className={styles.container}>
      <Image image={banner} />
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

export default Geri

export const query = graphql`
  query {
    allProjectYaml(filter: { title: { eq: "geri" } }) {
      nodes {
        ...basicInfo
      }
    }
  }
`
