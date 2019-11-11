import React from 'react'
// import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import { FaMicrochip, FaPaw, FaLock } from 'react-icons/fa'
import { MdGpsNotFixed } from 'react-icons/md'
import 'antd/dist/antd.css'

import UserStories from './components/Userstories'
import Subscriptions from './components/Subscriptions'
import Team from './components/Team'
import FAQ from './components/FrequentlyAsked'

import background from '../../assets/img/background.png'
import AppStore from '../../assets/img/AppStore.png'
import GooglePlay from '../../assets/img/GooglePlay.png'
import mobileAppLink from '../../assets/img/mobileAppLink.png'
import mobileImage from '../../assets/img/mobileImage.png'
import mobileImageInApp from '../../assets/img/mobileImageInApp.png'
import logo from '../../assets/img/teamLogo.png'

function MainPage() {
  return (
    <React.Fragment>
      <Row>
        <Col>
          {' '}
          <img
            src={background}
            className="MainPageBackGroundImage"
            alt="product"
          />
          <div className="BackGroungImageContent">
            <p id="home" className="BackGroungImageContentHeading">
              GoChip: Instant Connection, Always Found
            </p>
            <p className="BackGroungImageContentText">
              Cross-platform mobile services that help your pets everyday.
            </p>
            <Button type="primary">Get Started</Button>
            <Button className="BackGroungImageContentButton2" type="primary">
              Learn More
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="BelowMainImageDescription">
        <Col span={6} offset={4}>
          <div>
            <FaMicrochip className="BelowMainImageIcons" />
          </div>
          <div className="BelowMainImageDescriptionLabel">Free Chip</div>
          <div className="BelowMainImageDescriptionText">
            A free smart chip for all
          </div>
        </Col>
        <Col span={6}>
          {' '}
          <div>
            <FaLock className="BelowMainImageIcons" />
          </div>
          <div className="BelowMainImageDescriptionLabel">
            Privacy Protection
          </div>
          <div className="BelowMainImageDescriptionText">
            Pet Information is protected
          </div>
        </Col>
        <Col span={6}>
          {' '}
          <div>
            <FaPaw className="BelowMainImageIcons" />
          </div>
          <div className="BelowMainImageDescriptionLabel">Pet Community</div>
          <div className="BelowMainImageDescriptionText">
            Access for pet services and community
          </div>
        </Col>
      </Row>

      <Row>
        <Col id="product" offset={8} className="GoChipDescHeading">
          {' '}
          GoChip APP : Designed for secure and smart pet chipping
        </Col>
      </Row>
      {/* <Row>
          <Col offset={6} span={13} className="GoChipDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Col>
        </Row> */}

      <Row>
        <Col span={6} offset={4}>
          {' '}
          <img
            src={mobileImage}
            className="AppScreenShotGroundImage"
            alt="product"
          />
        </Col>

        <Col span={6} offset={3} className="mobileAppDescContainer">
          <div>
            <FaMicrochip className="mobileAppDescIcons" />
          </div>
          <div className="FreeInjectionHeader">Free to inject a smart chip</div>
          <div className="mobileAppDescText">
            Easily scan your pet with smart NFC technology to view the medical
            history, travel records, licenses and more.
          </div>
          <div>
            <MdGpsNotFixed className="mobileAppDescIcons" />
          </div>
          <div className="FreeInjectionHeader">Easy to find your</div>

          <div className="mobileAppDescText">
            With the latest chip and NFC technology you’re able to communicate
            between your phone and your pet.
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={10} offset={4} className="mobileAppDescContainer">
          <div className="FreeInjectionHeader">Easy to get pet services</div>
          <div className="mobileAppDescText">
            We want to build a strong community that loves pets as much as we
            do. We feel pet owners have stories to tell and experiences to share
            and we have created this with our services section. Here you can
            easily find all the services you need for you and your pet.
          </div>

          <div className="FreeInjectionHeader">Join the pet community</div>
          <div className="mobileAppDescText">
            All of our services help the community become stronger. Easily find
            top rated veterinarians in your area rated and loved by the GoChip
            community. If your planning a vacation soon you can find pet owners
            near you who would love to take care of your furry pets while you
            enjoy your vacation. Looking for someone to groom or walk your dog?
            Look no further than our community built Pet Grooming and Pet
            Walking services. If you have enough space around the house to help
            a homeless pet join your family this service can easily allow you to
            adopt a new family member. If you don’t have the space, don’t worry
            you can donate to your nearest adoption clinic.
          </div>
        </Col>

        <Col span={6} offset={2}>
          {' '}
          <img
            src={mobileImageInApp}
            className="AppScreenShotGroundImage"
            alt="product"
          />
        </Col>
      </Row>

      <Row className="RecommendationsRow">
        {/* <div className="Reccomendations">Recommended by the department</div> */}
        <div className="Reccomendations">
          Recommended by the department Coming Soon
        </div>
        {/* <Col offset={6} span={6}>
          <div>
            <MdAccountBalance className="ReccomendationIcons" />
          </div>
          <div className="ReccomendationsText">Canada XX Department</div>
        </Col>
        <Col span={6}>
          <div>
            <MdAccountBalance className="ReccomendationIcons" />
          </div>
          <div className="ReccomendationsText">Canada XX Department</div>
        </Col>
        <Col span={6}>
          <div>
            <MdAccountBalance className="ReccomendationIcons" />
          </div>
          <div className="ReccomendationsText">Canada XX Department</div>
        </Col> */}
        <Col offset={10}>
          <img
            src={logo}
            alt="TomPumford"
            className="teamLogoReccomandations"
          />
        </Col>
      </Row>

      <Row>
        <UserStories />{' '}
      </Row>
      <Row>
        <Col>
          <img
            src={mobileAppLink}
            alt="product"
            className="mobileAppLinkBackGroundImage"
          />
          <div className="AppDownloadImageContent">
            Get the new mobile app today.
            <img src={AppStore} alt="product" className="AppStoreImage" />
            <img src={GooglePlay} alt="product" className="GooglePlayImage" />
          </div>
        </Col>
      </Row>
      <Subscriptions />
      <Team />
      <FAQ />
    </React.Fragment>
  )
}

export default MainPage
