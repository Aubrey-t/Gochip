import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SvgUri from 'react-native-svg-uri'
import svgs from '../svgs/svgs' // To get svgs.js file, please run npm script `npm run getSvg` first

export default class SvgIcon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
  }

  static defaultProps = {
    style: {},
    size: null,
    width: 0,
    height: 0,
  }

  render() {
    const svgXmlData = svgs[this.props.icon]

    if (!svgXmlData) {
      const errMsg = `Miss "${this.props.icon}" svg file`
      throw new Error(errMsg)
    }

    return (
      <SvgUri
        width={this.props.size ? this.props.size : this.props.width}
        height={this.props.size ? this.props.size : this.props.height}
        svgXmlData={svgXmlData}
        style={this.props.style}
      />
    )
  }
}
