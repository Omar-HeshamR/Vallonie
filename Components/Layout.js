import React from 'react'
import Navbar from './HomeComponents/Navbar'
import Footer from './HomeComponents/Footer'
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import {normal} from "../styles/Themes.js"
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>V A L L O N I E</title>
      <link rel="icon"  type="image/x-icon" href= "/favicon.ico" />
    </Head>

    <GlobalStyles/>
    <ThemeProvider theme = {normal}>

    <Navbar/>
        {children}
    <Footer />

    </ThemeProvider>
    </>
  )
}

export default Layout