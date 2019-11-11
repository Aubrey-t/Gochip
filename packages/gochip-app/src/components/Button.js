import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { apx } from '../utils/device'
import { STYLES } from '../theme'

export default class Button extends React.Component {
  static defaultProps = {
    onPress: () => {},
    theme: 'blue',
  }

  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['blue', 'white']),
  }

  state = {}

  render = () => {
    const backgroundColor = this.props.theme === 'white' ? '#fff' : '#0E90FD'
    const textColor = this.props.theme === 'white' ? '#0E90FD' : '#fff'
    return (
      <TouchableOpacity
        style={{
          width: apx(60),
          height: apx(28),
          borderRadius: apx(5),
          backgroundColor,
          borderWidth: apx(1),
          borderColor: '#0E90FD',
          ...STYLES.center,
        }}
        onPress={() => {
          this.props.onPress()
        }}
      >
        <Text
          style={{
            fontSize: apx(11),
            color: textColor,
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
