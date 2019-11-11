import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Flex } from '@ant-design/react-native'
import { apx, statusBarHeight } from '../../utils/device'
import { COLORS, STYLES } from '../../theme'
import { strings } from '../../locales/i18n'
import Container from '../../components/Container'
import GlobalNavigation from '../../utils/GlobalNavigation'
import TitleBar from '../../components/TitleBar'

export default class SignUpVerificationCode extends React.Component {
  state = {
    verificationCode: 0,
  }

  componentDidMount(): void {
    console.log(this.state)
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <TitleBar title={strings('login.signUp')} theme="white" />
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
              marginTop: apx(45),
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: '#d8d8d8',
            }}
            justify="between"
          >
            <TextInput
              placeholder={strings('login.verificationCode')}
              style={{ width: apx(250), margin: 0, padding: 0 }}
              onChangeText={verificationCode =>
                this.setState({ verificationCode })
              }
            />
          </Flex>

          <Text
            style={{
              width: apx(285),
              marginTop: apx(11),
              fontSize: apx(13),
              color: COLORS.text384953,
              fontWeight: '400',
            }}
          >
            {strings('login.sendVerificationCode')}177****0000
          </Text>

          <TouchableOpacity
            style={{
              width: apx(285),
              height: apx(49),
              marginTop: apx(60),
              borderRadius: apx(3),
              ...STYLES.center,
              backgroundColor: '#0E90FD',
            }}
            onPress={() => GlobalNavigation.navigate('SetPassword')}
          >
            <Text
              style={{ fontSize: apx(13), color: '#fff', fontWeight: '500' }}
            >
              {strings('login.submit')}
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}
