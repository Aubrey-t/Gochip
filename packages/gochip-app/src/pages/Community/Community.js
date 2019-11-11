import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Flex } from '@ant-design/react-native'
import { BoxShadow } from 'react-native-shadow'
import Waterfall from 'react-native-waterfall'
import SwipeAction from '@ant-design/react-native/lib/swipe-action'
import { strings } from '../../locales/i18n'
import Images from '../../images/images'
import { COLORS, STYLES } from '../../theme'
import { apx, statusBarHeight } from '../../utils/device'
import SvgIcon from '../../components/SvgIcon'
import SearchBar from '../../components/SearchBar'
import Button from '../../components/Button'

export default class Community extends React.Component {
  state = {
    tabIndex: 0,
    waterFallData: [],
    followingData: [],
    groupData: [],
  }

  componentDidMount(): void {
    new Array(20).fill(0).forEach((item, i) => {
      let mockData = {
        height: 256,
        type: 0,
      }
      switch (i % 3) {
        case 0:
          mockData = {
            height: apx(256),
            type: 0,
            name: `Tina`,
            img: require('../../images/Mock/communiy_cover_1.png'),
            avatar: require('../../images/Mock/communiy_avatar_1.png'),
          }
          break
        case 1:
          mockData = {
            height: apx(287),
            type: 1,
            name: `Cziko's do`,
            img: require('../../images/Mock/communiy_cover_2.png'),
            avatar: require('../../images/Mock/communiy_avatar_2.png'),
          }
          break
        case 2:
          mockData = {
            height: apx(172),
            type: 2,
            name: `Marek Szt`,
            img: require('../../images/Mock/communiy_cover_3.png'),
            avatar: require('../../images/Mock/communiy_avatar_3.png'),
          }
          break
        case 3:
          mockData = {
            height: apx(284),
            type: 3,
            img: require('../../images/Mock/communiy_cover_4.png'),
          }
          break
        default:
          break
      }
      this.state.waterFallData.push(mockData)
    })

    this.state.followingData = [
      {
        avatar: require('../../images/Mock/community_following_avatar_1.png'),
        name: 'Emily Zhou',
        date: '2019.07.12',
        isFollowed: false,
        desc: 'The 21 days dog walking.',
        imgList: [require('../../images/Mock/community_following_img_1.png')],
        isLike: true,
        likeCount: 1202,
        isCollect: true,
        collectCount: 68,
        isComment: true,
        commentCount: 99,
      },
      {
        avatar: require('../../images/Mock/community_following_avatar_2.png'),
        name: 'Pet Lovers',
        date: '2019.07.12',
        isFollowed: true,
        desc: 'They took him into a small room and I followed. ',
        imgList: [require('../../images/Mock/community_following_img_1.png')],
        isLike: false,
        likeCount: 1202,
        isCollect: false,
        collectCount: 68,
        isComment: false,
        commentCount: 99,
      },
    ]

    this.state.groupData = [
      {
        avatar: require('../../images/Mock/community_following_avatar_1.png'),
        title: 'Montreal Dogs Owners',
        introduction: `😺What's the English name for*?`,
      },
      {
        avatar: require('../../images/Mock/community_following_avatar_2.png'),
        title: 'Pet Lovers',
        introduction: `🐶😊Montreal Dogs Owners`,
      },
    ]

    this.setState({})
  }

