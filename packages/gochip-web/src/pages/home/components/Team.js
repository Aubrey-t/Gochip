import { Row, Col } from 'antd'

import logo from '../../../assets/img/teamLogo.png'

function Team() {
  return (
    <>
      <Row className="TeamMainContainer">
        <Row>
          <Col id="team" className="GoChipHeading" span={6} offset={9}>
            GoChip Team
          </Col>
        </Row>
        <Row>
          <Col className="subscriptionHeadingText" span={8} offset={8}>
            The GoChip team is made up of some of the best and brightest minds.
            Firstly we’re all pet lovers and secondly we want to share our ideas
            with the community.
          </Col>
        </Row>

        {/* <Row>
          <Col span={6} className="TeamContainer">
            <img src={teamPhotoImg} alt="TomPumford" className="TeamImage" />
          </Col>

          <Col span={6} className="TeamContainer">
            <img src={teamPhotoImg} alt="TomPumford" className="TeamImage" />
          </Col>
          <Col span={6} className="TeamContainer">
            <img src={teamPhotoImg} alt="TomPumford" className="TeamImage" />
          </Col>
        </Row> */}
        <Row>
          <Col offset={10}>
            <img src={logo} alt="TomPumford" className="teamLogo" />
          </Col>
        </Row>

        <Row>
          <Col span={24} className="TeamComingSoon">
            Coming Soon
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default Team
