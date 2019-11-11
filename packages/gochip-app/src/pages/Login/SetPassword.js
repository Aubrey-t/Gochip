import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Flex } from '@ant-design/react-native'
import { apx, statusBarHeight } from '../../utils/device'
import { COLORS, STYLES } from '../../theme'
import { strings } from '../../locales/i18n'
import SvgIcon from '../../components/SvgIcon'
import Container from '../../components/Container'
import GlobalNavigation from '../../utils/GlobalNavigation'
import TitleBar from '../../components/TitleBar'

export default class SetPassword extends React.Component {
  state = {
    userName: '',
    password: '',
  }

  componentDidMount(): void {
    console.log(this.state.userName)
    console.log(this.state.password)
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <TitleBar title={strings('login.setPassword')} theme="white" />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            paddingTop: statusBarHeight,
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: apx(45),
          }}
        >
          <Flex
            style={{
              width: apx(285),
              height: apx(44),
              marginTop: apx(50 - statusBarHeight),
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: '#d8d8d8',
            }}
            justify="between"
          >
            <TextInput
              placeholder={strings('login.inputPassword')}
              style={{ width: apx(250), margin: 0, padding: 0 }}
              onChangeText={userName => this.setState({ userName })}
            />
          </Flex>
          <Flex
            style={{
              width: apx(285),
              height: apx(44),
              marginTop: apx(31),
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: '#d8d8d8',
            }}
            justify="between"
          >
            <TextInput
              placeholder={strings('login.confirmPassword')}
              style={{ width: apx(250), margin: 0, padding: 0 }}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
            <SvgIcon icon="login_eye" size={apx(18)} />
          </Flex>
          <TouchableOpacity
            style={{
              marginTop: apx(6),
              alignSelf: 'stretch',
            }}
          >
            <Text
              style={{
                fontSize: apx(13),
                lineHeight: parseInt(apx(18)),
                color: COLORS.text384953,
                fontWeight: '400',
              }}
            >
              {strings('login.passwordRule')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: apx(285),
              height: apx(49),
              marginTop: apx(36),
              borderRadius: apx(3),
              ...STYLES.center,
              backgroundColor: '#0E90FD',
            }}
            onPress={() => GlobalNavigation.reset('LoginSignUp')}
          >
            <Text
              style={{ fontSize: apx(13), color: '#fff', fontWeight: '500' }}
            >
              {strings('finish')}
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}