  render = () => (
    <View style={{ flex: 1 }}>
      {this.renderHeader()}
      {this.state.tabIndex === 0 && (
        <View style={{ flex: 1 }}>
          <Waterfall
            style={{
              flex: 1,
              backgroundColor: '#F1F8FF',
              paddingVertical: apx(20),
            }}
            data={this.state.waterFallData}
            gap={apx(0)}
            numberOfColumns={2}
            expansionOfScope={100}
            onEndReachedThreshold={1000}
            renderItem={(itemData, itemIdx, itemContainer) => (
              <View
                style={{
                  width: itemContainer.width,
                  // height: itemData.height,
                  ...STYLES.center,
                  alignItems: itemIdx % 2 === 0 ? 'flex-end' : 'flex-start',
                  paddingHorizontal: apx(5),
                  // marginBottom:10
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    ...STYLES.center,
                    marginBottom: apx(10),
                  }}
                >
                  {(() => {
                    let imgHeight = 0

                    switch (itemData.type) {
                      case 0:
                        imgHeight = apx(178)
                        break
                      case 1:
                        imgHeight = apx(209)
                        break
                      case 2:
                        imgHeight = apx(110)
                        break
                      case 3:
                        imgHeight = apx(170)
                        break
                      default:
                        break
                    }
                    return (
                      <Image
                        source={itemData.img}
                        style={{
                          width: apx(163),
                          height: imgHeight,
                        }}
                      />
                    )
                  })()}

                  <View
                    style={{
                      width: apx(163),
                      alignItems: 'center',
                      paddingTop: apx(8),
                      paddingBottom: apx(10),
                      paddingHorizontal: apx(10),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: apx(13),
                        color: COLORS.text384953,
                        width: apx(145),
                        height: apx(32),
                      }}
                    >
                      liked or enjoyed by a large number of games.
                    </Text>
                    <Flex align="center" style={{ marginTop: apx(10) }}>
                      <Image
                        source={itemData.avatar}
                        style={{ width: apx(18), height: apx(18) }}
                      />
                      <Text
                        style={{
                          fontSize: apx(11),
                          color: COLORS.text9b9b9b,
                          width: apx(65),
                          marginLeft: apx(8),
                        }}
                        numberOfLines={1}
                      >
                        {itemData.name}
                      </Text>

                      <Flex style={{ flex: 1 }} justify="end">
                        <Image
                          source={
                            itemIdx % 2 === 0
                              ? Images.communityDislike
                              : Images.communityLike
                          }
                          style={{ width: apx(13), height: apx(13) }}
                        />
                        <Text
                          style={{
                            fontSize: apx(11),
                            color: COLORS.text9b9b9b,
                            marginLeft: apx(4),
                          }}
                          numberOfLines={1}
                        >
                          665
                        </Text>
                      </Flex>
                    </Flex>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddPopular')}
            style={{
              position: 'absolute',
              zIndex: 10,
              right: apx(20),
              bottom: apx(19),
              width: apx(60),
              height: apx(60),
              borderRadius: apx(30),
              backgroundColor: '#0E90FD',
              ...STYLES.center,
            }}
          >
            <Image
              source={Images.communityCamera}
              style={{ width: apx(23), height: apx(23) }}
            />
          </TouchableOpacity>
        </View>
      )}
      {this.state.tabIndex === 1 && (
        <FlatList
          data={this.state.followingData}
          ListFooterComponent={() => <View style={{ height: apx(49) }} />}
          style={{ backgroundColor: '#F1F8FF' }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                // width: apx(335),
                backgroundColor: '#fff',
                padding: apx(16),
                marginTop: apx(10),
                marginHorizontal: apx(20),
              }}
              onPress={() => this.props.navigation.navigate('FollowingDetail')}
            >
              <Flex>
                <Image
                  source={item.avatar}
                  style={{ width: apx(38), height: apx(38) }}
                />
                <View
                  style={{
                    height: apx(38),
                    flex: 1,
                    marginLeft: apx(10),
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      fontSize: apx(13),
                      color: COLORS.text384953,
                      fontWeight: '500',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: apx(11), color: COLORS.text9b9b9b }}>
                    {item.date}
                  </Text>
                </View>
                <Button
                  theme={item.isFollowed ? 'white' : 'blue'}
                  text={
                    item.isFollowed ? strings('followed') : strings('follow')
                  }
                  onPress={() => {
                    this.state.followingData[
                      index
                    ].isFollowed = !item.isFollowed
                    this.setState({})
                  }}
                />
              </Flex>
              <Text
                style={{
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  marginTop: apx(18),
                }}
              >
                {item.desc}
              </Text>
              <Image
                source={item.imgList[0]}
                style={{
                  width: apx(303),
                  height: apx(173),
                  marginTop: apx(13),
                }}
              />
              <Flex style={{ marginTop: apx(13) }}>
                <TouchableOpacity
                  onPress={() => {
                    this.state.followingData[index].isLike = !item.isLike
                    this.setState({})
                  }}
                >
                  <Flex align="center" style={{ width: apx(73) }}>
                    <SvgIcon
                      icon={
                        item.isLike
                          ? 'DZ_icon_selected.png'
                          : 'DZ_icon_default.png'
                      }
                      size={apx(18)}
                    />
                    <Text
                      style={{
                        fontSize: apx(11),
                        color: COLORS.text9b9b9b,
                        marginLeft: apx(10),
                      }}
                    >
                      {item.likeCount}
                    </Text>
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.state.followingData[index].isCollect = !item.isCollect
                    this.setState({})
                  }}
                >
                  <Flex align="center" style={{ width: apx(73) }}>
                    <SvgIcon
                      icon={
                        item.isCollect
                          ? 'shouchang_icon._selected.png'
                          : 'shouchang_icon._default.png'
                      }
                      size={apx(18)}
                    />
                    <Text
                      style={{
                        fontSize: apx(11),
                        color: COLORS.text9b9b9b,
                        marginLeft: apx(10),
                      }}
                    >
                      {item.collectCount}
                    </Text>
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.state.followingData[index].isComment = !item.isComment
                    this.setState({})
                  }}
                >
                  <Flex align="center" style={{ width: apx(73) }}>
                    <SvgIcon
                      icon={
                        item.isComment
                          ? 'plun_icon_highiight.png'
                          : 'plun_icon_default.png'
                      }
                      size={apx(18)}
                    />
                    <Text
                      style={{
                        fontSize: apx(11),
                        color: COLORS.text9b9b9b,
                        marginLeft: apx(10),
                      }}
                    >
                      {item.commentCount}
                    </Text>
                  </Flex>
                </TouchableOpacity>
              </Flex>
            </TouchableOpacity>
          )}
        />
      )}

      {this.state.tabIndex === 2 && (
        <FlatList
          data={this.state.groupData}
          ListFooterComponent={() => <View style={{ height: apx(49) }} />}
          ItemSeparatorComponent={() => (
            <Flex>
              <View style={{ flex: 1, backgroundColor: '#fff' }} />
              <View
                style={{
                  width: apx(355),
                  height: StyleSheet.hairlineWidth,
                  backgroundColor: '#d8d8d8',
                }}
              />
            </Flex>
          )}
          style={{ backgroundColor: '#F1F8FF' }}
          renderItem={({ item, index }) => {
            const swipeoutBtns = [
              {
                text: strings('delete'),
                style: {
                  backgroundColor: '#F8656D',
                  color: '#fff',
                },
                onPress: () => {
                  this.state.groupData.splice(index, 1)
                  this.setState({})
                },
              },
            ]
            return (
              <SwipeAction
                buttonWidth={apx(110)}
                right={swipeoutBtns}
                autoClose
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Chatting')}
                >
                  <Flex
                    style={{
                      backgroundColor: '#fff',
                      paddingVertical: apx(18),
                      paddingHorizontal: apx(20),
                    }}
                  >
                    <Image
                      source={item.avatar}
                      style={{
                        width: apx(65),
                        height: apx(68),
                        borderRadius: apx(14),
                      }}
                    />
                    <View
                      style={{
                        flex: 1,
                        height: apx(40),
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: apx(13),
                          color: COLORS.text384953,
                          marginLeft: apx(10),
                        }}
                        numberOfLines={1}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: apx(11),
                          color: COLORS.text9b9b9b,
                          marginLeft: apx(10),
                        }}
                        numberOfLines={1}
                      >
                        {item.introduction}
                      </Text>
                    </View>
                  </Flex>
                </TouchableOpacity>
              </SwipeAction>
            )
          }}
        />
      )}

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
          {strings('bottomMenu.community')}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddFriends')}
        >
          <Image
            source={Images.communityAdd}
            style={{ width: apx(18), height: apx(18) }}
          />
        </TouchableOpacity>
      </Flex>

      <Flex
        align="center"
        style={{
          marginTop: apx(25),
        }}
      >
        <SearchBar />
      </Flex>

      <Flex
        justify="between"
        style={{ width: apx(375), marginTop: apx(23), paddingLeft: apx(20) }}
      >
        {[
          strings('community.popular'),
          strings('community.following'),
          strings('community.groups'),
        ].map((item, index) => (
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
                marginBottom: apx(5),
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
      </Flex>
    </View>
  )
}
