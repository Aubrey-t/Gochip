import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
// import 'antd/dist/antd.css';
import { userStories } from '../mock/data'

class Userstories extends Component {
  state = {
    Stories: [],
  }

  componentDidMount = () => {
    this.setStories()
  }

  setStories = () => {
    let tempStories = []
    userStories.forEach(story => {
      const singleStory = { ...story }
      tempStories = [...tempStories, singleStory]
    })
    this.setState(() => ({ Stories: tempStories }))
  }

  render() {
    return (
      <React.Fragment>
        <Row className="userStoriesHeading">
          <Col span={20}>See what GoChip users say</Col>
        </Row>
        <Row className="userStoryRow">
          {this.state.Stories.map(story => (
            <Col span={8} className="userStoryCardContainer">
              <img
                src={story.img}
                alt="TomPumford"
                className="UserStoryImage"
              />
              <div className="generalTeamMemberTitle" key={story.id}>
                <p key={story.id} className="userStoryTitle">
                  {story.title}
                </p>
                <p className="userStoryDesc">{story.desc}</p>
                <p className="userStoryDate" key={story.id}>
                  {story.date}
                </p>

                <p className="userStoryReadMore" key={story.id}>
                  <Link to="/">Read more</Link>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </React.Fragment>
    )
  }
}

export default Userstories
