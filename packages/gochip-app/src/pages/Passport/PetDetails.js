import React from 'react'
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Carousel, Flex, Modal, Switch } from '@ant-design/react-native'
import NfcManager, { Ndef } from 'react-native-nfc-manager'
import RNPickerSelect from 'react-native-picker-select'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Container from '../../components/Container'
import { strings } from '../../locales/i18n'
import { COLORS, STYLES } from '../../theme'
import { apx, deviceHeight, deviceWidth } from '../../utils/device'
import NfcModel from '../../models/NfcModel'
import TitleBar from '../../components/TitleBar'
import storage from '../../utils/storage'

import ItemTitle from './ItemTitle'
import ItemDetail from './ItemDetail'

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

const styles = StyleSheet.create({
  agencyText: {
    marginTop: apx(15),
    fontSize: apx(13),
    color: '#384953',
    fontWeight: '400',
    lineHeight: apx(18),
  },
  panel: {
    backgroundColor: '#fff',
    marginTop: apx(10),
  },
})

export default class PetDetails extends React.Component {
  state = {
    checked: false,
    visible: false,

    isWriting: false,

    nfc: NfcModel,
    tabIndex: 0,
    countries: [
      {
        label: `CN`,
        value: 'China',
      },
      {
        label: `USA`,
        value: 'USA',
      },
      {
        label: `CA`,
        value: 'Canada',
      },
    ],
    value: null,
    agency: [
      'Due to government regulations, the following entry requirements apply when travelling with your pet: ',
      '1. Only one cat or dog per passenger is permitted.\n2. Pets are accepted in the cabin and in the baggage compartment.\n3. Passengers travelling with a pet must present a valid quarantine certificate and vaccination certificate issued by the competent authorities of the country of origin.',
      'Seeing eye/guide dogs accompanied by a training certificate will be exempt from quarantine. \n\nOther exceptions apply; contact your embassy or consulate of your destination country/region for more information. ',
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

    const status = await storage.getString(storage.keys.PET_STATUS, 'home')
    this.setState({ checked: status !== 'home' })
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

  onSwitchChange = value => {
    if (value === false) {
      this.setState({
        checked: value,
      })
      storage.setString(storage.keys.PET_STATUS, 'home')
    } else {
      this.setState({
        visible: true,
      })
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
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

  render() {
    const { item } = this.props.navigation.state.params
    const { countries, value, agency } = this.state
    const data = [1, 2, 3]

    const { nfc } = this.state

    const footerButtons = [
      {
        text: 'Cancel',
        onPress: () => {
          this.setState({ checked: false })
        },
      },
      {
        text: 'OK',
        onPress: () => {
          this.setState({ checked: true })
          storage.setString(storage.keys.PET_STATUS, 'lost')
        },
      },
    ]
    return (
      <Container style={{ backgroundColor: '#F1F8FF' }}>
        <TitleBar
          title={strings('goChip.petDetails')}
          // renderRight={() =>
          //   Platform.OS === 'android' && (
          //     <TouchableOpacity
          //       style={{
          //         ...STYLES.center,
          //         width: apx(70),
          //         height: apx(33),
          //         borderRadius: apx(33 / 2),
          //         marginRight: apx(20),
          //         backgroundColor: '#05CCF5',
          //       }}
          //       onPress={() => {
          //         if (this.state.isWriting) {
          //           this._cancelNdefWrite()
          //         } else {
          //           this._requestNdefWrite()
          //         }
          //       }}
          //     >
          //       <Text style={{ color: '#fff', fontSize: apx(11) }}>
          //         {this.state.isWriting ? 'Cancel' : 'Write'}
          //       </Text>
          //     </TouchableOpacity>
          //   )
          // }
        />
        <KeyboardAwareScrollView>
          <View style={{ backgroundColor: '#fff' }}>
            <Carousel dots={false} afterChange={this.afterChange}>
              {data.map(item1 => (
                <View
                  style={{
                    ...STYLES.center,
                    margin: apx(20),
                    overflow: 'hidden',
                    borderWidth: 0,
                    borderTopLeftRadius: apx(15),
                    borderTopRightRadius: apx(15),
                  }}
                  key={item1.id}
                >
                  <ImageBackground
                    source={item.img}
                    style={{
                      height: apx(160),
                      width: apx(deviceWidth * 0.9),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        padding: apx(20),
                      }}
                    >
                      <TouchableOpacity>
                        <View
                          style={{
                            backgroundColor: '#0E90FD',
                            width: apx(79),
                            height: apx(28),
                            borderRadius: apx(14),
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Text
                            style={{
                              fontSize: apx(13),
                              color: '#F5F5F5',
                              fontFamily: 'PingFangSC-Medium',
                            }}
                          >
                            + Add to
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              ))}
            </Carousel>
            <ScrollView
              horizontal
              style={{
                width: deviceWidth,
                marginTop: apx(48),
                paddingLeft: apx(20),
              }}
            >
              {['Information', 'License', 'Medical', 'Travel'].map(
                (item2, index) => (
                  <TouchableOpacity
                    style={{
                      ...STYLES.center,
                      marginRight: apx(4),
                    }}
                    onPress={() => this.setState({ tabIndex: index })}
                  >
                    <View
                      style={{
                        width: apx(deviceWidth * 0.22),
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: apx(13),
                          color:
                            index === this.state.tabIndex
                              ? COLORS.text384953
                              : COLORS.text9b9b9b,
                          marginBottom: apx(5),
                          fontWeight: '500',
                        }}
                      >
                        {item2}
                      </Text>
                      <View
                        style={{
                          width: apx(30),
                          height: apx(1),
                          backgroundColor:
                            index === this.state.tabIndex
                              ? '#0E90FD'
                              : 'transparent',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                )
              )}
            </ScrollView>
          </View>
          {[
            <View style={{ paddingBottom: 80 }}>
              <View style={styles.panel}>
                <Flex
                  style={{
                    width: apx(375),
                    height: apx(42),
                    paddingHorizontal: apx(20),
                  }}
                  justify="between"
                >
                  <Text
                    style={{
                      fontSize: apx(11),
                      color: COLORS.text9b9b9b,
                    }}
                  >
                    {this.state.checked ? 'Lost' : 'Home'}
                  </Text>
                  <Switch
                    color="#0E90FD"
                    checked={this.state.checked}
                    onChange={this.onSwitchChange}
                  />
                </Flex>
                <Modal
                  transparent
                  onClose={this.onClose}
                  maskClosable
                  visible={this.state.visible}
                  footer={footerButtons}
                >
                  <View style={{ paddingVertical: apx(20) }}>
                    <Text style={{ textAlign: 'center' }}>
                      Are you sure you want to mark your pet as lost?
                    </Text>
                  </View>
                </Modal>
              </View>
              <View style={styles.panel}>
                <ItemTitle title={strings('goChip.ownerInformation')} />
                <ItemDetail
                  label={strings('goChip.lastName')}
                  content={nfc.ownerInformation.lastName}
                  onChange={val => {
                    nfc.ownerInformation.lastName = val
                    this.setState({})
                  }}
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
                <ItemTitle title={strings('goChip.coownerInformation')} />
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
                <ItemTitle title={strings('goChip.petInformation')} />
                <ItemDetail
                  label={strings('goChip.petType')}
                  content={nfc.petInformation.petType}
                  onChange={val => {
                    nfc.petInformation.petType = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.petName')}
                  content={nfc.petInformation.petName}
                  onChange={val => {
                    nfc.petInformation.petName = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.sex')}
                  content={nfc.petInformation.sex}
                  onChange={val => {
                    nfc.petInformation.sex = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.primaryBreed')}
                  content={nfc.petInformation.primaryBreed}
                  onChange={val => {
                    nfc.petInformation.primaryBreed = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.secondaryBreed')}
                  content={nfc.petInformation.secondaryBreed}
                  onChange={val => {
                    nfc.petInformation.secondaryBreed = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.primaryColour')}
                  content={nfc.petInformation.primaryColour}
                  onChange={val => {
                    nfc.petInformation.primaryColour = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.secondaryColour')}
                  content={nfc.petInformation.secondaryColour}
                  onChange={val => {
                    nfc.petInformation.secondaryColour = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.tattooId')}
                  content={nfc.petInformation.tatooId}
                  onChange={val => {
                    nfc.petInformation.tatooId = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.chipId')}
                  content={nfc.petInformation.chipId}
                  onChange={val => {
                    nfc.petInformation.chipId = val
                    this.setState({})
                  }}
                />
                <ItemDetail
                  label={strings('goChip.coatPattern')}
                  content={nfc.petInformation.coatPattern}
                  onChange={val => {
                    nfc.petInformation.coatPattern = val
                    this.setState({})
                  }}
                />
              </View>
            </View>,
            <View
              style={[
                styles.panel,
                {
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  minHeight: deviceHeight * 0.55,
                  paddingBottom: 80,
                },
              ]}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('License')
                  }}
                >
                  <Image
                    style={{ width: apx(240), height: apx(120) }}
                    resizeMode="contain"
                    source={require('../../images/uploadfile.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontWeight: '400',
                    fontSize: apx(13),
                  }}
                >
                  No license
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('GetLicense')
                  }}
                >
                  <View
                    style={{
                      height: apx(50),
                      borderRadius: apx(25),
                      width: apx(240),
                      backgroundColor: '#0E90FD',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: apx(13),
                        fontWeight: '400',
                        color: '#FFFFFF',
                      }}
                    >
                      Get a license
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>,
            <View
              style={[
                styles.panel,
                {
                  paddingBottom: 80,
                },
              ]}
            >
              <ItemTitle title="Medical Records" />
              <ItemDetail label="Canadian Pet Hospital" content="2019.07.08" />
              <ItemTitle title="Medical Records" />
              <ItemDetail label="Rabies" content="2019.07.12" />

              <View style={{ marginTop: apx(50), alignItems: 'center' }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: apx(50),
                      borderRadius: apx(25),
                      width: apx(240),
                      backgroundColor: '#0E90FD',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: apx(13),
                        fontWeight: '400',
                        color: '#FFFFFF',
                      }}
                    >
                      New record
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>,
            <View
              style={[
                styles.panel,
                {
                  paddingBottom: 120,
                },
              ]}
            >
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'rgba(216,216,216,1)',
                  marginLeft: 15,
                  marginTop: 15,
                  paddingBottom: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: apx(18),
                    fontWeight: '500',
                    color: '#384953',
                  }}
                >
                  Government Regulations
                </Text>
              </View>
              <View style={{ margin: apx(15) }}>
                <Text
                  style={{
                    fontSize: apx(13),
                    color: '#384953',
                    fontWeight: '500',
                  }}
                >
                  Please choose the destination country:
                </Text>
              </View>
              <View
                style={{
                  height: 55,
                  marginLeft: apx(15),
                  marginRight: apx(15),
                }}
              >
                <RNPickerSelect
                  placeholder={{}}
                  items={countries}
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
              <View
                style={{
                  backgroundColor: '#F5F5F5',
                  margin: apx(15),
                  padding: apx(10),
                }}
              >
                <Text style={styles.agencyText}>{agency[0]}</Text>
                <Text
                  style={[
                    styles.agencyText,
                    {
                      color: '#9B9B9B',
                    },
                  ]}
                >
                  {agency[1]}
                </Text>
                <Text style={styles.agencyText}>{agency[2]}</Text>
              </View>
              <View style={{ margin: apx(15) }}>
                <Text
                  style={{
                    fontSize: apx(13),
                    color: '#384953',
                    fontWeight: '400',
                  }}
                >
                  Download Pets (Dogs, cats and ferrets) – Animal Health
                  Certificates
                </Text>
              </View>
              <View
                style={{
                  height: 55,
                  marginLeft: apx(15),
                  marginRight: apx(15),
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <View style={{ width: deviceWidth * 0.7 }}>
                  <RNPickerSelect
                    placeholder={{}}
                    items={countries}
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
                <View
                  style={{
                    marginLeft: apx(8),
                    height: apx(45),
                    width: deviceWidth * 0.15,
                    borderWidth: 1,
                    borderColor: '#BFBFBF',
                    borderRadius: apx(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#384953',
                      fontSize: apx(12),
                      fontWeight: '400',
                    }}
                  >
                    PDF
                  </Text>
                </View>
              </View>
            </View>,
          ].find((item1, index) => {
            if (index === this.state.tabIndex) return item1
            return null
          })}
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}
