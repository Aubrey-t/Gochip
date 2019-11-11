import React from 'react'
import PropTypes from 'prop-types'
import { Image, ImageBackground, Text, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { withNavigation } from 'react-navigation'
import { COLORS, STYLES } from '../theme'
import Images from '../images/images'
import StarRate from '../components/StarRate'
import { apx } from '../utils/device'

class CommentItem extends React.PureComponent {
  static defaultProps = {
    item: {},
  }

  static propTypes = {
    item: PropTypes.object,
  }

  render() {
    console.log(this.props.item)
    return (
      <Flex
        style={{
          paddingHorizontal: apx(20),
          paddingVertical: apx(23),
          backgroundColor: '#fff',
        }}
        align="start"
      >
        <Image
          source={require('../images/Mock/service_comment_avatar_1.png')}
          style={{ width: apx(45), height: apx(45), borderRadius: apx(10) }}
        />
        <View style={{ flex: 1, marginLeft: apx(13) }}>
          <Flex>
            <Text
              style={{
                color: COLORS.text384953,
                fontSize: apx(11),
                marginRight: apx(5),
                fontWeight: 'bold',
              }}
            >
              Hannah Cho
            </Text>
            {false && (
              <ImageBackground
                source={Images.levelHorizontal}
                style={{
                  width: apx(36),
                  height: apx(12),
                  ...STYLES.center,
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: apx(8),
                    marginLeft: apx(10),
                  }}
                >
                  Lv7
                </Text>
              </ImageBackground>
            )}

            <View style={{ flex: 1 }} />
            <Text style={{ color: COLORS.text9b9b9b, fontSize: apx(11) }}>
              January 1
            </Text>
          </Flex>
          <StarRate rate={4} style={{ marginVertical: apx(4) }} />
          <Text style={{ color: COLORS.text9b9b9b, fontSize: apx(11) }}>
            The shop is great!
          </Text>

          <Flex justify="between" style={{ marginTop: apx(13) }}>
            <Image
              source={require('../images/Mock/service_comment_img_1_1.png')}
              style={{ width: apx(88), height: apx(55), borderRadius: apx(2) }}
            />
            <Image
              source={require('../images/Mock/service_comment_img_1_2.png')}
              style={{ width: apx(88), height: apx(55), borderRadius: apx(2) }}
            />
            <Image
              source={require('../images/Mock/service_comment_img_1_3.png')}
              style={{ width: apx(88), height: apx(55), borderRadius: apx(2) }}
            />
          </Flex>
        </View>
      </Flex>
    )
  }
}

export default withNavigation(CommentItem)
