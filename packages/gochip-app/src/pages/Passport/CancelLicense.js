import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import { TextareaItem } from '@ant-design/react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Container from '../../components/Container'
import { STYLES } from '../../theme'
import { apx } from '../../utils/device'
import TitleBar from '../../components/TitleBar'

class ItemDetail extends React.PureComponent {
  static defaultProps = {}

  render() {
    return (
      <TouchableOpacity>
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
            <Text style={{ fontSize: apx(13), color: '#9B9B9B' }}>
              {this.props.label}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              justifyContent: 'flex-end',
              marginRight: apx(20),
            }}
          >
            <Text
              style={{ color: '#384953', fontSize: apx(13), fontWeight: '500' }}
            >
              {this.props.content}
            </Text>
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
  cusButton: {
    marginLeft: apx(10),
    marginRight: apx(10),
    width: apx(150),
    height: 50,
    borderRadius: 25,
    ...STYLES.center,
  },
})

export default class CancelLicense extends React.Component {
  state = {}

  componentDidMount() {}

  componentWillUnmount() {}

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
    return (
      <Container style={{ backgroundColor: '#F1F8FF' }}>
        <TitleBar title="Cancel a license" />
        <View
          style={{
            backgroundColor: '#fff',
            padding: apx(2),
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../images/Passport/passport.png')}
            style={{ height: apx(150), width: apx(120) }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.panel}>
          <ItemDetail label="Pet type" content="Dog" />
          <ItemDetail label="Pet name" content="Lily" />
          <ItemDetail label="Account number" content="16742" />
          <KeyboardAwareScrollView>
            <View style={{ padding: apx(15) }}>
              <TextareaItem
                rows={6}
                placeholder="Please enter"
                placeholderTextColor="#BFBFBF"
                style={{
                  borderRadius: apx(5),
                  borderWidth: 0,
                  borderColor: 'transparent',
                  borderBottomColor: 'transparent',
                  borderBottomWidth: 0,
                  backgroundColor: '#F5F5F5',
                }}
                styles={{
                  container: {
                    borderBottomWidth: 0,
                    borderColor: 'transparent',
                  },
                  input: {
                    fontSize: apx(12),
                    fontWeight: '400',
                    color: '#384953',
                  },
                }}
                last
              />
            </View>
          </KeyboardAwareScrollView>
          {this._nextBtn('Submit')}
        </View>
      </Container>
    )
  }
}
