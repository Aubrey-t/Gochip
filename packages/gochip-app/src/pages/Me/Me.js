import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { BoxShadow } from 'react-native-shadow'
import { strings } from '../../locales/i18n'
import Images from '../../images/images'
import { COLORS } from '../../theme'
import { apx, deviceWidth, statusBarHeight } from '../../utils/device'

export default class Me extends React.Component {
  state = {}

  render = () => (
    <View style={{ flex: 1 }}>
      {this.renderHeader()}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'stretch',
        }}
      >
        <View style={{ width: apx(80) }}>
          <Image
            source={require('../../images/Mock/tup.png.png')}
            style={{
              width: apx(80),
              height: apx(80),
              borderRadius: 23,
              marginLeft: 20,
              marginTop: 20,
              shadowRadius: 20,
              shadowColor: 'black',
              shadowOpacity: 1,
              shadowOffset: { width: 0, height: 10 },
              zIndex: 1,
            }}
          />
          <BoxShadow
            setting={{
              color: '#70948F',
              width: apx(70),
              height: apx(70),
              border: apx(10),
              radius: apx(25),
              opacity: 0.8,

              style: {
                marginTop: -70,
                marginLeft: 25,
                zIndex: 0,
              },
            }}
          />
        </View>

        <View
          style={{
            width: deviceWidth - 160,
            marginLeft: 38,
            marginTop: 42,
          }}
        >
          <Text
            style={{
              fontSize: 23,
              color: COLORS.text384953,
              fontWeight: '700',
            }}
          >
            Jamie Smith
          </Text>
        </View>
        <View
          style={{
            width: 50,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          <Image
            source={Images.meForwoardBlack}
            style={{
              width: 9,
              height: 18,
              marginTop: 50,
              marginRight: 0,
            }}
          />
        </View>
      </View>
      {this.renderButtons()}
      {this.renderTable()}
    </View>
  )

  renderHeader = () => (
    <View
      style={{
        alignItems: 'center',
        paddingTop: statusBarHeight + 25,
      }}
    >
      <Flex
        justify="end"
        type="flex"
        g
        style={{
          width: 375,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginRight: 20 }}>
          <Image source={Images.meScan} style={{ width: 23, height: 23 }} />
        </View>
        <View>
          <Image source={Images.meQRCode} style={{ width: 23, height: 23 }} />
        </View>
      </Flex>
    </View>
  )

  renderButtons = () => (
    <View
      style={{
        flex: 2,
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 30,
        height: 50,
      }}
    >
      <View style={styles.buttonView}>
        <Text style={styles.meButtonsTitle}>13</Text>
        <Text style={styles.meButtonsSub}>{strings('me.followed')}</Text>
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.meButtonsTitle}>7</Text>
        <Text style={styles.meButtonsSub}>{strings('me.followers')}</Text>
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.meButtonsTitle}>40</Text>
        <Text style={styles.meButtonsSub}>{strings('me.myPosts')}</Text>
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.meButtonsTitle}>13</Text>
        <Text style={styles.meButtonsSub}>{strings('me.favourite')}</Text>
      </View>
    </View>
  )

  renderTable = () => (
    <Flex
      style={{
        flex: 3,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Messages', {
            title: strings('me.messages'),
          })
        }
      >
        <Flex
          style={{
            height: apx(362),
            backgroundColor: COLORS.meMessages,
            marginBottom: apx(-296),
            borderRadius: 15,
            alignItems: 'stretch',
          }}
        >
          <Image source={Images.meComment} style={styles.icon} />
          <Text style={styles.iconTitle}>{strings('me.messages')}</Text>
          <Image source={Images.meBackWhite} style={styles.iconArrow} />
        </Flex>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Flex
          style={{
            height: apx(296),
            backgroundColor: COLORS.meDraft,
            marginBottom: apx(-230),
            borderRadius: 15,
            alignItems: 'stretch',
          }}
        >
          <Image source={Images.meDraft} style={styles.icon} />
          <Text style={styles.iconTitle}>{strings('me.myDraft')}</Text>
          <Image source={Images.meBackWhite} style={styles.iconArrow} />
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Flex
          style={{
            height: apx(230),
            backgroundColor: COLORS.meSetting,
            marginBottom: apx(-164),
            borderRadius: 15,
            alignItems: 'stretch',
          }}
        >
          <Image source={Images.meSetting} style={styles.icon} />
          <Text style={styles.iconTitle}>{strings('me.setting')}</Text>
          <Image source={Images.meBackWhite} style={styles.iconArrow} />
        </Flex>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Flex
          style={{
            height: apx(164),
            backgroundColor: COLORS.meHelp,
            marginBottom: apx(-98),
            borderRadius: 15,
            alignItems: 'stretch',
          }}
        >
          <Image source={Images.meHelp} style={styles.icon} />
          <Text style={styles.iconTitle}>{strings('me.help')}</Text>
          <Image source={Images.meBackWhite} style={styles.iconArrow} />
        </Flex>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Flex
          style={{
            height: apx(98),
            backgroundColor: COLORS.meAboutUs,
            borderRadius: 15,
            alignItems: 'stretch',
          }}
        >
          <Image source={Images.meAbout} style={styles.icon} />
          <Text style={styles.iconTitle}>{strings('me.aboutUs')}</Text>
          <Image source={Images.meBackWhite} style={styles.iconArrow} />
        </Flex>
      </TouchableOpacity>
    </Flex>
  )
}

const styles = StyleSheet.create({
  buttonView: {
    width: deviceWidth / 4,
    height: 50,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  meButtonsTitle: {
    color: COLORS.text384953,
    fontSize: 15,
    fontFamily: 'Helvetica',
  },
  meButtonsSub: {
    color: COLORS.text9b9b9b,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  icon: {
    flex: 0,
    width: 20,
    height: 20,
    marginLeft: apx(20),
    marginTop: 23,
  },
  iconTitle: {
    flex: 1,
    color: 'white',
    marginTop: 23,
    marginLeft: 10,
  },
  iconArrow: {
    flex: 0,
    width: 9,
    height: 18,
    marginRight: apx(15),
    marginTop: 23,
  },
})
