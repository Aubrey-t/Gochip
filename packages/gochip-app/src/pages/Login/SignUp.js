import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Flex } from '@ant-design/react-native'
import { apx, statusBarHeight } from '../../utils/device'
import { COLORS, STYLES } from '../../theme'
import { strings } from '../../locales/i18n'
import Container from '../../components/Container'

export default class SignUp extends React.Component {
  state = {
    tabIndex: 0,
    userName: '',
    areaCode: '',
    phoneNumber: '',
    email: '',
  }

  componentDidMount(): void {
    console.log(this.state)
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
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
              width: apx(375),
              height: apx(44),
              marginTop: apx(112 - statusBarHeight),
              paddingHorizontal: apx(110),
            }}
            justify="between"
          >
            <TouchableOpacity onPress={() => this.setState({ tabIndex: 0 })}>
              <Text
                style={{
                  fontSize: apx(18),
                  color:
                    this.state.tabIndex === 0
                      ? COLORS.text384953
                      : COLORS.text9b9b9b,
                  fontWeight: '500',
                }}
              >
                {strings('login.phone')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ tabIndex: 1 })}>
              <Text
                style={{
                  fontSize: apx(18),
                  color:
                    this.state.tabIndex === 1
                      ? COLORS.text384953
                      : COLORS.text9b9b9b,
                  fontWeight: '500',
                }}
              >
                {strings('login.email')}
              </Text>
            </TouchableOpacity>
          </Flex>

          <Flex
            style={{
              width: apx(285),
              height: apx(44),
              marginTop: apx(45),
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: '#d8d8d8',
            }}
            justify="between"
          >
            <TextInput
              placeholder={strings('login.inputUserName')}
              style={{ width: apx(250), margin: 0, padding: 0 }}
              onChangeText={userName => this.setState({ userName })}
            />
          </Flex>

          {this.state.tabIndex === 0 ? (
            <Flex
              style={{
                width: apx(285),
                height: apx(44),
                marginTop: apx(31),
              }}
              justify="between"
            >
              <View
                style={{
                  height: apx(44),
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderColor: '#d8d8d8',
                  ...STYLES.center,
                }}
                justify="between"
              >
                <TextInput
                  defaultValue="+86"
                  keyboardType="phone-pad"
                  style={{
                    width: apx(30),
                    fontSize: apx(13),
                    color: COLORS.text384953,
                    margin: 0,
                    padding: 0,
                  }}
                  onChangeText={areaCode => this.setState({ areaCode })}
                />
              </View>

              <Flex
                style={{
                  flex: 1,
                  height: apx(44),
                  marginLeft: apx(15),
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderColor: '#d8d8d8',
                }}
                justify="between"
              >
                <TextInput
                  placeholder={strings('login.inputCellPhoneNumber')}
                  style={{ width: apx(250), margin: 0, padding: 0 }}
                  keyboardType="phone-pad"
                  onChangeText={phoneNumber => this.setState({ phoneNumber })}
                />
              </Flex>
            </Flex>
          ) : (
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
                placeholder={strings('login.inputEmail')}
                style={{ width: apx(250), margin: 0, padding: 0 }}
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
              />
            </Flex>
          )}

          <TouchableOpacity
            style={{
              width: apx(285),
              height: apx(49),
              marginTop: apx(60),
              borderRadius: apx(3),
              ...STYLES.center,
              backgroundColor: '#0E90FD',
            }}
            onPress={() => {
              this.props.navigation.navigate(
                this.state.tabIndex === 0
                  ? 'SignUpVerificationCode'
                  : 'SignUpVerificationCode'
              )
            }}
          >
            <Text
              style={{ fontSize: apx(13), color: '#fff', fontWeight: '500' }}
            >
              {strings('login.continue')}
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <Flex
          style={{
            height: apx(45),
            width: '100%',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderColor: '#d8d8d8',
          }}
          justify="center"
          align="center"
        >
          <Text style={{ fontSize: apx(13), color: COLORS.text9b9b9b }}>
            {strings('login.haveAccount')}
          </Text>
          <TouchableOpacity
            style={{ marginLeft: apx(5) }}
            onPress={() => this.props.navigation.replace('Login')}
          >
            <Text style={{ fontSize: apx(13), color: '#05CCF5' }}>
              {strings('login.loginLowerCase')}
            </Text>
          </TouchableOpacity>
        </Flex>
      </Container>
    )
  }
}
