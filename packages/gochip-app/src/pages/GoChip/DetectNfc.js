import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import NfcManager, { Ndef } from 'react-native-nfc-manager'
import Images from '../../images/images'
import { STYLES } from '../../theme'
import { apx, statusBarHeight } from '../../utils/device'
import Container from '../../components/Container'
import { strings } from '../../locales/i18n'
import Wave from '../../components/Wave'

export default class DetectNfc extends React.Component {
  state = {
    tagInfo: null,
  }

  componentDidMount(): void {
    NfcManager.start({
      onSessionClosedIOS: () => {
        if (!this.state.tagInfo) {
          // detect cancel
          this.props.navigation.goBack()
          this.props.navigation.getParam('callback')()
        } else {
          // detect nfc success
          let tagInfo = {}
          try {
            tagInfo = Ndef.text.decodePayload(
              this.state.tagInfo.ndefMessage[0].payload
            )
            tagInfo = JSON.parse(tagInfo)
          } catch (e) {
            tagInfo = {}
          }
          this.props.navigation.replace('NfcPetDetails', {
            tagInfo,
          })
        }
      },
    })
      .then(() => {
        console.log('start OK')
      })
      .catch(() => {
        console.warn('device does not support nfc!')
        // this.props.navigation.replace('EnableNfc')
        this.props.navigation.replace('EnableNfc')
      })

    this._startDetection()
  }

  componentWillUnmount(): void {
    this._stopDetection()
  }

  _onTagDiscovered = tag => {
    // after discover nfc chip, need to decode bytes array, then we can get the string result
    this.setState(
      {
        tagInfo: tag,
      },
      () => {
        let tagInfo = {}
        try {
          tagInfo = Ndef.text.decodePayload(
            this.state.tagInfo.ndefMessage[0].payload
          )
          tagInfo = JSON.parse(tagInfo)
        } catch (e) {
          tagInfo = {}
        }
        this.props.navigation.replace('NfcPetDetails', {
          tagInfo,
        })
      }
    )
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

  render() {
    return (
      <Container>
        <LinearGradient
          colors={['#00CCFF', '#0E90FD']}
          style={styles.linearGradient}
        >
          <View
            style={{
              ...STYLES.center,
              flex: 1,
            }}
          >
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: apx(20),
                top: apx(17),
              }}
              onPress={() => {
                this.props.navigation.pop()
              }}
            >
              <Image
                source={Images.closeFFF}
                style={{
                  width: apx(23),
                  height: apx(23),
                  marginTop: statusBarHeight,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                width: apx(375),
                height: apx(375),
                ...STYLES.center,
              }}
            >
              <Wave delay={0} duration={Wave.DURATION} />
              <Wave delay={Wave.DURATION * 0.33} duration={Wave.DURATION} />
              <Wave delay={Wave.DURATION * 0.66} duration={Wave.DURATION} />

              <View
                style={{
                  height: apx(171),
                  width: apx(171),
                  borderRadius: apx(171 / 2),
                  borderWidth: apx(5),
                  borderColor: '#0576FE',
                  backgroundColor: '#05CCF5',
                  ...STYLES.center,
                }}
              >
                <Image
                  source={Images.goChipLogo}
                  resizeMode="contain"
                  style={{ width: apx(64), height: apx(64) }}
                />
              </View>
              <Text
                style={{
                  fontSize: apx(18),
                  fontWeight: '500',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  color: '#fff',
                  top: apx(62),
                  textAlign: 'center',
                }}
              >
                {strings('goChip.detecting')}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
})
