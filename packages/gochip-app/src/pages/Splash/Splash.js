import React from 'react'
import { Image, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../../images/images'
import { apx } from '../../utils/device'

let timer = null

export default class Splash extends React.Component {
  componentDidMount(): void {
    timer = setTimeout(() => {
      this.props.navigation.replace('LoginSignUp')
    }, 3000)
  }

  componentWillUnmount(): void {
    clearTimeout(timer)
  }

  render() {
    return (
      <LinearGradient
        colors={['#00CCFF', '#0E90FD']}
        style={styles.linearGradient}
      >
        <Image
          source={Images.logo}
          style={{
            width: apx(180),
            height: apx(49),
            marginTop: apx(190),
            padding: apx(5),
          }}
        />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
})
