import { Row, Col } from 'antd'
// import 'antd/dist/antd.css';

function FrequentlyAsked() {
  return (
    <>
      <Row className="FaqMainContainer">
        <Row>
          <Col className="FaqMainHeading" span={6} offset={9}>
            Frequently Asked Questions
          </Col>
        </Row>

        <Row>
          <Col className="subscriptionHeadingText" span={8} offset={4}>
            <div>
              <p className="FaqHeading">
                {' '}
                Where do I download the GoChip application?
              </p>
              {/* <p className="FaqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>

            <div>
              <p className="FaqHeading">
                {' '}
                I’m having some issues scanning my pets chip, is there any
                information on this?
              </p>
              {/* <p className="FaqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>

            <div>
              <p className="FaqHeading">
                {' '}
                I own a Vet shop and want to list my business on GoChip, how can
                I do this?
              </p>
              {/* <p className="FaqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>
          </Col>

          <Col className="subscriptionHeadingText" span={8} offset={3}>
            <div>
              <p className="FaqHeading"> How can I add my friends on GoChip?</p>
              {/* <p className="FaqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>

            <div>
              <p className="FaqHeading"> Help! My pet is lost what do I do?</p>
              {/* <p className="FaqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>

            <div>
              <p className="FaqHeading">
                {' '}
                I live in Spain and want to use GoChip, is it possible?
              </p>
              {/* <p className="FaqText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default FrequentlyAsked
