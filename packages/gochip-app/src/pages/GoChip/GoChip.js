import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Modal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'
import { Flex } from '@ant-design/react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BoxShadow } from 'react-native-shadow'
import { strings } from '../../locales/i18n'
import Images from '../../images/images'
import { STYLES } from '../../theme'
import { apx, statusBarHeight } from '../../utils/device'
import Wave from '../../components/Wave'

export default class GoChip extends React.Component {
  state = {
    text: '',
    modalDetectFailure: false,
  }

  render() {
    return (
      <LinearGradient
        colors={['#00CCFF', '#0E90FD']}
        style={styles.linearGradient}
      >
        <KeyboardAwareScrollView>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: apx(130),
            }}
          >
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: apx(20),
                top: apx(17),
              }}
              onPress={() => this.props.navigation.navigate('History')}
            >
              <Image
                source={Images.goChipHistory}
                style={{
                  width: apx(23),
                  height: apx(23),
                  marginTop: statusBarHeight,
                }}
              />
            </TouchableOpacity>

            <Text
              style={{ fontSize: apx(18), fontWeight: '500', color: '#fff' }}
            >
              {strings('goChip.clickDesc')}
            </Text>
            <View
              style={{
                height: apx(171),
                width: apx(171),
                marginTop: apx(22),
                marginBottom: apx(165),
              }}
            >
              <Wave delay={0} duration={Wave.DURATION} />
              <Wave delay={Wave.DURATION * 0.33} duration={Wave.DURATION} />
              <Wave delay={Wave.DURATION * 0.66} duration={Wave.DURATION} />
              <TouchableOpacity
                style={{
                  height: apx(171),
                  width: apx(171),
                  borderRadius: apx(171 / 2),
                  borderWidth: apx(5),
                  borderColor: '#0576FE',
                  backgroundColor: '#05CCF5',
                  ...STYLES.center,
                }}
                onPress={() =>
                  this.props.navigation.navigate('DetectNfc', {
                    callback: () => {
                      this.setState({ modalDetectFailure: true })
                    },
                  })
                }
              >
                <Image
                  source={Images.goChipLogo}
                  resizeMode="contain"
                  style={{ width: apx(64), height: apx(64) }}
                />
              </TouchableOpacity>
            </View>

            <Flex>
              <TextInput
                style={{
                  width: apx(222),
                  height: apx(44),
                  backgroundColor: '#fff',
                  padding: 0,
                  margin: 0,
                  paddingLeft: apx(20),
                  borderTopLeftRadius: apx(22),
                  borderBottomLeftRadius: apx(22),
                }}
                numberOfLines={1}
                placeholder={strings('goChip.placeholder')}
                placeholderTextColor="#d8d8d8"
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
              <TouchableOpacity
                style={{
                  ...STYLES.center,
                  width: apx(58),
                  height: apx(44),
                  backgroundColor: '#05CCF5',
                  borderTopRightRadius: apx(22),
                  borderBottomRightRadius: apx(22),
                }}
                onPress={() => {
                  this.props.navigation.navigate('NfcPetDetails', {
                    tagInfo: {},
                  })
                }}
              >
                <View>
                  <BoxShadow
                    setting={{
                      color: '#05CCF5',
                      width: apx(24),
                      height: apx(36),
                      border: apx(8), // 阴影宽度
                      radius: apx(8), // 包裹的子元素圆角多少这里必须是多少
                      opacity: 0.5, // 透明度
                      x: apx(-16),
                      y: 0,
                    }}
                  >
                    <View />
                  </BoxShadow>
                </View>

                <Text
                  style={{
                    fontSize: apx(15),
                    color: '#fff',
                    position: 'absolute',
                  }}
                >
                  OK
                </Text>
              </TouchableOpacity>
            </Flex>
          </View>
          <Modal
            isVisible={this.state.modalDetectFailure}
            style={{ ...STYLES.center }}
          >
            <View
              style={{
                width: apx(267),
                backgroundColor: '#fff',
                borderRadius: apx(2),
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: apx(16),
                  color: '#384953',
                  marginTop: apx(34),
                }}
              >
                {strings(`goChip.modalTitle`)}
              </Text>
              <Text
                style={{
                  width: apx(235),
                  fontSize: apx(11),
                  lineHeight: parseInt(apx(18)),
                  color: '#384953',
                  marginTop: apx(22),
                }}
              >
                {strings(`goChip.modalContent`)}
              </Text>
              <Flex style={{ alignSelf: 'stretch', marginTop: apx(15) }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    ...STYLES.center,
                    paddingVertical: apx(14),
                  }}
                  onPress={() => this.setState({ modalDetectFailure: false })}
                >
                  <Text style={{ fontSize: apx(16), color: '#9B9B9B' }}>
                    {strings(`goChip.modalBtnCancel`)}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, ...STYLES.center, paddingVertical: apx(1) }}
                  onPress={() => this.setState({ modalDetectFailure: false })}
                >
                  <Text style={{ fontSize: apx(16), color: '#0E90FD' }}>
                    {strings(`goChip.modalBtnTryAgain`)}
                  </Text>
                </TouchableOpacity>
              </Flex>
            </View>
          </Modal>
        </KeyboardAwareScrollView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
})
