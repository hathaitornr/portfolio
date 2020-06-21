import React from "react"
import styles from "./styles.module.scss"

const Section = ({ title, sectionStyle, children }) => (
  <div id={title} className={styles[sectionStyle === "main" ? "container" : "subContainer"]}>
    <h1 className={styles[sectionStyle === "sub" ? "subHeading" : "heading"]}>{title}</h1>
    {children}
  </div>
)

Section.defaultProps = {
  titleSize: "sectionHeading",
  sectionStyle: "main",
}

export default Section
