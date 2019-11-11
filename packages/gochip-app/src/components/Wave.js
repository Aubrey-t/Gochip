import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Animated } from 'react-native'
import { apx } from '../utils/device'

export default class Wave extends Component<{
  delay: number,
  duration: number,
}> {
  static DURATION = 4 * 1000

  static propTypes = {
    delay: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(0.7),
      width: new Animated.Value(171),
    }

    this.timeout = null
    this.internal = null
  }

  componentDidMount(): void {
    this.timeout = setTimeout(() => {
      this.animated()
      this.internal = setInterval(() => {
        this.animated()
      }, this.props.duration)
    }, this.props.delay)
  }

  componentWillUnmount(): void {
    clearTimeout(this.timeout)
    clearInterval(this.internal)
  }

  animated() {
    this.state.width.setValue(171)
    this.state.opacity.setValue(0.7)
    Animated.timing(this.state.width, {
      toValue: 375,
      duration: this.props.duration,
    }).start()
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: this.props.duration,
    }).start()
  }

  render() {
    return (
      <Animated.View
        style={{
          height: apx(171),
          width: apx(171),
          borderRadius: apx(171 / 2),
          position: 'absolute',
          backgroundColor: '#fff',
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.width.interpolate({
                inputRange: [171, 375],
                outputRange: [1, 375 / 171],
              }),
            },
          ],
        }}
      />
    )
  }
}
