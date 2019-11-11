import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { WingBlank, List, InputItem } from '@ant-design/react-native'
import NfcManager, { Ndef } from 'react-native-nfc-manager'
import RNPickerSelect from 'react-native-picker-select'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Container from '../../components/Container'
import { STYLES } from '../../theme'
import { apx } from '../../utils/device'
import NfcModel from '../../models/NfcModel'
import TitleBar from '../../components/TitleBar'

import ItemDetail from './ItemDetail'
import CustomSteps from './CustomSteps'

const styles = StyleSheet.create({
  panel: { backgroundColor: '#fff', marginTop: 10 },
  InputBorder: {
    borderWidth: 0.5,
    borderColor: '#BFBFBF',
    borderRadius: apx(4),
    margin: 15,
  },
  inputTitle: { color: '#384953', fontSize: apx(13), fontWeight: '500' },
  cusButton: {
    marginLeft: apx(10),
    marginRight: apx(10),
    width: apx(150),
    height: 50,
    borderRadius: 25,
    ...STYLES.center,
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: apx(16),
    paddingVertical: apx(12),
    paddingHorizontal: apx(10),
    borderWidth: apx(1),
    borderRadius: apx(1),
    borderColor: 'rgba(191,191,191,1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: apx(30), // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: apx(16),
    paddingHorizontal: apx(10),
    paddingVertical: apx(8),
    borderWidth: apx(0.5),
    borderRadius: apx(1),
    borderColor: 'rgba(191,191,191,1)',
    paddingRight: apx(30), // to ensure the text is never behind the icon
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class RenewLicense extends React.Component {
  state = {
    isWriting: false,

    nfc: NfcModel,
    value: null,
    steps: [
      { title: 'Pet Information', description: 'This is description' },
      { title: 'Billing', description: 'This is description' },
      { title: 'Payment', description: 'This is description' },
    ],
    currentStep: 0,
    cards: [
      {
        label: `3232**** ****3241`,
        value: '1',
      },
      {
        label: `3232**** ****3242`,
        value: '2',
      },
      {
        label: `3232**** ****3243`,
        value: '3',
      },
    ],
  }

  inputRefs = {
    firstTextInput: null,
    value: null,
    favSport1: null,
    lastTextInput: null,
    favSport5: null,
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      this._startDetection()
    }
  }

  componentWillUnmount() {
    this._stopDetection()
  }

  _onTagDiscovered = () => {
    this._requestNdefWrite()
  }

  _startDetection = () => {
    NfcManager.registerTagEvent(this._onTagDiscovered)
      .then(result => {
        console.log('registerTagEvent OK', result)
      })
      .catch(error => {
        console.warn('registerTagEvent fail', error)
      })
  }

  _stopDetection = () => {
    NfcManager.unregisterTagEvent()
      .then(result => {
        console.log('unregisterTagEvent OK', result)
      })
      .catch(error => {
        console.warn('unregisterTagEvent fail', error)
      })
  }

  _requestNdefWrite = () => {
    const { isWriting } = this.state
    if (isWriting) {
      return
    }

    const bytes = Ndef.encodeMessage([Ndef.textRecord(this.state.nfc)])

    this.setState({ isWriting: true })
    NfcManager.requestNdefWrite(bytes)
      .then(() => console.log('write completed'))
      .catch(err => console.warn(err))
      .then(() => this.setState({ isWriting: false }))
  }

  _cancelNdefWrite = () => {
    this.setState({ isWriting: false })
    NfcManager.cancelNdefWrite()
      .then(() => console.log('write cancelled'))
      .catch(err => console.warn(err))
  }

  _nextBtn = title => (
    <View
      style={{
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 80,
        padding: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (!title) {
            this.setState(state => ({
              currentStep: state.currentStep + 1,
            }))
          }
        }}
      >
        <View
          style={{
            backgroundColor: '#0E90FD',
            width: 240,
            height: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: '#F5F5F5',
              fontFamily: 'PingFangSC-Medium',
            }}
          >
            {title || 'Next'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  render() {
    const { currentStep, steps, cards, value } = this.state

    return (
      <Container style={{ backgroundColor: '#F1F8FF' }}>
        <TitleBar title="Renew a license" />
        <CustomSteps stepLeft={80} steps={steps} currentStep={currentStep} />
        <KeyboardAwareScrollView>
          {[
            <View style={{ backgroundColor: '#fff', marginTop: apx(10) }}>
              <ItemDetail label="Pet type" content="Dog" />
              <ItemDetail label="Pet name" content="Lily" />
              <ItemDetail label="Sex" content="Femal-Spayed" />
              <ItemDetail label="Primary breed" content="Pug" />
              <ItemDetail
                label="Secondary breed (optional)"
                content=""
                placeholder="--"
              />
              <ItemDetail
                label="Primary colour"
                content="White"
                placeholder="--"
              />
              <ItemDetail
                label=""
                content=""
                placeholder="--"
                editable={false}
              />
              <ItemDetail
                label="Tattoo ID (optional)"
                content=""
                placeholder="--"
              />
              <ItemDetail
                label="Chip ID (optional)"
                content=""
                placeholder="--"
              />
              <ItemDetail
                label="Coat Pattern (optional)"
                content=""
                placeholder="--"
              />
              {this._nextBtn()}
            </View>,
            <View style={styles.panel}>
              <ItemDetail label="PET" content="Lily" />
              <ItemDetail label="License" content="New application" />
              <ItemDetail label="Amount" content="$44.00" />

              <WingBlank>
                <View style={{ marginTop: apx(20) }}>
                  <Text
                    style={{
                      fontSize: apx(13),
                      color: '#384953',
                      fontWeight: '500',
                    }}
                  >
                    Benefit of licensing
                  </Text>
                </View>
                <View style={{ marginTop: apx(15) }}>
                  <Text
                    style={{
                      fontSize: apx(11),
                      color: '#384953',
                      fontWeight: '400',
                      lineHeight: apx(18),
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </View>
              </WingBlank>

              {this._nextBtn()}
            </View>,
            <View style={styles.panel}>
              <ItemDetail label="Transaction amount" content="$44.00 (CAD)" />
              <ItemDetail label="Order ID" content="DL9263901" />
              <ItemDetail label="Amount" content="$44.00" />
              <WingBlank>
                <View style={{ marginTop: apx(15), marginBottom: apx(15) }}>
                  <Text
                    style={{
                      fontSize: apx(11),
                      color: '#384953',
                      fontWeight: '400',
                      lineHeight: apx(18),
                    }}
                  >
                    Please complete the following details exactly as they appear
                    on your card. Do not put spaces or hyphens in the card
                    number.
                  </Text>
                </View>

                <View
                  style={{
                    height: apx(55),
                  }}
                >
                  <RNPickerSelect
                    placeholder={{}}
                    items={cards}
                    onValueChange={v => {
                      this.setState({
                        value: v,
                      })
                    }}
                    style={pickerSelectStyles}
                    value={value}
                    useNativeAndroidPickerStyle={false}
                    ref={el => {
                      this.inputRefs.value = el
                    }}
                  />
                </View>

                <View style={{ margin: apx(15) }}>
                  <Text style={styles.inputTitle}>Cardholder Name</Text>
                </View>
                <List style={styles.InputBorder}>
                  <InputItem placeholder="" />
                </List>
                <View style={{ margin: apx(15) }}>
                  <Text style={styles.inputTitle}>Card Number:</Text>
                </View>
                <List style={styles.InputBorder}>
                  <InputItem placeholder="" />
                </List>
                <View style={{ margin: apx(15) }}>
                  <Text style={styles.inputTitle}>Exiry Date (MMYY)</Text>
                </View>
                <List style={styles.InputBorder}>
                  <InputItem placeholder="" />
                </List>
              </WingBlank>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  marginBottom: 80,
                  padding: 20,
                }}
              >
                <TouchableOpacity onPress={() => {}}>
                  <View
                    style={[styles.cusButton, { backgroundColor: '#0E90FD' }]}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#F5F5F5',
                      }}
                    >
                      Confirm
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <View
                    style={[
                      styles.cusButton,
                      {
                        backgroundColor: '#fff',
                        borderColor: '#384953',
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#384953',
                      }}
                    >
                      Cancel
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>,
          ].find((item1, index) => {
            if (index === this.state.currentStep) return item1
            return null
          })}
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}
