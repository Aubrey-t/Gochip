// import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'

import logoImg from '../assets/img/logo.png'

function Navbar() {
  return (
    <>
      <Row type="flex" className="NavbarContent">
        <Col offset={1} span={3} className="NavBarAtributes">
          <img
            src={logoImg}
            style={{
              height: '74px',
              marginTop: '-20px',
              marginLeft: '-50px',
            }}
            className="img-fluid"
            alt="product"
          />
        </Col>

        <Col offset={5} span={3} className="NavBarAtributes">
          <Scrollchor to="#home" className="nav-link">
            Home
          </Scrollchor>
        </Col>

        <Col span={3} className="NavBarAtributes">
          <Scrollchor to="#product" className="nav-link">
            Product
          </Scrollchor>
        </Col>
        <Col span={3} className="NavBarAtributes">
          <Scrollchor to="#pricing" className="nav-link">
            Pricing
          </Scrollchor>
        </Col>
        <Col span={3} className="NavBarAtributes">
          <Scrollchor to="#team" className="nav-link">
            Team
          </Scrollchor>
        </Col>
        <Col span={3} className="NavBarAtributes">
          <Scrollchor to="#contact" className="nav-link">
            Contact
          </Scrollchor>
        </Col>
      </Row>
    </>
  )
}

export default Navbar
