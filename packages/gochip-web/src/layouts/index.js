// import './index.css'
import React from 'react'
// import { Layout } from 'antd'
import FooterLocal from '../components/Footer'
import Navbar from '../components/Navbar'

// const { Header, Content, Footer } = Layout

function BasicLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <FooterLocal />
    </React.Fragment>
  )
}

export default BasicLayout
