import PropTypes from 'prop-types'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { STYLES } from '../theme'
import { apx } from '../utils/device'
import SvgIcon from './SvgIcon'

export default class Input extends React.PureComponent {
  static defaultProps = {
    showDropdown: false,
    containerStyle: {},
  }

  static propTypes = {
    showDropdown: PropTypes.bool,
    containerStyle: PropTypes.object,
  }

  render() {
    const { showDropdown, containerStyle, ...textInput } = this.props
    return (
      <Flex style={{ ...STYLES.inputContainer, ...containerStyle }}>
        <TextInput
          {...textInput}
          style={{
            flex: 1,
            height: apx(35),
            fontSize: apx(13),
            ...textInput.style,
          }}
        />
        {showDropdown && (
          <TouchableOpacity style={{ ...STYLES.center, alignSelf: 'stretch' }}>
            <SvgIcon icon="down_icon_circle" size={apx(15)} />
          </TouchableOpacity>
        )}
      </Flex>
    )
  }
}
