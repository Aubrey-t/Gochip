import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Flex } from '@ant-design/react-native'
import { strings } from '../../locales/i18n'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import SearchBar from '../../components/SearchBar'
import SvgIcon from '../../components/SvgIcon'
import { COLORS, STYLES } from '../../theme'

export default class AddFriends extends React.Component {
  state = {}

  render = () => (
    <Container>
      <TitleBar title={strings('community.addFriends')} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingVertical: apx(13),
          paddingHorizontal: apx(20),
        }}
      >
        <SearchBar />
        <Flex style={{ alignSelf: 'stretch', marginTop: apx(23) }}>
          <TouchableOpacity
            style={{ flex: 1, ...STYLES.center }}
            onPress={() => this.props.navigation.navigate('ScanQRCode')}
          >
            <SvgIcon icon="sm_icon.png" size={apx(34)} />
            <Text
              style={{
                color: COLORS.text333333,
                fontSize: apx(11),
                marginTop: apx(8),
              }}
            >
              {strings('community.scanQRCode')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, ...STYLES.center }}
            onPress={() => this.props.navigation.navigate('AddressBook')}
          >
            <SvgIcon icon="phone_icon.png" size={apx(34)} />
            <Text
              style={{
                color: COLORS.text333333,
                fontSize: apx(11),
                marginTop: apx(8),
              }}
            >
              {strings('community.addressBook')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, ...STYLES.center }}
            onPress={() => this.props.navigation.navigate('CreateGroups')}
          >
            <SvgIcon icon="zu_icon.png" size={apx(34)} />
            <Text
              style={{
                color: COLORS.text333333,
                fontSize: apx(11),
                marginTop: apx(8),
              }}
            >
              {strings('community.createAGroup')}
            </Text>
          </TouchableOpacity>
        </Flex>
      </KeyboardAwareScrollView>
    </Container>
  )
}
