import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { strings } from '../../locales/i18n'
import { COLORS, STYLES } from '../../theme'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import SvgIcon from '../../components/SvgIcon'

export default class FollowingDetail extends React.Component {
  state = {
    details: {
      avatar: require('../../images/Mock/community_following_avatar_1.png'),
      name: 'Emily Zhou',
      date: '2019.07.12',
      isFollowed: false,
      desc: `21 days dog walking. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n🐱Write down the following information`,
      imgList: [
        require('../../images/Mock/following_detail_img_1.png'),
        require('../../images/Mock/following_detail_img_2.png'),
        require('../../images/Mock/following_detail_img_3.png'),
        require('../../images/Mock/following_detail_img_4.png'),
        require('../../images/Mock/following_detail_img_5.png'),
        require('../../images/Mock/following_detail_img_6.png'),
      ],
      isLike: true,
      likeCount: 1202,
      isCollect: true,
      collectCount: 68,
      isComment: true,
      commentCount: 99,
    },
  }

  render = () => {
    const { details } = this.state
    return (
      <Container>
        <TitleBar title={strings('details')} />
        <KeyboardAwareScrollView>
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: apx(20),
              paddingTop: apx(13),
              paddingBottom: apx(23),
              backgroundColor: '#fff',
            }}
          >
            <Flex>
              <Image
                source={require('../../images/Mock/community_following_avatar_1.png')}
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
                  {details.name}
                </Text>
                <Text style={{ fontSize: apx(11), color: COLORS.text9b9b9b }}>
                  {details.date}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: apx(60),
                  height: apx(28),
                  borderRadius: apx(5),
                  backgroundColor: details.isFollowed ? '#fff' : '#0E90FD',
                  borderWidth: apx(1),
                  borderColor: '#0E90FD',
                  ...STYLES.center,
                }}
                onPress={() => {
                  details.isFollowed = !details.isFollowed
                  this.setState({})
                }}
              >
                <Text
                  style={{
                    fontSize: apx(11),
                    color: details.isFollowed ? '#0E90FD' : '#fff',
                  }}
                >
                  {details.isFollowed ? strings('followed') : strings('follow')}
                </Text>
              </TouchableOpacity>
            </Flex>

            <Text
              style={{
                alignSelf: 'stretch',
                fontSize: apx(13),
                color: COLORS.text384953,
                textAlign: 'left',
                marginTop: apx(18),
              }}
            >
              {details.desc}
            </Text>

            <Flex
              wrap="wrap"
              justify="between"
              style={{
                marginTop: apx(18),
                alignSelf: 'stretch',
              }}
            >
              {this.state.details.imgList.map((img, index) => (
                <Image
                  source={img}
                  key={index.toString()}
                  style={{
                    width: apx(109),
                    height: apx(84),
                    marginBottom: apx(4),
                  }}
                />
              ))}
            </Flex>

            <Flex style={{ marginTop: apx(18) }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: apx(11),
                  color: COLORS.text9b9b9b,
                  textAlign: 'left',
                }}
              >
                {details.date}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  details.isLike = !details.isLike
                  this.setState({})
                }}
              >
                <Flex align="center" style={{ width: apx(73) }}>
                  <SvgIcon
                    icon={
                      details.isLike
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
                    {details.likeCount}
                  </Text>
                </Flex>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  details.isCollect = !details.isCollect
                  this.setState({})
                }}
              >
                <Flex align="center" style={{ width: apx(73) }}>
                  <SvgIcon
                    icon={
                      details.isCollect
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
                    {details.collectCount}
                  </Text>
                </Flex>
              </TouchableOpacity>

              <TouchableOpacity>
                <SvgIcon icon="fx_icon_default.png" size={apx(18)} />
              </TouchableOpacity>
            </Flex>
          </View>

          <Flex
            style={{
              height: apx(63),
              paddingHorizontal: apx(20),
              backgroundColor: '#fff',
              marginTop: apx(10),
            }}
            justify="between"
          >
            <Text
              style={{
                fontSize: apx(13),
                color: COLORS.text384953,
                fontWeight: '500',
              }}
            >
              {strings('services.comment')}(15)
            </Text>
            <TouchableOpacity>
              <SvgIcon
                icon="back_icon_default.png"
                size={apx(18)}
                style={{
                  transform: [{ rotate: '180deg' }],
                }}
              />
            </TouchableOpacity>
          </Flex>
          <Flex
            style={{
              height: apx(35),
              paddingHorizontal: apx(20),
              paddingBottom: apx(10),
              backgroundColor: '#fff',
            }}
            align="center"
          >
            <Image
              source={require('../../images/Mock/following_comment_author.png')}
              style={{
                width: apx(33),
                height: apx(33),
              }}
            />
            <Flex
              style={{
                flex: 1,
                marginLeft: apx(12),
                backgroundColor: '#F1F8FF',
                borderRadius: apx(18),
                height: apx(35),
              }}
            >
              <TextInput
                style={{ flex: 1, marginHorizontal: apx(23) }}
                placeholder={strings('community.yourComment')}
              />
              <TouchableOpacity>
                <SvgIcon
                  icon="emoji"
                  size={apx(23)}
                  style={{ margin: apx(6) }}
                />
              </TouchableOpacity>
            </Flex>
          </Flex>

          {new Array(3).fill(0).map((item, index) => (
            <Flex
              key={index.toString()}
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: apx(20),
                paddingVertical: apx(13),
              }}
              align="start"
            >
              <Image
                source={require('../../images/Mock/following_comment_author_1.png')}
                style={{ width: apx(33), height: apx(33) }}
              />
              <View style={{ marginLeft: apx(10) }}>
                <Flex align="start">
                  <View
                    style={{
                      flex: 1,
                      height: apx(33),
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
                      Pet Lovers
                    </Text>
                    <Text
                      style={{
                        fontSize: apx(11),
                        color: COLORS.text9b9b9b,
                      }}
                    >
                      2019/07/07 20:06
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <SvgIcon icon="plun_icon_default.png" size={apx(13)} />
                  </TouchableOpacity>
                </Flex>
                <Text
                  style={{
                    fontSize: apx(13),
                    color: COLORS.text384953,
                    marginTop: apx(17),
                  }}
                >
                  21 days dog walking. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.{`😻🥎`}
                </Text>
              </View>
            </Flex>
          ))}
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}
