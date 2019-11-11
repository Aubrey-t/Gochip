import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Container } from 'native-base'
import Flex from '@ant-design/react-native/lib/flex'
import { BoxShadow } from 'react-native-shadow'
import Carousel from 'react-native-snap-carousel'
import { strings } from '../../locales/i18n'
import Images from '../../images/images'
import { COLORS, STYLES } from '../../theme'
import {
  apx,
  deviceHeight,
  deviceWidth,
  statusBarHeight,
} from '../../utils/device'

export default class Passport extends React.Component {
  state = {
    data: [
      {
        id: '0263',
        name: 'Jimmy',
        img: require('../../images/Mock/tup.png.png'),
        birthday: 'Nov 20th, 2019',
        sex: 'Female - Spayed',
      },
      {
        id: '0264',
        name: 'Jimm1',
        img: require('../../images/Mock/tup.png.png'),
        birthday: 'Nov 20th, 2019',
        sex: 'Female - Spayed',
      },
      {
        id: '0265',
        name: 'Jimm2',
        img: require('../../images/Mock/tup.png.png'),
        birthday: 'Nov 20th, 2019',
        sex: 'Female - Spayed',
      },
    ],
  }

  componentDidMount() {}

  render = () => {
    const { data } = this.state
    return (
      <Container
        style={{
          justifyContent: 'space-between',
          flex: 1,
          flexDirection: 'column',
        }}
      >
        {this.renderHeader()}
        <Carousel
          ref={c => {
            this._carousel = c
          }}
          itemHeight={deviceHeight - apx(160)}
          sliderHeight={deviceHeight - apx(150)}
          vertical
          data={data}
          layout="stack"
          layoutCardOffset="18"
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PetDetails', {
                  item,
                })
              }}
              key={item.id}
            >
              <View
                style={{
                  ...STYLES.center,
                  padding: apx(10),
                  borderRadius: apx(10),
                }}
              >
                <ImageBackground
                  source={item.img}
                  style={{
                    height: deviceHeight - apx(170),
                    width: deviceWidth * 0.9,
                  }}
                >
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      height: '100%',
                      padding: apx(20),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: apx(38),
                        color: '#FFFFFF',
                        fontFamily: 'PingFangSC-Medium',
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text style={styles.textItem}>
                      Chip ID: {item.id}
                      {index}
                    </Text>
                    <Text style={styles.textItem}>
                      Birthday: {item.birthday}
                    </Text>
                    <Text style={styles.textItem}>Sex: {item.sex}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth * 0.9}
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
      </Container>
    )
  }

  renderHeader = () => (
    <View
      style={{
        alignItems: 'center',
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
          {strings('bottomMenu.passport')}
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AddPetDetails')
            }}
          >
            <Image
              source={Images.passportAdd}
              style={{ width: apx(18), height: apx(18) }}
            />
          </TouchableOpacity>
        </View>
      </Flex>
    </View>
  )
}

const styles = StyleSheet.create({
  textItem: {
    marginTop: apx(8),
    fontSize: apx(11),
    color: '#FFFFFF',
    fontFamily: 'PingFangSC-Medium',
  },
})
