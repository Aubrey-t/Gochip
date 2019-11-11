import { Row, Col, Layout } from 'antd'
import 'antd/dist/antd.css'

import logoImg from '../assets/img/logo.png'

const { Footer } = Layout
function ULFooter() {
  return (
    <>
      <Row style={{ marginTop: '40px' }}>
        <Row id="contact" style={{ height: '320px' }}>
          <Col span={5}>
            <img src={logoImg} alt="TomPumford" className="img-fluid" />
            <p
              style={{
                marginLeft: '20px',
                fontSize: '14px',
                fontFamily: 'Robot',
              }}
            >
              The smartest chip for pets
            </p>
          </Col>

          <Col span={4} offset={6}>
            <div style={{ marginBottom: '20px' }}>Home #1</div>
            <div style={{ marginBottom: '20px' }}>Home #1</div>
            <div style={{ marginBottom: '20px' }}>Home #1</div>
          </Col>

          <Col span={4}>
            <div style={{ marginBottom: '20px' }}>About #1</div>
            <div style={{ marginBottom: '20px' }}>About #1</div>
            <div style={{ marginBottom: '20px' }}>About #1</div>
            <div style={{ marginBottom: '20px' }}>About #1</div>
          </Col>

          <Col span={4}>
            <div style={{ marginBottom: '20px' }}>Blog</div>
            <div style={{ marginBottom: '20px' }}>FAQ</div>
            <div style={{ marginBottom: '20px' }}>Contact</div>
          </Col>
        </Row>

        <Row justify="space-between">
          <Footer className="copyRightRow">
            <Row>
              <Col span={6} style={{ color: 'white' }}>
                Copyright 2019.All rights reserved.
              </Col>{' '}
              <Col
                span={10}
                offset={6}
                style={{ color: 'white', marginRight: '100px' }}
              >
                China: +86 2 33 44 55 66 Canada: +11 222 333 444
                support@shark.com
              </Col>
            </Row>
          </Footer>
        </Row>
      </Row>
    </>
  )
}

export default ULFooter
