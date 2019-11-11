import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native'

import { WingBlank, Icon, List, InputItem } from '@ant-design/react-native'
import NfcManager, { Ndef } from 'react-native-nfc-manager'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Container from '../../components/Container'
import { strings } from '../../locales/i18n'
import { STYLES } from '../../theme'
import { apx } from '../../utils/device'
import NfcModel from '../../models/NfcModel'
import TitleBar from '../../components/TitleBar'

import ItemTitle from './ItemTitle'
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
})

export default class License extends React.Component {
  state = {
    isWriting: false,

    nfc: NfcModel,
    value: null,
    steps: [
      { title: 'Your License', description: 'This is description' },
      { title: 'Pet Information', description: 'This is description' },
      { title: 'Billing', description: 'This is description' },
      { title: 'Payment', description: 'This is description' },
    ],
    currentStep: 0,
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
    const { currentStep, steps } = this.state

    const { nfc } = this.state

    return (
      <Container style={{ backgroundColor: '#F1F8FF' }}>
        <TitleBar title="Get a license" />
        <CustomSteps stepLeft={70} steps={steps} currentStep={currentStep} />
        <KeyboardAwareScrollView>
          {[
            <View>
              <View style={styles.panel}>
                <ItemTitle title="Owner information" />
                <ItemDetail
                  label={strings('goChip.lastName')}
                  content={nfc.ownerInformation.lastName}
                  onChange={val => {
                    nfc.ownerInformation.lastName = val
                    this.setState({})
                  }}
                  showIcon
                />
                <ItemDetail
                  label={strings('goChip.firstName')}
                  content={nfc.ownerInformation.firstName}
                  onChange={val => {
                    nfc.ownerInformation.firstName = val
                    this.setState({})
                  }}
                />
              </View>
              <View style={styles.panel}>
                <ItemTitle title="Co-owner information (optional)" />
                <ItemDetail
                  label={strings('goChip.lastName')}
                  content={nfc.coownerInformation.lastName}
                  onChange={val => {
                    nfc.coownerInformation.lastName = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.firstName')}
                  content={nfc.coownerInformation.firstName}
                  onChange={val => {
                    nfc.coownerInformation.firstName = val
                    this.setState({})
                  }}
                />
              </View>

              <View style={styles.panel}>
                <ItemTitle title="Contact numbers" />
                <List style={styles.InputBorder}>
                  <InputItem
                    clear
                    value={this.state.value}
                    onChange={phone => {
                      this.setState({
                        // eslint-disable-next-line react/no-unused-state
                        phone,
                      })
                    }}
                    placeholder="13630193331"
                    extra={
                      <View
                        style={{
                          width: apx(12),
                          height: apx(12),
                          borderWidth: apx(0.5),
                          borderRadius: 12,
                          borderColor: '#9B9B9B',
                        }}
                      >
                        <Icon
                          name="close"
                          color="#9B9B9B"
                          style={[{ fontSize: apx(11) }]}
                          size="md"
                        />
                      </View>
                    }
                  />
                </List>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 15,
                    marginBottom: 15,
                  }}
                >
                  {['Home', 'Work', 'Cellular', 'Fax'].map((item2, index) => (
                    <TouchableOpacity
                      style={[
                        {
                          marginRight: apx(15),
                          padding: apx(2),
                          height: apx(18),
                          borderRadius: 4,
                          borderWidth: 1,
                        },
                        this.state.curContact === index
                          ? {
                              borderColor: '#0E90FD',
                              backgroundColor: '#0E90FD',
                            }
                          : {
                              borderColor: '#9B9B9B',
                            },
                      ]}
                      onPress={() => {
                        this.setState({ curContact: index })
                      }}
                    >
                      <Text
                        style={[
                          { fontSize: apx(10) },
                          this.state.curContact === index
                            ? {
                                color: '#FFFFFF',
                              }
                            : {
                                color: '#9B9B9B',
                              },
                        ]}
                      >
                        {item2}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={styles.panel}>
                <ItemTitle title="Home address" />
                <ItemDetail
                  label="House number"
                  content=""
                  onChange={val => {
                    nfc.petInformation.petType = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label="Street name"
                  content={nfc.petInformation.petName}
                  onChange={val => {
                    nfc.petInformation.petName = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label="Unit number (optional)"
                  content=""
                  onChange={val => {
                    nfc.petInformation.sex = val
                    this.setState({})
                  }}
                />
                {this._nextBtn()}
              </View>
            </View>,
            <View style={styles.panel}>
              <ItemDetail label={strings('goChip.petType')} content="Dog" />
              <ItemDetail label={strings('goChip.petName')} content="Lily" />
              <ItemDetail
                label={strings('goChip.sex')}
                content="Femal - Spayed"
                showIcon={false}
              />
              <ItemDetail
                label={strings('goChip.primaryBreed')}
                content="Pug"
              />
              <ItemDetail
                label={strings('goChip.secondaryBreed')}
                content="--"
              />
              <ItemDetail
                label={strings('goChip.primaryColour')}
                content="White"
              />
              <ItemDetail label="" content="" />
              <ItemDetail
                label={`${strings('goChip.tattooId')}(optional)`}
                placeholder="--"
                showIcon={false}
              />
              <ItemDetail
                label={`${strings('goChip.chipId')}(optional)`}
                placeholder="--"
                showIcon={false}
              />
              <ItemDetail
                label={`${strings('goChip.coatPattern')}(optional)`}
                placeholder="--"
                showIcon={false}
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
                    Please complete the following details exactly as they appear
                    on your card. Do not put spaces or hyphens in the card
                    number.
                  </Text>
                </View>

                <View style={{ ...STYLES.center, marginTop: 10 }}>
                  <ImageBackground
                    source={require('../../images/Passport/card_visa2x.png')}
                    style={{
                      width: apx(330),
                      height: apx(170),
                      borderRadius: apx(5),
                    }}
                  >
                    <View
                      style={{
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 50,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'rgba(255,255,255,1)',
                        }}
                      >
                        6212 2618 2738 3983
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{ ...STYLES.center }}>
                  <View
                    style={{
                      backgroundColor: 'rgba(14,145,253,0.3)',
                      width: apx(315),
                      height: apx(8),
                      borderBottomLeftRadius: apx(5),
                      borderBottomRightRadius: apx(5),
                    }}
                  />
                </View>
                <View
                  style={{
                    ...STYLES.center,
                    marginTop: apx(-8),
                    marginBottom: apx(30),
                  }}
                >
                  <View
                    style={{
                      backgroundColor: 'rgba(14,145,253,0.2)',
                      width: apx(300),
                      height: apx(16),
                      borderBottomLeftRadius: apx(5),
                      borderBottomRightRadius: apx(5),
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
              {this._nextBtn('Confirm')}
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
