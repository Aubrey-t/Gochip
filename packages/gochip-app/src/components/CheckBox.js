import PropTypes from 'prop-types'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { apx } from '../utils/device'

export default class CheckBox extends React.Component {
  static defaultProps = {
    onChange: () => null,
  }

  static propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
  }

  state = {}

  render = () => (
    <TouchableOpacity
      onPress={() => {
        this.props.onChange()
      }}
    >
      <Image
        source={
          this.props.checked
            ? require('../images/xz_icon_selected.png.png')
            : require('../images/xz_icon_default.png.png')
        }
        style={{
          width: apx(13),
          height: apx(13),
        }}
      />
    </TouchableOpacity>
  )
}
