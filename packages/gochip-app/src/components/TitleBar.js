import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { withNavigation } from 'react-navigation'
import { apx, statusBarHeight } from '../utils/device'
import { COLORS, STYLES } from '../theme'
import GlobalNavigation from '../utils/GlobalNavigation'
import SvgIcon from './SvgIcon'

class TitleBar extends React.PureComponent {
  static defaultProps = {
    renderLeft: theme => (
      <TouchableOpacity
        style={{
          height: apx(44),
          paddingHorizontal: apx(16),
          ...STYLES.center,
        }}
        onPress={() => {
          GlobalNavigation.goBack()
        }}
      >
        <SvgIcon
          icon={
            theme === 'default'
              ? 'back_icon_white.png'
              : 'back_icon_default.png'
          }
          size={apx(18)}
        />
      </TouchableOpacity>
    ),
    renderRight: () => null,
    title: `Miss a title`,
    theme: 'default',
  }

  static propTypes = {
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func,
    title: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'white']),
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.theme === 'default' ? '#0E90FD' : '#fff',
          paddingTop: statusBarHeight,
        }}
      >
        <Flex style={{ height: apx(44) }} justify="center">
          <View
            style={{
              position: 'absolute',
              left: 0,
            }}
          >
            {this.props.renderLeft(this.props.theme)}
          </View>

          <Text
            style={{
              fontSize: apx(18),
              color:
                this.props.theme === 'default' ? '#fff' : COLORS.text384953,
            }}
          >
            {this.props.title}
          </Text>

          <View
            style={{
              position: 'absolute',
              right: 0,
            }}
          >
            {this.props.renderRight()}
          </View>
        </Flex>
      </View>
    )
  }
}

export default withNavigation(TitleBar)
