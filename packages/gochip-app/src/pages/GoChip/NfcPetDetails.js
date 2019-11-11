import PropTypes, { object } from 'prop-types'
import React from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Flex } from '@ant-design/react-native'
import Modal from 'react-native-modal'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { strings } from '../../locales/i18n'
import { COLORS, STYLES } from '../../theme'
import { apx } from '../../utils/device'
import NfcModel from '../../models/NfcModel'
import storage from '../../utils/storage'

class ItemTitle extends React.PureComponent<{ title: string, style: object }> {
  render() {
    return (
      <Flex
        style={{
          height: apx(52),
          paddingLeft: apx(20),
          backgroundColor: 'white',
          ...this.props.style,
        }}
        align="center"
      >
        <Text
          style={{ fontSize: apx(18), color: '#384953', fontWeight: '500' }}
        >
          {this.props.title}
        </Text>
      </Flex>
    )
  }
}

class ItemDetail extends React.PureComponent {
  static defaultProps = {
    showBtn: false,
  }

  static propTypes = {
    content: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    showBtn: PropTypes.bool,
  }

  render() {
    return (
      <Flex
        style={{
          height: apx(50),
          paddingLeft: apx(37),
          backgroundColor: 'white',
        }}
        align="center"
      >
        <Text style={{ width: apx(100), fontSize: apx(11), color: '#9B9B9B' }}>
          {this.props.label}
        </Text>
        <Text
          style={{
            width: apx(159),
            fontSize: apx(13),
            color: '#384953',
            fontWeight: '400',
          }}
        >
          {this.props.content}
        </Text>
        {this.props.showBtn && (
          <TouchableOpacity
            style={{
              width: apx(60),
              height: apx(28),
              backgroundColor: '#0E90FD',
              ...STYLES.center,
              borderRadius: apx(5),
            }}
          >
            <Text style={{ fontSize: apx(11), color: '#fff' }}>
              {strings('follow')}
            </Text>
          </TouchableOpacity>
        )}
      </Flex>
    )
  }
}

class HairSeparator extends React.PureComponent<{}> {
  render() {
    return (
      <View
        style={{
          width: apx(375),
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#000000',
          opacity: 0.15,
        }}
      />
    )
  }
}

export default class NfcPetDetails extends React.Component {
  state = {
    modalLost: false,
    nfc: NfcModel,
  }

  async componentDidMount(): void {
    this.setState({
      nfc: {
        ...NfcModel,
        // ...this.props.navigation.getParam('tagInfo'),
      },
    })

    const status = await storage.getString(storage.keys.PET_STATUS, 'home')
    this.setState({ modalLost: status === 'lost' })
  }

  componentWillUnmount(): void {}

  render() {
    const { nfc } = this.state
    return (
      <Container>
        <TitleBar title={strings('goChip.petDetails')} />
        <ScrollView style={{ backgroundColor: '#F1F8FF' }}>
          <ItemTitle title={strings('goChip.ownerAccount')} />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.owner')}
            content={nfc.ownerAccount.userName}
            showBtn
          />

          <ItemTitle
            title={strings('goChip.ownerInformation')}
            style={{ marginTop: apx(10) }}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.lastName')}
            content={nfc.ownerInformation.lastName}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.firstName')}
            content={nfc.ownerInformation.firstName}
          />

          <ItemTitle
            title={strings('goChip.coownerInformation')}
            style={{ marginTop: apx(10) }}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.lastName')}
            content={nfc.coownerInformation.lastName}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.firstName')}
            content={nfc.coownerInformation.firstName}
          />

          <ItemTitle
            title={strings('goChip.petInformation')}
            style={{ marginTop: apx(10) }}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.petType')}
            content={nfc.petInformation.petType}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.petName')}
            content={nfc.petInformation.petName}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.sex')}
            content={nfc.petInformation.sex}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.primaryBreed')}
            content={nfc.petInformation.primaryBreed}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.secondaryBreed')}
            content={nfc.petInformation.secondaryBreed}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.primaryColour')}
            content={nfc.petInformation.primaryColour}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.secondaryColour')}
            content={nfc.petInformation.secondaryColour}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.tattooId')}
            content={nfc.petInformation.tatooId}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.chipId')}
            content={nfc.petInformation.chipId}
          />
          <HairSeparator />
          <ItemDetail
            label={strings('goChip.coatPattern')}
            content={nfc.petInformation.coatPattern}
          />
        </ScrollView>

        <Modal isVisible={this.state.modalLost} style={{ ...STYLES.center }}>
          <ImageBackground
            source={require('../../images/GoChip/nfc_pet_details_popup.png')}
            style={{ width: apx(267), height: apx(234), ...STYLES.center }}
          >
            <View
              style={{
                width: apx(267),
                height: apx(110),
                position: 'absolute',
                bottom: 0,
              }}
            >
              <View
                style={{
                  flex: 1,
                  ...STYLES.center,
                  borderBottomWidth: apx(1),
                  borderColor: 'rgba(0,0,0,0.15)',
                }}
              >
                <Text style={{ fontSize: apx(11), color: COLORS.text384953 }}>
                  {strings('goChip.lostTips')}
                </Text>
              </View>
              <TouchableOpacity style={{ height: apx(51), ...STYLES.center }}>
                <Text
                  style={{
                    fontSize: apx(16),
                    color: '#0E90FD',
                    fontWeight: '500',
                  }}
                >
                  {strings('goChip.contact')}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <TouchableOpacity
            style={{ marginTop: apx(16) }}
            onPress={() => this.setState({ modalLost: false })}
          >
            <Image
              source={require('../../images/GoChip/nfc_pet_details_close_icon.png')}
              style={{ width: apx(23), height: apx(23) }}
            />
          </TouchableOpacity>
        </Modal>
      </Container>
    )
  }
}
