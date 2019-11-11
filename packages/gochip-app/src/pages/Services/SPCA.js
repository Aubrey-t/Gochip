import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Flex } from '@ant-design/react-native'
import Container from '../../components/Container'
import Images from '../../images/images'
import { strings } from '../../locales/i18n'
import { COLORS, STYLES } from '../../theme'
import { apx, statusBarHeight } from '../../utils/device'
import GlobalNavigation from '../../utils/GlobalNavigation'

class ItemDetail extends React.PureComponent {
  static defaultProps = {}

  render() {
    return (
      <TouchableOpacity onPress={this.props.event}>
        <View
          style={{
            flexDirection: 'row',
            height: apx(50),
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <View style={{ width: '60%', paddingLeft: apx(23) }}>
            <Text style={{ fontSize: apx(13), color: '#384953' }}>
              {this.props.label}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '40%',
              justifyContent: 'flex-end',
              marginRight: apx(20),
            }}
          >
            <Image
              style={{ height: apx(15), width: apx(15) }}
              source={require('../../images/back1.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class SPCA extends React.Component {
  state = {}

  render = () => (
    <Container>
      {this.renderHeader()}
      <KeyboardAwareScrollView style={{ zIndex: 0, marginTop: apx(-64) }}>
        <View
          style={{
            flex: 1,
            alignItems: 'stretch',
          }}
        >
          <Image
            source={require('../../images/Services/SPCA_cat.png')}
            style={{
              width: apx(375),
              margin: 0,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: apx(13),
              fontFamily: 'Helvetica',
              marginTop: apx(-160),
              marginLeft: apx(20),
              marginRight: apx(20),
              ...STYLES.center,
            }}
          >
            The society for the prevention of cruelty to animals. The SPCA was
            the first humane society to be established In North America and
            today is one of the largest in the world.
          </Text>
        </View>
        {this.renderList()}
      </KeyboardAwareScrollView>
    </Container>
  )

  renderHeader = () => (
    <View
      style={{
        backgroundColor: '#0E90FD00',
        paddingTop: statusBarHeight,
        zIndex: 1,
      }}
    >
      <Flex style={{ height: apx(44) }} justify="between">
        <TouchableOpacity
          style={{
            height: apx(44),
            paddingHorizontal: apx(16),
            ...STYLES.center,
          }}
          onPress={() => {
            if (this.props.pressLeft) {
              this.props.pressLeft()
            } else {
              GlobalNavigation.goBack()
            }
          }}
        >
          <Image
            source={Images.backFFF}
            style={{ width: apx(9), height: apx(14) }}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: apx(18), color: '#fff' }}>SPCA</Text>

        <TouchableOpacity
          style={{
            height: apx(44),
            paddingHorizontal: apx(16),
            ...STYLES.center,
          }}
        />
      </Flex>
    </View>
  )

  renderList = () => (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: apx(30),
        marginTop: apx(20),
      }}
    >
      <Text style={styles.listTitle}>{strings('services.keyissues')}</Text>
      <View style={{ backgroundColor: '#fff', marginTop: apx(10) }}>
        <ItemDetail label={strings('services.homelessness')} event={() => {}} />
        <ItemDetail label={strings('services.cruelty')} event={() => {}} />
      </View>
      <Text style={styles.listTitle}>{strings('services.ourresponses')}</Text>
      <View style={{ backgroundColor: '#fff', marginTop: apx(10) }}>
        <ItemDetail label={strings('services.rescue')} event={() => {}} />
        <ItemDetail label={strings('services.placement')} event={() => {}} />
        <ItemDetail label={strings('services.protection')} event={() => {}} />
      </View>
      <TouchableOpacity
        style={{
          height: apx(50),
          paddingHorizontal: apx(16),
          ...STYLES.center,
          borderRadius: apx(25),
          backgroundColor: '#0E90FD',
          marginTop: apx(70),
          marginLeft: apx(68),
          marginRight: apx(68),
        }}
        onPress={() => this.props.navigation.navigate('Donate')}
      >
        <Text style={styles.buttonTitle}>I want to Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: apx(50),
          paddingHorizontal: apx(16),
          ...STYLES.center,
          borderRadius: apx(25),
          backgroundColor: '#05CCF5',
          marginTop: apx(13),
          marginLeft: apx(68),
          marginRight: apx(69),
          marginBottom: apx(80),
        }}
        onPress={() => this.props.navigation.navigate('Adopt')}
      >
        <Text style={styles.buttonTitle}>I want to Adopt</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listTitle: {
    color: COLORS.text384953,
    fontSize: apx(18),
    fontFamily: 'Helvetica',
    marginTop: apx(20),
    marginLeft: apx(20),
  },
  buttonTitle: {
    color: 'white',
    fontSize: apx(13),
    fontFamily: 'Helvetica',
    ...STYLES.center,
  },
})
