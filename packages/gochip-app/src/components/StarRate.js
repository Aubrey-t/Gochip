import PropTypes from 'prop-types'
import React from 'react'
import { Image } from 'react-native'
import { Flex } from '@ant-design/react-native'
import Images from '../images/images'
import { apx } from '../utils/device'

class StarRate extends React.PureComponent {
  static defaultProps = {
    rate: 5,
    style: {},
  }

  static propTypes = {
    rate: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    style: PropTypes.object,
  }

  render() {
    return (
      <Flex
        style={{ width: apx(65 + 26), ...this.props.style }}
        justify="between"
      >
        <Image
          source={this.props.rate >= 1 ? Images.starOn : Images.starOff}
          style={{ width: apx(13), height: apx(13) }}
        />
        <Image
          source={this.props.rate >= 2 ? Images.starOn : Images.starOff}
          style={{ width: apx(13), height: apx(13) }}
        />
        <Image
          source={this.props.rate >= 3 ? Images.starOn : Images.starOff}
          style={{ width: apx(13), height: apx(13) }}
        />
        <Image
          source={this.props.rate >= 4 ? Images.starOn : Images.starOff}
          style={{ width: apx(13), height: apx(13) }}
        />
        <Image
          source={this.props.rate >= 5 ? Images.starOn : Images.starOff}
          style={{ width: apx(13), height: apx(13) }}
        />
      </Flex>
    )
  }
}

export default StarRate
