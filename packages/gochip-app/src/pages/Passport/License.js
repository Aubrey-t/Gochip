import React from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Flex, Icon, Switch, Modal } from '@ant-design/react-native'
import NfcManager, { Ndef } from 'react-native-nfc-manager'
import Container from '../../components/Container'
import { apx } from '../../utils/device'
import { COLORS } from '../../theme'
import TitleBar from '../../components/TitleBar'

class ItemDetail extends React.PureComponent {
  static defaultProps = {}

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={{
            flexDirection: 'row',
            height: apx(50),
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottomColor: 'rgba(0,0,0,0.15)',
            borderBottomWidth: apx(0.5),
          }}
        >
          <View
            style={{
              width: '40%',
              paddingLeft: apx(20),
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: apx(13), color: '#384953' }}>
              {this.props.label}
            </Text>
            <Icon name="question-circle" size="md" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              justifyContent: 'flex-end',
              marginRight: apx(20),
            }}
          >
            <View style={{ alignItems: 'center', height: '100%' }}>
              <Image
                style={{ height: apx(15), width: apx(15) }}
                source={require('../../images/back1.png')}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

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
    checked: false,
    visible: false,
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

  onSwitchChange = value => {
    if (value === false) {
      this.setState({
        checked: value,
      })
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

  render() {
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
        },
      },
    ]

    return (
      <Container style={{ backgroundColor: '#F1F8FF' }}>
        <TitleBar title="License" />
        <View style={{ backgroundColor: '#fff' }}>
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
          <ItemDetail
            label="Renew"
            onPress={() => {
              this.props.navigation.navigate('RenewLicense')
            }}
          />
          <ItemDetail
            label="Update"
            onPress={() => {
              this.props.navigation.navigate('NfcPetDetails')
            }}
          />
          <ItemDetail
            label="Cancel"
            onPress={() => {
              this.props.navigation.navigate('CancelLicense')
            }}
          />
        </View>
      </Container>
    )
  }
}
