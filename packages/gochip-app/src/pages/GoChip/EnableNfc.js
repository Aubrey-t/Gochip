import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Images from '../../images/images'
import { STYLES } from '../../theme'
import { apx, statusBarHeight } from '../../utils/device'
import Container from '../../components/Container'
import { strings } from '../../locales/i18n'

export default class EnableNfc extends React.Component {
  state = {}

  render() {
    return (
      <Container>
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
              marginTop: statusBarHeight,
              // backgroundColor: 'red',
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Image
              source={Images.closeBlue}
              style={{
                width: apx(23),
                height: apx(23),
                // backgroundColor: 'red',
              }}
            />
          </TouchableOpacity>

          <Image
            source={Images.goChipNfc}
            style={{
              width: apx(73),
              height: apx(73),
            }}
          />

          <Text
            style={{
              fontSize: apx(16),
              color: '#0E90FD',
              marginTop: apx(20),
            }}
          >
            {strings('goChip.enableNfc')}
          </Text>

          <Text
            style={{
              width: apx(224),
              textAlign: 'center',
              fontSize: apx(11),
              color: '#384953',
              marginTop: apx(8),
            }}
          >
            {strings('goChip.enableNfcTips')}
          </Text>

          <TouchableOpacity
            style={{
              width: apx(292),
              height: apx(44),
              borderRadius: apx(22),
              backgroundColor: '#0E90FD',
              ...STYLES.center,
              marginTop: apx(35),
            }}
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Text
              style={{
                fontSize: apx(16),
                color: '#fff',
                fontWeight: '500',
              }}
            >
              {strings('goChip.ok')}
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}
