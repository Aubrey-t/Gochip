import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { strings } from '../../locales/i18n'
import { COLORS, STYLES } from '../../theme'
import { apx } from '../../utils/device'
import TitleBar from '../../components/TitleBar'
import Container from '../../components/Container'
import CheckBox from '../../components/CheckBox'
import Input from '../../components/Input'

export default class Donate extends React.Component {
  state = {
    tabIndex: 0,
  }

  render = () => (
    <Container style={{ flex: 1 }}>
      <TitleBar title={strings('services.donate')} />
      {this.renderHeader()}
      <KeyboardAwareScrollView>
        <Flex
          style={{
            paddingHorizontal: apx(20),
            marginTop: apx(10),
            height: apx(81),
            backgroundColor: '#fff',
          }}
          align="center"
        >
          <Text
            style={{
              fontSize: apx(18),
              color: COLORS.text384953,
              fontWeight: '500',
              marginRight: apx(10),
            }}
          >
            {strings('services.giftAmount')}
          </Text>

          <Input containerStyle={{ flex: 1 }} showDropdown placeholder="$25" />
        </Flex>
        <View
          style={{
            padding: apx(20),
            marginTop: apx(10),
            backgroundColor: '#fff',
          }}
        >
          <Text
            style={{
              fontSize: apx(18),
              color: COLORS.text384953,
              fontWeight: '500',
              marginBottom: apx(20),
            }}
          >
            {strings('services.billing')}
          </Text>

          <Flex wrap="wrap" justify="between">
            {[
              { label: strings('services.firstName'), showDropdown: false },
              { label: strings('services.lastName'), showDropdown: false },
              { label: strings('services.address'), showDropdown: false },
              { label: strings('services.city'), showDropdown: false },
              { label: strings('services.state'), showDropdown: true },
              { label: strings('services.zip'), showDropdown: false },
              { label: strings('services.country'), showDropdown: false },
              { label: strings('services.email'), showDropdown: false },
            ].map((item, index) => (
              <View
                key={index.toString()}
                style={{ width: apx(160), marginBottom: apx(23) }}
              >
                <Text style={{ ...styles.label }}>{item.label}</Text>
                <Input
                  placeholder={item.label}
                  showDropdown={item.showDropdown}
                />
              </View>
            ))}
          </Flex>

          <View>
            <Flex align="start" style={{ marginTop: apx(7) }}>
              <CheckBox checked />
              <Text
                style={{
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  marginLeft: apx(11),
                }}
              >
                {strings('services.readEmail')}
              </Text>
            </Flex>
            <Flex align="start" style={{ marginTop: apx(20) }}>
              <CheckBox checked />
              <Text
                style={{
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  marginLeft: apx(11),
                }}
              >
                {strings('services.insteadOfMail')}
              </Text>
            </Flex>
          </View>
        </View>

        <View
          style={{
            padding: apx(20),
            marginTop: apx(10),
            backgroundColor: '#fff',
          }}
        >
          <Text
            style={{
              fontSize: apx(18),
              color: COLORS.text384953,
              fontWeight: '500',
              marginBottom: apx(13),
            }}
          >
            {strings('services.payment')}
          </Text>

          <View>
            <Input
              defaultValue="3232 **** **** 4324"
              editable={false}
              showDropdown
              containerStyle={{ marginBottom: apx(23) }}
            />
            {[
              {
                label: strings('services.cardholderName'),
                showDropdown: false,
              },
              { label: strings('services.cardNumber'), showDropdown: false },
              { label: strings('services.expiryDate'), showDropdown: false },
            ].map((item, index) => (
              <View key={index.toString()} style={{ marginBottom: apx(23) }}>
                <Text style={{ ...styles.label }}>{item.label}</Text>
                <Input />
              </View>
            ))}
          </View>

          <Flex justify="between" style={{ marginBottom: apx(80) }}>
            <TouchableOpacity
              style={{
                width: apx(150),
                height: apx(50),
                ...STYLES.center,
                borderRadius: apx(25),
                backgroundColor: '#0E90FD',
              }}
            >
              <Text style={{ color: '#fff', fontSize: apx(13) }}>
                {strings('confirm')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: apx(150),
                height: apx(50),
                ...STYLES.center,
                borderRadius: apx(25),
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#979797',
              }}
            >
              <Text style={{ color: COLORS.text384953, fontSize: apx(13) }}>
                {strings('cancel')}
              </Text>
            </TouchableOpacity>
          </Flex>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  )

  renderHeader = () => (
    <Flex style={{ width: apx(375), backgroundColor: '#fff' }}>
      {[strings('services.oneTime'), strings('services.monthly')].map(
        (item, index) => (
          <TouchableOpacity
            style={{
              ...STYLES.center,
              height: apx(44),
              flex: 1,
            }}
            onPress={() => this.setState({ tabIndex: index })}
          >
            <Text
              style={{
                fontSize: apx(13),
                color:
                  index === this.state.tabIndex
                    ? COLORS.text384953
                    : COLORS.text9b9b9b,
                fontWeight: '500',
              }}
            >
              {item}
            </Text>
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                justifyContent: 'flex-end',
              }}
            >
              <View
                style={{
                  width: apx(30),
                  height: apx(1),
                  justifySelf: 'flex-end',
                  backgroundColor:
                    index === this.state.tabIndex ? '#0E90FD' : 'transparent',
                }}
              />
            </View>
          </TouchableOpacity>
        )
      )}
    </Flex>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: apx(13),
    color: COLORS.text384953,
    fontWeight: '500',
    marginBottom: apx(13),
  },
})
