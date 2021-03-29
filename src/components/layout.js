import * as React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { GlobalStyle } from "./styles/globalstyles"

const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle />
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout


