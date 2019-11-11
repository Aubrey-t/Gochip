import React from 'react'
import { View } from 'react-native'
import { apx, isIPhoneX } from '../utils/device'

function Container(props) {
  return (
    <View
      style={{
        flex: 1,
        marginBottom: isIPhoneX() ? apx(30) : 0,
        backgroundColor: '#F1F8FF',
        ...props.style,
      }}
    >
      {props.children}
    </View>
  )
}

export default Container
