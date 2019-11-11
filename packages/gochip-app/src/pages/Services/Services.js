import React from 'react'
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Flex } from '@ant-design/react-native'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import Swiper from 'react-native-swiper'
import { BoxShadow } from 'react-native-shadow'
import { strings } from '../../locales/i18n'
import Images from '../../images/images'
import { COLORS, STYLES } from '../../theme'
import { apx, statusBarHeight } from '../../utils/device'
import StarRate from '../../components/StarRate'
import SearchBar from '../../components/SearchBar'

export default class Services extends React.Component {
  state = {
    tabIndex: 0,
    scrollTabs: ['Veterinarians', 'Pet Grooming', 'Pet Walking', 'Pet Sitting'],
  }

  render = () => (
    <View style={{ flex: 1 }}>
      <KeyboardAwareFlatList
        data={[
          require('../../images/Mock/services_avatar_1.png'),
          require('../../images/Mock/services_avatar_2.png'),
          require('../../images/Mock/services_avatar_3.png'),
          require('../../images/Mock/services_avatar_1.png'),
          require('../../images/Mock/services_avatar_2.png'),
          require('../../images/Mock/services_avatar_3.png'),
        ]}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={() => <View style={{ height: apx(49) }} />}
        style={{ backgroundColor: '#F1F8FF' }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index.toString()}
            style={{ width: apx(375), ...STYLES.center, marginTop: apx(18) }}
            onPress={() =>
              this.props.navigation.navigate('ServicesDetail', {
                title: `${
                  this.state.scrollTabs[this.state.tabIndex]
                }  ${index}`,
              })
            }
          >
            <Flex justify="center">
              <BoxShadow
                setting={{
                  color: '#0E90FD',
                  width: apx(335 - 18 * 2),
                  height: apx(83),
                  border: apx(9),
                  radius: apx(5),
                  opacity: 0.1,
                  x: 0,
                  y: apx(9),
                  style: {},
                }}
              />
              <Flex
                style={{
                  width: apx(335),
                  height: apx(83),
                  backgroundColor: '#fff',
                  position: 'absolute',
                }}
              >
                <Image
                  source={item}
                  style={{
                    width: apx(81),
                    height: apx(81),
                    marginBottom: apx(-6),
                  }}
                />
                <View
                  style={{
                    height: apx(61),
                    marginLeft: apx(5),
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontSize: apx(13), color: COLORS.text384953 }}>
                    {this.state.scrollTabs[this.state.tabIndex]} {index}
                  </Text>
                  <Flex>
                    <StarRate rate={index} />
                    <Text
                      style={{
                        fontSize: apx(11),
                        color: COLORS.text9b9b9b,
                        marginLeft: apx(12),
                      }}
                    >
                      5.0
                    </Text>
                  </Flex>
                  <Text style={{ fontSize: apx(11), color: COLORS.text9b9b9b }}>
                    Tianhe City/Sports Center
                  </Text>
                </View>
                {/* <ImageBackground */}
                {/*  source={Images.levelVertical} */}
                {/*  style={{ */}
                {/*    width: apx(43), */}
                {/*    height: apx(47), */}
                {/*    position: 'absolute', */}
                {/*    top: apx(-5), */}
                {/*    right: 0, */}
                {/*    ...STYLES.center, */}
                {/*  }} */}
                {/* > */}
                {/*  <Text */}
                {/*    style={{ */}
                {/*      color: '#fff', */}
                {/*      fontSize: apx(8), */}
                {/*      marginTop: apx(2), */}
                {/*      marginLeft: apx(1), */}
                {/*    }} */}
                {/*  > */}
                {/*    Lv7 */}
                {/*  </Text> */}
                {/* </ImageBackground> */}
              </Flex>
            </Flex>
          </TouchableOpacity>
        )}
      />

      <BoxShadow
        setting={{
          color: '#0E90FD',
          width: apx(375),
          height: apx(50),
          border: apx(10),
          radius: apx(15),
          opacity: 0.1,
          x: 0,
          y: apx(45),
          style: {
            marginTop: apx(-45),
          },
        }}
      />
    </View>
  )

  renderHeader = () => (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: statusBarHeight + apx(25),
      }}
    >
      <Flex
        justify="between"
        style={{
          width: apx(375),
          paddingHorizontal: apx(20),
        }}
      >
        <Text
          style={{
            fontSize: apx(23),
            color: COLORS.text384953,
            fontWeight: '700',
          }}
        >
          {strings('bottomMenu.services')}
        </Text>
        <View>
          <Image
            source={Images.servicesWeather}
            style={{ width: apx(36), height: apx(36) }}
          />
          <Text
            style={{
              position: 'absolute',
              right: apx(-8),
              top: apx(3),
              fontSize: apx(10),
              color: COLORS.text384953,
            }}
          >
            30°
          </Text>
        </View>
      </Flex>

      <Flex
        style={{
          marginTop: apx(25),
          marginBottom: apx(13),
        }}
      >
        <SearchBar />
      </Flex>

      <Swiper
        height={apx(115)}
        loop
        index={0}
        autoplay
        horizontal
        paginationStyle={{ bottom: apx(-20) }}
        dotStyle={{
          width: apx(5),
          height: apx(5),
          borderRadius: apx(5 / 2),
          marginHorizontal: apx(4),
          borderColor: '#384953',
          backgroundColor: '#fff',
          borderWidth: apx(1),
        }}
        activeDotStyle={{
          width: apx(5),
          height: apx(5),
          borderRadius: apx(5 / 2),
          marginHorizontal: apx(4),
          backgroundColor: '#0E90FD',
        }}
      >
        {[1, 2, 3].map((el, i) => (
          <TouchableOpacity
            key={i.toString()}
            style={{ ...STYLES.center }}
            onPress={() => this.props.navigation.navigate('SPCA')}
          >
            <ImageBackground
              style={{
                width: apx(335),
                height: apx(115),
                borderRadius: apx(5),
                padding: apx(15),
              }}
              resizeMode="cover"
              source={require('../../images/Mock/services_banner_1.png.png')}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: apx(23),
                  fontWeight: '700',
                  marginBottom: apx(5),
                }}
              >
                SPCA
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: apx(11),
                  marginBottom: apx(2),
                }}
              >
                Does He Deserve a Chance?
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: apx(11),
                  marginBottom: apx(9),
                }}
              >
                Help Vulnerable Animals Now
              </Text>
              <View
                style={{
                  width: apx(15),
                  height: apx(2),
                  backgroundColor: '#fff',
                }}
              />
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </Swiper>

      <ScrollView
        horizontal
        style={{ width: apx(375), marginTop: apx(48), paddingLeft: apx(20) }}
      >
        {this.state.scrollTabs.map((item, index) => (
          <TouchableOpacity
            style={{
              ...STYLES.center,
              marginRight: apx(23),
            }}
            onPress={() => this.setState({ tabIndex: index })}
          >
            <Text
              style={{
                fontSize: apx(13),
                color:
                  index === this.state.tabIndex
                    ? COLORS.text384953
                    : COLORS.text9b9b9b,
                marginBottom: 5,
                fontWeight: '500',
              }}
            >
              {item}
            </Text>
            <View
              style={{
                width: apx(30),
                height: apx(1),
                backgroundColor:
                  index === this.state.tabIndex ? '#0E90FD' : 'transparent',
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
