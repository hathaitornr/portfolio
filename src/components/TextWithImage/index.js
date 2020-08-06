import React from "react"
import cx from "classnames"
import styles from "./styles.module.scss"
import { Image } from ".."

const TextWithImage = ({ children, image, reverse }) => {
  return (
    <div
      className={cx(styles.container, {
        [styles.reverse]: reverse,
      })}>
      <div className={styles.contentSection}>{children}</div>
      <div className={styles.imgSection}>
        <Image image={image} alt="test" />
      </div>
    </div>
  )
}

export default TextWithImage

TextWithImage.defaultProps = {
  reverse: false,
}
