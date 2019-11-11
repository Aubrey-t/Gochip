import PropTypes from 'prop-types'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { apx } from '../utils/device'
import SvgIcon from './SvgIcon'

export default class Radio extends React.Component {
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
      <SvgIcon
        icon={
          this.props.checked
            ? 'dian_icon_selected.png'
            : 'dian_icon_default.png'
        }
        size={apx(18)}
      />
    </TouchableOpacity>
  )
}
