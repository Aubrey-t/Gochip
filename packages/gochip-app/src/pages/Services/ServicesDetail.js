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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BoxShadow } from 'react-native-shadow'
import Modal from 'react-native-modal'
import { strings } from '../../locales/i18n'
import Images from '../../images/images'
import { COLORS, STYLES } from '../../theme'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import CommentItem from '../../widgets/CommentItem'
import StarRate from '../../components/StarRate'
import Separator from '../../components/Separator'
import { apx } from '../../utils/device'
import SvgIcon from '../../components/SvgIcon'

export default class ServicesDetail extends React.Component {
  state = {
    modalShare: false,
  }

  render = () => (
    <Container>
      <TitleBar title={this.props.navigation.getParam('title')} />
      <KeyboardAwareScrollView>
        {this.renderHeader()}
        {new Array(3).fill(0).map((item, index) => (
          <View key={index.toString()}>
            <CommentItem />
            {index !== 2 && <Separator style={{ marginLeft: apx(78) }} />}
          </View>
        ))}
      </KeyboardAwareScrollView>

      <BoxShadow
        setting={{
          color: '#0E90FD',
          width: apx(375),
          height: apx(49),
          border: apx(5),
          radius: apx(0),
          opacity: 0.1,
          x: 0,
          y: apx(0),
          style: {},
        }}
      >
        <Flex
          style={{ width: apx(375), height: apx(49), backgroundColor: '#fff' }}
        >
          <TouchableOpacity
            style={{ flex: 1, ...STYLES.center }}
            onPress={() => this.props.navigation.navigate('WriteComments')}
          >
            <SvgIcon
              icon="plun_icon_default.png"
              size={apx(18)}
              style={{ marginBottom: apx(3) }}
            />
            <Text style={{ color: COLORS.text384953, fontSize: apx(11) }}>
              {strings('services.write')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, ...STYLES.center }}>
            <SvgIcon
              icon="shouchang_icon._default.png"
              size={apx(18)}
              style={{ marginBottom: apx(3) }}
            />
            <Text style={{ color: COLORS.text384953, fontSize: apx(11) }}>
              {strings('services.favourite')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, ...STYLES.center }}
            onPress={() => this.setState({ modalShare: true })}
          >
            <SvgIcon
              icon="fx_icon_default.png"
              size={apx(18)}
              style={{ marginBottom: apx(3) }}
            />
            <Text style={{ color: COLORS.text384953, fontSize: apx(11) }}>
              {strings('services.share')}
            </Text>
          </TouchableOpacity>
        </Flex>
      </BoxShadow>

      <Modal isVisible={this.state.modalShare} style={{ margin: 0 }}>
        <Container
          style={{ justifyContent: 'flex-end', backgroundColor: 'transparent' }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.setState({ modalShare: false })}
          />

          <View style={{ height: apx(176), backgroundColor: '#fff' }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingHorizontal: apx(33 - 29 / 2) }}
            >
              {[
                {
                  img: require('../../images/Services/WeChat_icon.png.png'),
                  text: strings('services.weChat'),
                },
                {
                  img: require('../../images/Services/Facebook_icon.png.png'),
                  text: strings('services.facebook'),
                },
                {
                  img: require('../../images/Services/Message_icon.png.png'),
                  text: strings('services.message'),
                },
                {
                  img: require('../../images/Services/Copy_Link_icon.png.png'),
                  text: strings('services.copyLink'),
                },
                {
                  img: require('../../images/Services/More_icon.png.png'),
                  text: strings('services.more'),
                },
              ].map((item, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  onPress={() => this.setState({ modalShare: false })}
                  style={{
                    paddingTop: apx(22),
                    marginHorizontal: apx(29 / 2),
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ width: apx(49), height: apx(49) }}
                  />
                  <Text
                    style={{
                      color: COLORS.text333333,
                      fontSize: apx(11),
                      marginTop: apx(13),
                    }}
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={{
                height: apx(50),
                ...STYLES.center,
                borderTopWidth: StyleSheet.hairlineWidth,
                borderColor: '#dcdcdc',
              }}
              onPress={() => this.setState({ modalShare: false })}
            >
              <Text
                style={{
                  fontSize: apx(15),
                  color: '#0E90FD',
                  fontWeight: '500',
                }}
              >
                {strings('cancel')}
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </Modal>
    </Container>
  )

  renderHeader = () => (
    <View
      style={{
        alignItems: 'center',
        paddingTop: apx(19),
        backgroundColor: '#fff',
      }}
    >
      <Flex style={{ width: apx(335), height: apx(139) }}>
        <Image
          source={require('../../images/Mock/tup.png.png')}
          style={{ width: apx(88), height: apx(139), borderRadius: apx(5) }}
        />
        <View
          style={{
            marginLeft: apx(16),
            height: apx(139),
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: apx(13), color: COLORS.text384953 }}>
              Veterinarians
            </Text>
            <StarRate
              rate={4}
              style={{ marginTop: apx(5), marginBottom: apx(4) }}
            />
            <Text style={{ fontSize: apx(11), color: COLORS.text9b9b9b }}>
              Tianhe City/Sports Center
            </Text>
          </View>

          <Flex>
            <View
              style={{
                height: apx(61),
                marginLeft: apx(5),
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  width: apx(157),
                  fontSize: apx(11),
                  color: COLORS.text384953,
                }}
              >
                Available Time: 10:00 to 16:00
              </Text>
              <Text
                style={{
                  width: apx(157),
                  fontSize: apx(11),
                  color: COLORS.text384953,
                }}
              >
                Location: No.2, Street North, Grand Centre
              </Text>
            </View>

            <Image
              source={Images.servicesPhoneCall}
              style={{ width: apx(31), height: apx(31), marginLeft: apx(22) }}
            />
          </Flex>
        </View>

        {false && (
          <ImageBackground
            source={Images.levelVertical}
            style={{
              width: apx(43),
              height: apx(47),
              position: 'absolute',
              top: apx(-5),
              right: 0,
              ...STYLES.center,
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: apx(8),
                marginTop: apx(2),
                marginLeft: apx(1),
              }}
            >
              Lv7
            </Text>
          </ImageBackground>
        )}
      </Flex>

      <TouchableOpacity
        style={{ ...STYLES.center, marginTop: apx(33) }}
        onPress={() => this.props.navigation.navigate('Comments')}
      >
        <View
          style={{
            width: apx(375),
            height: apx(10),
            backgroundColor: '#F1F8FF',
          }}
        />
        <Flex style={{ width: apx(335), marginTop: apx(23) }} justify="between">
          <Text style={{ color: COLORS.text384953, fontSize: apx(13) }}>
            {strings('services.comment')}(1)
          </Text>
          <Image
            source={Images.forwardGray}
            style={{ width: apx(18), height: apx(18) }}
          />
        </Flex>
      </TouchableOpacity>
    </View>
  )
}
