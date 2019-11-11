import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Flex } from '@ant-design/react-native'
import { apx, statusBarHeight } from '../../utils/device'
import { COLORS, STYLES } from '../../theme'
import { strings } from '../../locales/i18n'
import SvgIcon from '../../components/SvgIcon'
import Container from '../../components/Container'
import GlobalNavigation from '../../utils/GlobalNavigation'

export default class Login extends React.Component {
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
        <KeyboardAwareScrollView
          contentContainerStyle={{
            paddingTop: statusBarHeight,
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: apx(45),
          }}
        >
          <Image
            source={require('../../images/Login/LOGO_small.png')}
            style={{
              width: apx(81),
              height: apx(22),
              alignSelf: 'flex-start',
              marginTop: apx(50 - statusBarHeight),
            }}
          />

          <Flex
            style={{
              width: apx(285),
              height: apx(44),
              marginTop: apx(105),
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: '#d8d8d8',
            }}
            justify="between"
          >
            <TextInput
              placeholder={strings('login.userName')}
              style={{ width: apx(250), margin: 0, padding: 0 }}
              onChangeText={userName => this.setState({ userName })}
            />
            <SvgIcon icon="login_account" size={apx(18)} />
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
              placeholder={strings('login.password')}
              style={{ width: apx(250), margin: 0, padding: 0 }}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
            <SvgIcon icon="login_eye" size={apx(18)} />
          </Flex>
          <TouchableOpacity
            style={{
              marginTop: apx(6),
              alignSelf: 'flex-end',
            }}
          >
            <Text
              style={{
                fontSize: apx(13),
                color: COLORS.text384953,
                fontWeight: '400',
              }}
            >
              {strings('login.forgetPassword')}
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
            onPress={() => GlobalNavigation.reset('Tab')}
          >
            <Text
              style={{ fontSize: apx(13), color: '#fff', fontWeight: '500' }}
            >
              {strings('login.login')}
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
            {strings('login.noAccount')}
          </Text>
          <TouchableOpacity
            style={{ marginLeft: apx(5) }}
            onPress={() => this.props.navigation.replace('SignUp')}
          >
            <Text style={{ fontSize: apx(13), color: '#05CCF5' }}>
              {strings('login.signUpLowerCase')}
            </Text>
          </TouchableOpacity>
        </Flex>
      </Container>
    )
  }
}
