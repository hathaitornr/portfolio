import React, { useState } from "react"
import { Link } from "gatsby"
import cx from "classnames"
import styles from "./styles.module.scss"

const Header = () => {
  const [hide, setHide] = useState(true)
  const toggle = () => {
    setHide(!hide)
  }
  return (
    <div id="header" className={styles.header}>
      <div id="container" className={styles.container}>
        <div id="header-items" className={styles.items}>
          <div id="toggle" className={styles.toggle} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="headline" className={styles.infoItem}>
            <p className={styles.headline}>Mew Rojnirun</p>
          </div>
        </div>
        <ul id="nav-links" className={cx(styles.navlinks, styles.navDesktop, styles.desktopShow)}>
          <li>
            <Link to="/">
              <button className={cx(styles.navlink, styles.navlinkDesktop)}>About Me</button>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <button className={cx(styles.navlink, styles.navlinkDesktop)}>UX Research</button>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <button className={cx(styles.navlink, styles.navlinkDesktop)}>Side Projects</button>
            </Link>
          </li>
        </ul>
        <ul
          id="nav-links-mobile"
          className={cx(styles.navlinks, styles.navMobile, styles.mobileShow, {
            [styles.active]: !hide,
          })}>
          <li>
            <Link to="/">
              <button className={cx(styles.navlink, styles.navlinkMobile)}>About Me</button>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <button className={cx(styles.navlink, styles.navlinkMobile)}>UX Research</button>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <button className={cx(styles.navlink, styles.navlinkMobile)}>Side Projects</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
