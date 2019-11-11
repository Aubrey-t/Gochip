import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { apx, statusBarHeight } from '../../utils/device'
import { COLORS, STYLES } from '../../theme'
import { strings } from '../../locales/i18n'
import GlobalNavigation from '../../utils/GlobalNavigation'

export default function LoginSignUp() {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        paddingTop: statusBarHeight,
        alignItems: 'center',
        paddingBottom: apx(60),
      }}
    >
      <Image
        source={require('../../images/Login/LOGO.png')}
        style={{
          width: apx(109),
          height: apx(29),
          marginTop: apx(50 - statusBarHeight),
        }}
      />
      <View
        style={{
          width: apx(220),
          height: apx(220),
          ...STYLES.center,
          marginTop: apx(50),
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#E8F5FF',
          borderRadius: apx(220 / 2),
        }}
      >
        <Image
          source={require('../../images/Mock/login_avatar.png')}
          style={{
            width: apx(157),
            height: apx(157),
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#E8F5FF',
            borderRadius: apx(157 / 2),
          }}
        />
      </View>

      <Text
        style={{
          fontSize: apx(23),
          fontWeight: '600',
          color: COLORS.text384953,
          marginTop: apx(35),
        }}
      >
        {strings('login.welcome')}
      </Text>
      <Text
        style={{
          fontSize: apx(18),
          fontWeight: '500',
          color: '#BFBFBF',
          marginTop: apx(10),
        }}
      >
        Last login on Friday
      </Text>

      <TouchableOpacity
        style={{
          width: apx(285),
          height: apx(49),
          marginTop: apx(48),
          borderRadius: apx(3),
          ...STYLES.center,
          backgroundColor: '#0E90FD',
        }}
        onPress={() => GlobalNavigation.navigate('Login')}
      >
        <Text style={{ fontSize: apx(13), color: '#fff', fontWeight: '500' }}>
          {strings('login.login')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: apx(285),
          height: apx(49),
          marginTop: apx(18),
          borderRadius: apx(3),
          ...STYLES.center,
          backgroundColor: '#05CCF5',

          shadowRadius: apx(50),
          shadowColor: '#62E1FB',
          shadowOpacity: 1,
          shadowOffset: { height: apx(10) },
        }}
        onPress={() => GlobalNavigation.navigate('SignUp')}
      >
        <Text style={{ fontSize: apx(13), color: '#fff', fontWeight: '500' }}>
          {strings('login.signUp')}
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  )
}
