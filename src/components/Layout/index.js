import React from "react"
import { Header, Footer } from ".."
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <br></br>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
