import { Row, Col } from 'antd'
// import 'antd/dist/antd.css';

function Subscriptions() {
  return (
    <>
      <Row>
        <Col id="pricing" className="subscriptionHeading" span={6} offset={9}>
          Choose the best subscription for you
        </Col>
      </Row>
      {/* <Row>
        <Col className="subscriptionHeadingText" span={8} offset={8}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Col>
      </Row> */}

      <Row>
        <Col span={6} className="subscriptionPackageContainer">
          <div className="SubPackageHeading">Basic</div>
          <div className="SubPackageAmount">$0</div>
          <div className="SubpackageDesc">
            Chip injection Basic profile Pet services Community
          </div>
        </Col>

        <Col
          id="standard"
          span={6}
          className="subscriptionPackageContainerStandard"
        >
          <div className="SubPackageHeading">Standard</div>
          <div className="SubPackageAmount">$39</div>
          <div className="SubPackageTrialStandard">
            after the 14 days free trial
          </div>
          <div className="SubpackageDescStandard">
            Chip injection Basic profile Medical history Vaccine update Pet
            sercices Community
          </div>
        </Col>
        <Col span={6} className="subscriptionPackageContainer">
          <div className="SubPackageHeading">Pro</div>
          <div className="SubPackageAmount">$49</div>
          <div className="SubPackageTrial">after the 14 days free trial</div>
          <div className="SubpackageDesc">
            Chip injection and changes Basic profile Medical history Vaccine
            update Pet services Community Support
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Subscriptions
