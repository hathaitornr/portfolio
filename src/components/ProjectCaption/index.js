import React from "react"
import cx from "classnames"
import styles from "./styles.module.scss"

const ProjectCaption = ({ className, children, summary, path }) => {
  return (
    <figure className={cx(className, styles.container)}>
      {children}
      <a href={`/${path}`} className={cx(styles.projectLink, styles.overlay)}/>
        {/* <div className={styles.summary}>{summary ? summary : "Summary"}</div> */}
        {/* <div className={styles.hiddenButton}>Caption</div> */}
    </figure>
  )
}

ProjectCaption.defaultProps = {
  path: "#",
}

export default ProjectCaption
