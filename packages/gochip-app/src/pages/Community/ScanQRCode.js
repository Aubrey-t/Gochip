import React from 'react'
import { RNCamera } from 'react-native-camera'
import { Toast } from '@ant-design/react-native'
import BarcodeMask from 'react-native-barcode-mask'
import { strings } from '../../locales/i18n'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import { STYLES } from '../../theme'

export default class ScanQRCode extends React.Component {
  state = {}

  render = () => (
    <Container>
      <TitleBar title={strings('community.scanQRCode')} />
      <RNCamera
        style={{ flex: 1, ...STYLES.center }}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        onBarCodeRead={code => {
          Toast.show(code.data, 1)
          this.props.navigation.goBack()
        }}
      >
        <BarcodeMask width={apx(300)} height={apx(300)} />
      </RNCamera>
    </Container>
  )
}
